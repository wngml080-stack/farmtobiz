'use client';

import React from 'react';
import Card from '../ui/Card';

// 임시 거래처 후기 데이터
const testimonials = [
  {
    content: "처음엔 샘플만 시켰는데, 품질이 너무 좋아서 지금은 전량 여기서 받아요. 반품할 일이 없어서 좋습니다.",
    restaurant: "서울 한식당",
    location: "서울 강남구",
    type: "한식",
    rating: 5,
  },
  {
    content: "새벽 배송 덕분에 장보러 갈 시간을 아낄 수 있어요. 가격도 시장보다 저렴하고 품질도 만족스럽니다.",
    restaurant: "부산 횟집",
    location: "부산 해운대구",
    type: "일식",
    rating: 5,
  },
  {
    content: "상세페이지에 당도계 수치까지 올려주니 믿고 주문할 수 있어요. 고객들 반응도 좋습니다.",
    restaurant: "대구 카페",
    location: "대구 중구",
    type: "카페",
    rating: 5,
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-navy-900)] mb-4">
            이미 <span className="text-[var(--color-deep-green-700)]">1,200곳</span>의 식당이 사용 중입니다
          </h2>
          <p className="text-[var(--color-navy-600)] text-base md:text-lg mt-4">
            먼저 경험한 사장님들의 생생한 후기를 확인하세요
          </p>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-shadow duration-300"
            >
              {/* 별점 */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>

              {/* 후기 내용 */}
              <p className="text-[var(--color-navy-700)] text-base md:text-lg italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* 구분선 */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[var(--color-navy-900)] mb-1">
                  {testimonial.restaurant}
                </p>
                <p className="text-sm text-[var(--color-navy-600)]">
                  {testimonial.location} | {testimonial.type}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* 통계 정보 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <div className="bg-[var(--color-deep-green-50)] rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-[var(--color-deep-green-700)] mb-2">
              1,200+
            </p>
            <p className="text-sm md:text-base text-[var(--color-navy-700)]">
              거래 식당
            </p>
          </div>

          <div className="bg-[var(--color-deep-green-50)] rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-[var(--color-deep-green-700)] mb-2">
              87%
            </p>
            <p className="text-sm md:text-base text-[var(--color-navy-700)]">
              월 재주문율
            </p>
          </div>

          <div className="bg-[var(--color-deep-green-50)] rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-[var(--color-deep-green-700)] mb-2">
              4.8
            </p>
            <p className="text-sm md:text-base text-[var(--color-navy-700)]">
              만족도 /5.0
            </p>
          </div>

          <div className="bg-[var(--color-deep-green-50)] rounded-lg p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-[var(--color-deep-green-700)] mb-2">
              0.3%
            </p>
            <p className="text-sm md:text-base text-[var(--color-navy-700)]">
              반품률
            </p>
          </div>
        </div>

        {/* 신뢰 배지 */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-[var(--color-navy-700)]">
              <span className="text-2xl">✓</span>
              <span className="font-bold">품질 보증</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-navy-700)]">
              <span className="text-2xl">✓</span>
              <span className="font-bold">100% 환불 보장</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-navy-700)]">
              <span className="text-2xl">✓</span>
              <span className="font-bold">신선도 보증</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
