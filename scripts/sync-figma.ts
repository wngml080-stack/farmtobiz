#!/usr/bin/env tsx

/**
 * Figma 디자인을 코드와 동기화하는 스크립트
 *
 * 사용법:
 * npm run figma:sync
 */

import { getFigmaFile, extractStyles } from '../lib/figma';
import * as fs from 'fs';
import * as path from 'path';

const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID || '';

async function syncFigmaDesign() {
  console.log('🎨 Figma 디자인 동기화 시작...\n');

  if (!FIGMA_FILE_ID) {
    console.error('❌ FIGMA_FILE_ID가 설정되지 않았습니다.');
    console.error('   .env.local 파일에 FIGMA_FILE_ID를 추가하세요.\n');
    process.exit(1);
  }

  try {
    // 1. Figma 파일 가져오기
    console.log('📥 Figma 파일 불러오는 중...');
    const figmaFile = await getFigmaFile(FIGMA_FILE_ID);
    console.log(`✅ "${figmaFile.name}" 파일을 성공적으로 불러왔습니다.\n`);

    // 2. 페이지 찾기
    const pages = figmaFile.document.children || [];
    console.log(`📄 총 ${pages.length}개의 페이지를 찾았습니다:`);
    pages.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.name}`);
    });
    console.log('');

    // 3. Home-1 페이지 찾기
    const homePage = pages.find((page) => page.name === 'Home-1');

    if (!homePage) {
      console.error('❌ "Home-1" 페이지를 찾을 수 없습니다.');
      process.exit(1);
    }

    console.log('🏠 "Home-1" 페이지 분석 중...');

    // 4. 섹션별로 스타일 추출
    const sections = homePage.children || [];
    console.log(`\n📦 ${sections.length}개의 섹션을 찾았습니다:\n`);

    const designTokens: any = {
      colors: {},
      spacing: {},
      typography: {},
      sections: {},
    };

    sections.forEach((section, index) => {
      console.log(`   ${index + 1}. ${section.name}`);
      const styles = extractStyles(section);
      designTokens.sections[section.name] = styles;
    });

    // 5. 디자인 토큰 저장
    const outputPath = path.join(__dirname, '../lib/design-tokens.json');
    fs.writeFileSync(outputPath, JSON.stringify(designTokens, null, 2));

    console.log(`\n✅ 디자인 토큰이 저장되었습니다: ${outputPath}`);
    console.log('\n🎉 동기화 완료!\n');

  } catch (error) {
    console.error('\n❌ 오류 발생:', error);
    process.exit(1);
  }
}

// 실행
syncFigmaDesign();
