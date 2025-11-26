# 팜투비즈 랜딩페이지 - 아키텍처 다이어그램

## 📊 시스템 아키텍처

```mermaid
graph TB
    subgraph "Frontend - Next.js"
        A[Landing Page] --> B[Header]
        A --> C[Hero Section]
        A --> D[Price Comparison]
        A --> E[Product Detail]
        A --> F[Convenience]
        A --> G[Social Proof]
        A --> H[CTA Form]
        A --> I[Footer]

        H --> J[Form Validation<br/>React Hook Form + Zod]
        J --> K[Client-side Tracking<br/>UTM, Session, Behavior]
    end

    subgraph "API Layer"
        K --> L[/api/submit-form]
        L --> M[Server-side Validation<br/>Zod Schema]
        M --> N[Location Data<br/>Vercel Edge Geo]
    end

    subgraph "Backend Services"
        N --> O[(Supabase<br/>sample_requests)]
        N --> P[n8n Webhook]

        P --> Q[Google Sheets<br/>Lead Database]
        P --> R[Email Service<br/>Customer Notification]
    end

    subgraph "Analytics & Tracking"
        C --> S[Meta Pixel]
        C --> T[Google Analytics]
        K --> U[UTM Tracker<br/>LocalStorage]

        S --> V[Facebook Ads Manager]
        T --> W[GA4 Dashboard]
    end

    subgraph "Deployment"
        A --> X[Vercel CDN]
        X --> Y[GitHub Auto Deploy]
    end

    style A fill:#065f46,color:#fff
    style H fill:#065f46,color:#fff
    style O fill:#1e293b,color:#fff
    style P fill:#f59e0b,color:#fff
    style S fill:#4267B2,color:#fff
    style T fill:#E37400,color:#fff
```

---

## 🗄️ 데이터베이스 ERD (Supabase)

```mermaid
erDiagram
    SAMPLE_REQUESTS {
        uuid id PK
        varchar name "고객 이름"
        varchar email "이메일"
        varchar phone "전화번호"
        varchar interested_products "관심 품목"
        varchar utm_source "UTM 소스"
        varchar utm_medium "UTM 미디엄"
        varchar utm_campaign "UTM 캠페인"
        varchar utm_term "UTM 검색어"
        varchar utm_content "UTM 컨텐츠"
        varchar country "국가"
        varchar city "도시"
        varchar region "지역"
        varchar ip "IP 주소"
        text referrer "유입 경로"
        text first_page "첫 방문 페이지"
        timestamp session_start "세션 시작"
        timestamp form_submit_time "폼 제출 시간"
        text user_agent "브라우저 정보"
        varchar device_type "디바이스 타입"
        integer screen_width "화면 너비"
        integer screen_height "화면 높이"
        integer time_on_page "페이지 체류 시간(초)"
        integer scroll_depth "스크롤 깊이(%)"
        integer cta_clicks "CTA 클릭 수"
        timestamp created_at "생성일시"
    }
```

---

## 📁 프로젝트 구조 다이어그램

```mermaid
graph LR
    subgraph "marketing/"
        A[app/] --> A1[layout.tsx<br/>SEO & Meta]
        A --> A2[page.tsx<br/>Main Landing]
        A --> A3[globals.css<br/>Tailwind]
        A --> A4[api/]

        A4 --> A4a[submit-form/<br/>route.ts]
        A4 --> A4b[track-event/<br/>route.ts]

        B[components/] --> B1[layout/]
        B --> B2[sections/]
        B --> B3[ui/]
        B --> B4[tracking/]

        B1 --> B1a[Header.tsx]
        B1 --> B1b[Footer.tsx]

        B2 --> B2a[HeroSection.tsx]
        B2 --> B2b[PriceComparison<br/>Section.tsx]
        B2 --> B2c[ProductDetail<br/>Section.tsx]
        B2 --> B2d[Convenience<br/>Section.tsx]
        B2 --> B2e[SocialProof<br/>Section.tsx]
        B2 --> B2f[CTAForm<br/>Section.tsx]

        B3 --> B3a[Button.tsx]
        B3 --> B3b[Input.tsx]
        B3 --> B3c[Card.tsx]

        B4 --> B4a[MetaPixel.tsx]
        B4 --> B4b[GoogleAnalytics.tsx]
        B4 --> B4c[UTMTracker.tsx]

        C[lib/] --> C1[validation.ts<br/>Zod Schema]
        C --> C2[tracking.ts<br/>Utils]
        C --> C3[supabase.ts<br/>Client]

        D[types/] --> D1[form.ts]
        D --> D2[tracking.ts]

        E[public/] --> E1[images/]
    end

    style A fill:#065f46,color:#fff
    style B fill:#1e293b,color:#fff
    style C fill:#f59e0b,color:#fff
```

---

## 🔄 데이터 플로우 다이어그램

```mermaid
sequenceDiagram
    participant U as User
    participant LP as Landing Page
    participant LS as LocalStorage
    participant API as /api/submit-form
    participant VE as Vercel Edge
    participant SB as Supabase
    participant N8N as n8n Webhook
    participant GS as Google Sheets
    participant EM as Email Service
    participant MP as Meta Pixel
    participant GA as Google Analytics

    U->>LP: 페이지 방문 (UTM 파라미터 포함)
    LP->>LS: UTM 파라미터 저장
    LP->>LS: 세션 시작 시간 기록
    LP->>LS: Referrer 정보 저장
    LP->>MP: PageView 이벤트
    LP->>GA: page_view 이벤트

    U->>LP: 스크롤 & 섹션 진입
    LP->>LS: 스크롤 깊이 업데이트
    LP->>GA: scroll_depth 이벤트

    U->>LP: CTA 버튼 클릭
    LP->>LS: CTA 클릭 수 증가
    LP->>MP: InitiateCheckout 이벤트
    LP->>GA: hero_cta_click 이벤트

    U->>LP: 폼 작성 시작
    LP->>GA: form_start 이벤트

    U->>LP: 폼 제출
    LP->>API: POST /api/submit-form<br/>(폼 데이터 + 트래킹 데이터)

    API->>API: Zod 검증
    API->>VE: 위치 정보 요청 (request.geo)
    VE-->>API: 국가, 도시, 지역, IP

    API->>SB: 데이터 저장 (sample_requests)
    SB-->>API: 저장 완료 (ID 반환)

    API->>N8N: Webhook 호출 (모든 데이터)
    N8N->>GS: Google Sheets에 행 추가
    N8N->>EM: 고객에게 자동 응답 이메일 발송

    API-->>LP: 성공 응답
    LP->>MP: Lead 이벤트
    LP->>GA: form_submit 이벤트
    LP->>U: /thank-you 페이지로 리다이렉트
```

---

## 🎯 컴포넌트 계층 구조

```mermaid
graph TD
    A[page.tsx<br/>Main Landing] --> B[Header]
    A --> C[main]
    A --> D[Footer]

    C --> E[HeroSection]
    C --> F[PriceComparisonSection]
    C --> G[ProductDetailSection]
    C --> H[ConvenienceSection]
    C --> I[SocialProofSection]
    C --> J[CTAFormSection]

    E --> K[Button<br/>무료 샘플 신청]

    F --> L[Recharts<br/>BarChart]
    F --> M[Table<br/>모바일용]

    G --> N[Card x3<br/>품질 정보]

    H --> O[3-Step Process]

    I --> P[Card x3<br/>후기 카드]
    I --> Q[통계 박스 x4]

    J --> R[Input x3<br/>이름, 이메일, 전화]
    J --> S[Select<br/>관심 품목]
    J --> T[Checkbox<br/>개인정보 동의]
    J --> U[Button<br/>제출]

    style A fill:#065f46,color:#fff
    style J fill:#065f46,color:#fff
```

---

## 📱 반응형 레이아웃 구조

```mermaid
graph LR
    subgraph "Mobile < 768px"
        M1[1 Column<br/>Stack Layout]
        M1 --> M2[Header<br/>Fixed Top]
        M1 --> M3[All Sections<br/>Vertical Stack]
        M1 --> M4[Footer]
    end

    subgraph "Tablet 768px - 1024px"
        T1[2 Column<br/>Grid Layout]
        T1 --> T2[Header]
        T1 --> T3[Some Sections<br/>2-Column Grid]
        T1 --> T4[Footer<br/>2-Column]
    end

    subgraph "Desktop > 1024px"
        D1[3 Column<br/>Grid Layout]
        D1 --> D2[Header<br/>Max-width 1280px]
        D1 --> D3[Sections<br/>2-3 Column Grid]
        D1 --> D4[Footer<br/>2-Column]
    end

    style M1 fill:#065f46,color:#fff
    style T1 fill:#1e293b,color:#fff
    style D1 fill:#f59e0b,color:#fff
```

---

## 🔐 폼 검증 플로우

```mermaid
flowchart TD
    A[사용자 폼 입력] --> B{React Hook Form<br/>실시간 검증}

    B -->|통과| C[제출 버튼 활성화]
    B -->|실패| D[에러 메시지 표시]

    C --> E[폼 제출 클릭]
    E --> F{Zod Schema<br/>클라이언트 검증}

    F -->|실패| G[에러 메시지 표시]
    F -->|통과| H[트래킹 데이터 수집]

    H --> I[API POST 요청]
    I --> J{Zod Schema<br/>서버 검증}

    J -->|실패| K[400 Bad Request<br/>에러 반환]
    J -->|통과| L[Supabase 저장]

    L --> M[n8n Webhook 호출]
    M --> N{n8n 처리}

    N -->|성공| O[200 Success]
    N -->|실패| P[서버 로그 기록<br/>사용자에게는 성공 반환]

    O --> Q[/thank-you 리다이렉트]
    K --> R[사용자에게 에러 표시]

    style F fill:#22c55e,color:#fff
    style J fill:#22c55e,color:#fff
    style K fill:#ef4444,color:#fff
    style G fill:#ef4444,color:#fff
```

---

## 📊 트래킹 데이터 수집 구조

```mermaid
mindmap
  root((트래킹 데이터))
    폼 데이터
      이름
      이메일
      전화번호
      관심 품목
    UTM 파라미터
      utm_source
      utm_medium
      utm_campaign
      utm_term
      utm_content
    위치 정보
      국가
      도시
      지역
      IP 주소
    세션 정보
      Referrer
      첫 방문 페이지
      세션 시작 시간
      폼 제출 시간
    디바이스 정보
      User Agent
      디바이스 타입
      화면 너비
      화면 높이
    행동 정보
      페이지 체류 시간
      스크롤 깊이
      CTA 클릭 수
```

---

## 🚀 배포 파이프라인

```mermaid
graph LR
    A[Local Development] -->|git push| B[GitHub Repository]
    B -->|Auto Trigger| C[Vercel Build]

    C --> D{Build Success?}
    D -->|No| E[Build Failed<br/>Error Notification]
    D -->|Yes| F[Deploy to Preview]

    F --> G{Branch?}
    G -->|main| H[Deploy to Production]
    G -->|other| I[Preview Deployment Only]

    H --> J[Production URL<br/>farmtobiz-landing.vercel.app]
    I --> K[Preview URL<br/>branch-name.vercel.app]

    J --> L[CDN Distribution<br/>Global Edge Network]

    style B fill:#065f46,color:#fff
    style H fill:#22c55e,color:#fff
    style E fill:#ef4444,color:#fff
```

---

## 🔄 향후 추가 예정 구조

```mermaid
graph TB
    subgraph "Phase 2 - 백엔드 완성"
        A1[Thank You Page] --> A2[감사 메시지]
        A1 --> A3[다음 단계 안내]

        B1[Supabase Functions] --> B2[실시간 검증]
        B1 --> B3[중복 체크]
    end

    subgraph "Phase 3 - 트래킹 완성"
        C1[Meta Pixel Events] --> C2[ViewContent]
        C1 --> C3[AddToCart]

        D1[Google Analytics Events] --> D2[Scroll Depth]
        D1 --> D3[Section Views]
    end

    subgraph "Phase 4 - 고도화"
        E1[A/B Testing] --> E2[Hero CTA 문구]
        E1 --> E3[가격 강조 방식]

        F1[다국어 지원] --> F2[영어]
        F1 --> F3[일본어]

        G1[관리자 대시보드] --> G2[리드 관리]
        G1 --> G3[통계 분석]
    end

    style A1 fill:#065f46,color:#fff
    style C1 fill:#4267B2,color:#fff
    style E1 fill:#f59e0b,color:#fff
```

---

## 📋 기술 스택 다이어그램

```mermaid
graph TB
    subgraph "Frontend Stack"
        A[Next.js 14<br/>App Router]
        B[TypeScript]
        C[Tailwind CSS<br/>v4]
        D[React Hook Form]
        E[Zod]
        F[Recharts]
        G[Framer Motion]
    end

    subgraph "Backend Stack"
        H[Vercel Edge Functions]
        I[Supabase<br/>PostgreSQL]
        J[n8n<br/>Workflow Automation]
    end

    subgraph "Analytics Stack"
        K[Meta Pixel]
        L[Google Analytics 4]
        M[Vercel Analytics]
    end

    subgraph "Development Tools"
        N[Git & GitHub]
        O[ESLint]
        P[Vercel CLI]
    end

    A --> H
    D --> E
    H --> I
    H --> J

    style A fill:#065f46,color:#fff
    style I fill:#1e293b,color:#fff
    style K fill:#4267B2,color:#fff
```

---

## 📱 현재 배포 정보

- **Production URL:** https://marketing-5pguf4sc6-kimsoyeons-projects.vercel.app
- **GitHub Repository:** https://github.com/wngml080-stack/farmtobiz
- **Vercel Project:** kimsoyeons-projects/marketing
- **Branch:** main
- **Auto Deploy:** Enabled ✅

---

## 📝 다이어그램 렌더링 방법

### VSCode에서 보기
1. **Markdown Preview Enhanced** 확장 설치
2. 파일 열고 `Cmd+Shift+V` (또는 `Ctrl+Shift+V`)

### GitHub에서 보기
- GitHub은 Mermaid 다이어그램을 자동으로 렌더링합니다
- README.md나 이슈에 붙여넣기만 하면 됩니다

### 온라인 에디터
- https://mermaid.live
- 위 사이트에서 코드 복사 후 붙여넣어 실시간 미리보기

---

## 🎨 다이어그램 색상 가이드

- 🟢 **Green (#065f46)**: Primary 컴포넌트, 중요 노드
- 🔵 **Navy (#1e293b)**: Secondary 컴포넌트, 데이터베이스
- 🟠 **Orange (#f59e0b)**: 유틸리티, 설정 파일
- 🔴 **Red (#ef4444)**: 에러, 실패 상태
- 🟢 **Light Green (#22c55e)**: 성공, 통과 상태
- 🔵 **Blue (#4267B2)**: 외부 서비스 (Facebook, Analytics)
