# Supabase 설정 가이드

## 1. Supabase 데이터베이스 테이블 생성

다음 단계를 따라 Supabase에 `leads` 테이블을 생성하세요:

### 방법 1: Supabase 대시보드 사용 (권장)

1. [Supabase 대시보드](https://supabase.com/dashboard)에 로그인
2. 프로젝트 선택 (ncwkxlroarhqeolxajjh)
3. 왼쪽 메뉴에서 **SQL Editor** 클릭
4. **New query** 버튼 클릭
5. `supabase/migrations/001_create_leads_table.sql` 파일의 내용을 복사하여 붙여넣기
6. **Run** 버튼 클릭하여 실행

### 방법 2: Supabase CLI 사용

```bash
# Supabase CLI 설치 (아직 설치하지 않은 경우)
npm install -g supabase

# Supabase 프로젝트 연결
supabase link --project-ref ncwkxlroarhqeolxajjh

# 마이그레이션 실행
supabase db push
```

## 2. 테이블 구조 확인

생성된 `leads` 테이블에는 다음 필드가 포함됩니다:

- **기본 정보**: name, email, phone, interested_products, privacy_consent
- **UTM 파라미터**: utm_source, utm_medium, utm_campaign, utm_term, utm_content
- **세션 정보**: referrer, first_page, session_start
- **디바이스 정보**: device_type, screen_width, screen_height
- **행동 정보**: time_on_page, scroll_depth, cta_clicks
- **타임스탬프**: created_at, updated_at

## 3. 환경 변수 확인

`.env` 파일에 다음 환경 변수가 설정되어 있는지 확인하세요:

```
NEXT_PUBLIC_SUPABASE_URL=https://ncwkxlroarhqeolxajjh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 4. n8n Webhook 설정 (선택사항)

n8n을 사용하여 자동화를 추가하려면:

1. n8n에서 새 워크플로우 생성
2. Webhook 노드 추가
3. Webhook URL을 `.env` 파일에 추가:

```
N8N_WEBHOOK_URL=http://localhost:5678/webhook/730cf86a-4b18-4bcc-b880-7a89d5fe31be
```

## 5. 테스트

1. 개발 서버 실행: `npm run dev`
2. http://localhost:3000 접속
3. 샘플 폼 작성 및 제출
4. Supabase 대시보드에서 데이터 확인:
   - Table Editor → leads 테이블 선택
   - 제출한 데이터가 표시되는지 확인

## 문제 해결

### API 500 에러가 발생하는 경우

1. Supabase URL과 키가 올바른지 확인
2. `leads` 테이블이 생성되었는지 확인
3. Row Level Security 정책이 올바르게 설정되었는지 확인
4. 서버 콘솔에서 에러 로그 확인

### CORS 에러가 발생하는 경우

Supabase 대시보드에서:
1. Settings → API 이동
2. CORS allowed origins에 개발 서버 URL 추가: `http://localhost:3000`

## 데이터 확인

Supabase 대시보드에서 수집된 리드 데이터를 확인할 수 있습니다:

1. Table Editor 메뉴 선택
2. `leads` 테이블 클릭
3. 제출된 폼 데이터 확인
