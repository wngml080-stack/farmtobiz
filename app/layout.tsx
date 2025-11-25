import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "팜투비즈 - 가락시장보다 저렴한 농수산물 도소매 플랫폼",
  description: "식당 사장님을 위한 B2B 농수산물 플랫폼. 가락시장 대비 평균 15% 저렴, 새벽 배송, 무료 샘플 제공. 지금 신청하세요!",
  keywords: ["농수산물", "도소매", "B2B", "식당", "가락시장", "새벽배송", "팜투비즈"],

  // Open Graph (소셜 미디어)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://farmtobiz-landing.vercel.app",
    title: "팜투비즈 - 샘플 박스 먼저 받아보고 결정하세요",
    description: "가락시장보다 평균 15% 저렴한 가격으로 신선한 농수산물을 공급합니다",
    siteName: "팜투비즈",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "팜투비즈 - 샘플 박스 먼저 받아보고 결정하세요",
    description: "가락시장보다 평균 15% 저렴한 가격으로 신선한 농수산물을 공급합니다",
  },

  // 기타
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
