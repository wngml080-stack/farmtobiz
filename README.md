# 팜투비즈(FarmToBiz) - 마케팅 랜딩페이지

> B2B 농수산물 도소매 플랫폼 마케팅용 랜딩페이지

## 📋 프로젝트 개요

식당 사장님을 대상으로 한 B2B 농수산물 플랫폼 "팜투비즈"의 샘플 박스 신청 랜딩페이지입니다.

### 핵심 가치 제안
- 🎁 **샘플 박스 먼저 체험** - 100kg 대량 주문 전 무료 샘플로 품질 확인
- 💰 **가락시장 대비 평균 15% 저렴** - 산지 직송으로 중간 마진 제거
- 🚚 **새벽 배송** - 신선도 보장
- 📊 **투명한 가격** - 실시간 가격 비교 제공

### 타겟 고객
- 40대 식당/카페 사장님
- 모바일 우선 사용자
- 가격과 신선도에 민감한 소규모 사업자

---

## 🚀 빠른 시작

### 사전 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/wngml080-stack/farmtobiz.git
cd farmtobiz

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 필요한 값들을 입력하세요

# 개발 서버 실행
npm run dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

---

## 📁 프로젝트 구조

```
marketing/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃 (SEO 메타데이터)
│   ├── page.tsx             # 메인 랜딩페이지
│   ├── globals.css          # 글로벌 스타일 (Tailwind 커스텀)
│   └── api/                 # API 라우트 (예정)
│
├── components/              # React 컴포넌트
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # 랜딩페이지 섹션
│   │   ├── HeroSection.tsx
│   │   ├── PriceComparisonSection.tsx
│   │   ├── ProductDetailSection.tsx
│   │   ├── ConvenienceSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   └── CTAFormSection.tsx
│   ├── ui/                 # 재사용 가능한 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   └── tracking/           # 트래킹 컴포넌트 (예정)
│
├── lib/                    # 유틸리티 함수
│   └── validation.ts       # Zod 스키마
│
├── types/                  # TypeScript 타입 정의
│   └── form.ts
│
├── public/                 # 정적 파일
│   └── images/
│
└── docs/                   # 프로젝트 문서
    ├── DESIGN_SPEC.md      # 디자인 명세서
    ├── ARCHITECTURE.md     # 아키텍처 다이어그램
    └── database.dbml       # ERD 정의
```

---

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Form**: React Hook Form + Zod
- **Charts**: Recharts
- **Animation**: Framer Motion (예정)

### Backend
- **Database**: Supabase (PostgreSQL)
- **Automation**: n8n (Google Sheets + Email)
- **Hosting**: Vercel
- **Edge Functions**: Vercel Edge (Geolocation)

### Analytics
- Meta Pixel (Facebook Ads)
- Google Analytics 4
- UTM Parameter Tracking

---

## 🎨 디자인 시스템

### 브랜드 컬러
- **Primary**: Deep Green `#065f46` - 신뢰, 신선함
- **Secondary**: Navy `#1e293b` - 전문성, 안정감
- **Accent**: Orange `#f59e0b` - 긴급성, 행동 유도

### 타이포그래피
- **한글**: Pretendard (CDN)
- **영문/숫자**: Geist Sans

### 반응형 브레이크포인트
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

자세한 내용은 [DESIGN_SPEC.md](docs/DESIGN_SPEC.md)를 참고하세요.

---

## 📊 데이터베이스 스키마

### sample_requests 테이블
고객이 샘플 박스를 신청하면 다음 데이터를 수집합니다:

**폼 데이터**
- 이름, 이메일, 전화번호, 관심 품목

**마케팅 어트리뷰션**
- UTM 파라미터 (source, medium, campaign, term, content)
- Referrer, 첫 방문 페이지

**위치 정보**
- 국가, 도시, 지역, IP (Vercel Edge Geo)

**행동 데이터**
- 페이지 체류 시간, 스크롤 깊이, CTA 클릭 수

**디바이스 정보**
- User Agent, 디바이스 타입, 화면 크기

ERD는 [database.dbml](docs/database.dbml)을 [dbdiagram.io](https://dbdiagram.io)에 붙여넣어 확인하세요.

---

## 🔄 데이터 플로우

```
사용자 폼 제출
    ↓
클라이언트 검증 (Zod)
    ↓
/api/submit-form (Next.js API)
    ↓
서버 검증 + 위치 정보 수집
    ↓
├─→ Supabase 저장
└─→ n8n Webhook
    ├─→ Google Sheets 추가
    └─→ 고객 이메일 발송
```

자세한 플로우는 [ARCHITECTURE.md](docs/ARCHITECTURE.md)를 참고하세요.

---

## 🌐 배포 정보

### Production
- **URL**: https://marketing-5pguf4sc6-kimsoyeons-projects.vercel.app
- **Branch**: main
- **Auto Deploy**: ✅ 활성화 (GitHub push 시 자동 배포)

### GitHub
- **Repository**: https://github.com/wngml080-stack/farmtobiz

---

## 📝 환경 변수

`.env.example` 파일을 복사하여 `.env` 파일을 생성하고 다음 값들을 설정하세요:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# n8n Webhook
N8N_WEBHOOK_URL=your_n8n_webhook_url

# Analytics
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

---

## 🚧 구현 상태

### ✅ 완료
- [x] Next.js 프로젝트 설정
- [x] Tailwind CSS 커스텀 테마
- [x] 반응형 레이아웃 (모바일 우선)
- [x] 6개 섹션 컴포넌트 구현
- [x] 폼 검증 (React Hook Form + Zod)
- [x] 가격 비교 차트 (Recharts)
- [x] SEO 메타데이터
- [x] Vercel 배포
- [x] 디자인 문서 작성

### 🚧 진행 중
- [ ] `/api/submit-form` API 엔드포인트
- [ ] Supabase 데이터베이스 설정
- [ ] n8n 워크플로우 구축
- [ ] Meta Pixel 통합
- [ ] Google Analytics 4 통합
- [ ] UTM 트래킹 구현
- [ ] Thank You 페이지

### 📋 예정
- [ ] 실제 상품 이미지 추가
- [ ] 고객 후기 콘텐츠
- [ ] A/B 테스팅 설정
- [ ] 다국어 지원 (영어, 일본어)

---

## 👥 팀

- 이상환
- 김소연
- 남혜리
- 박용범
- 김지헌

---

## 📚 추가 문서

- [디자인 명세서](docs/DESIGN_SPEC.md) - 와이어프레임 및 UI 가이드
- [아키텍처 다이어그램](docs/ARCHITECTURE.md) - 시스템 구조 및 데이터 플로우
- [데이터베이스 ERD](docs/database.dbml) - 테이블 스키마 정의

---

## 📄 라이선스

이 프로젝트는 팜투비즈 팀의 소유입니다.

---

## 🤝 기여

현재 팀 내부 프로젝트로 외부 기여는 받지 않습니다.

문의: [팀 연락처 추가 예정]
