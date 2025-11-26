// Figma API 클라이언트
const FIGMA_API_BASE = 'https://api.figma.com/v1';

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  fills?: any[];
  strokes?: any[];
  effects?: any[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  styles?: {
    [key: string]: string;
  };
}

export interface FigmaFile {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  document: FigmaNode;
}

/**
 * Figma 파일 정보 가져오기
 */
export async function getFigmaFile(fileId: string): Promise<FigmaFile> {
  const token = process.env.FIGMA_TOKEN;

  if (!token) {
    throw new Error('FIGMA_TOKEN이 설정되지 않았습니다. .env.local 파일을 확인하세요.');
  }

  const response = await fetch(`${FIGMA_API_BASE}/files/${fileId}`, {
    headers: {
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API 오류: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * 특정 노드의 이미지 URL 가져오기
 */
export async function getFigmaImageUrls(
  fileId: string,
  nodeIds: string[],
  options?: {
    scale?: number;
    format?: 'jpg' | 'png' | 'svg' | 'pdf';
  }
): Promise<{ [nodeId: string]: string }> {
  const token = process.env.FIGMA_TOKEN;

  if (!token) {
    throw new Error('FIGMA_TOKEN이 설정되지 않았습니다.');
  }

  const scale = options?.scale || 2;
  const format = options?.format || 'png';

  const url = new URL(`${FIGMA_API_BASE}/images/${fileId}`);
  url.searchParams.append('ids', nodeIds.join(','));
  url.searchParams.append('scale', scale.toString());
  url.searchParams.append('format', format);

  const response = await fetch(url.toString(), {
    headers: {
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API 오류: ${response.status}`);
  }

  const data = await response.json();
  return data.images;
}

/**
 * 노드에서 스타일 추출 (색상, 폰트 등)
 */
export function extractStyles(node: FigmaNode) {
  const styles: any = {};

  // 배경색 추출
  if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.color) {
      const { r, g, b, a = 1 } = fill.color;
      styles.backgroundColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
    }
  }

  // 테두리 색상 추출
  if (node.strokes && Array.isArray(node.strokes) && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID' && stroke.color) {
      const { r, g, b, a = 1 } = stroke.color;
      styles.borderColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
    }
  }

  // 크기 추출
  if (node.absoluteBoundingBox) {
    styles.width = node.absoluteBoundingBox.width;
    styles.height = node.absoluteBoundingBox.height;
  }

  return styles;
}

/**
 * Figma 노드를 Tailwind CSS 클래스로 변환
 */
export function nodeToTailwind(node: FigmaNode): string[] {
  const classes: string[] = [];

  // 여기에 변환 로직 추가
  // 예: 배경색, 크기, 간격 등을 Tailwind 클래스로 변환

  return classes;
}
