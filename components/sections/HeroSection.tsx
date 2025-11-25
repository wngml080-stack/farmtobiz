'use client';

import React from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[var(--color-deep-green-900)] to-[var(--color-deep-green-700)] pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 메시지 */}
        <div className="text-center mt-12 md:mt-20 animate-fade-in-up">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            100kg 주문하기 겁나시죠?
            <br />
            <span className="text-[var(--color-deep-green-200)]">
              샘플 박스 먼저 받아보고 결정하세요
            </span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 max-w-3xl mx-auto">
            가락시장보다 평균 <span className="font-bold text-[var(--color-deep-green-200)]">15% 저렴</span>한 가격
            <br className="hidden md:block" />
            새벽 배송으로 식당 문 앞까지
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center mt-10 md:mt-12 animate-fade-in-up">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="text-xl px-12 py-5 shadow-2xl hover:shadow-[var(--color-deep-green-400)]/50 transition-all duration-300"
          >
            무료 샘플 신청하기
          </Button>
          <p className="text-white/70 text-sm md:text-base mt-4">
            ✓ 배송비 무료 | ✓ 구매 의무 없음 | ✓ 2-3일 내 배송
          </p>
        </div>

        {/* 플레이스홀더 이미지 영역 */}
        <div className="mt-16 md:mt-20 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {/* 임시 이미지 (나중에 실제 이미지로 교체) */}
            <div className="aspect-video bg-gradient-to-br from-[var(--color-deep-green-600)] to-[var(--color-deep-green-800)] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <svg
                  className="w-32 h-32 mx-auto mb-4 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xl font-bold">신선한 농수산물 이미지</p>
                <p className="text-sm opacity-70 mt-2">(실제 상품 이미지로 교체 예정)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 신뢰 배지 */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { icon: '✓', label: '산지 직송' },
            { icon: '✓', label: '신선도 보장' },
            { icon: '✓', label: '가격 투명' },
            { icon: '✓', label: '품질 인증' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
