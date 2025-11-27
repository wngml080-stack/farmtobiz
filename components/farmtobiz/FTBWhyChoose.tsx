'use client';

import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, HeadsetIcon, Truck, Sparkles, Tag, Gift } from 'lucide-react';

export default function FTBWhyChoose() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: '철저한 품질 검수',
      description: '모든 상품은 출고 전 3단계 품질 검수를 거칩니다',
    },
    {
      icon: Clock,
      title: '새벽 배송 서비스',
      description: '전날 오후 6시까지 주문 시 다음날 새벽 배송',
    },
    {
      icon: ShieldCheck,
      title: 'HACCP 인증',
      description: '식품안전관리 인증으로 안전을 보장합니다',
    },
    {
      icon: HeadsetIcon,
      title: '전담 매니저',
      description: '1:1 전담 매니저가 고객님을 케어합니다',
    },
    {
      icon: Truck,
      title: '콜드체인 시스템',
      description: '신선도 유지를 위한 저온 유통 시스템',
    },
    {
      icon: Sparkles,
      title: '프리미엄 품질',
      description: '엄선된 최상급 농수산물만 취급합니다',
    },
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coupons = [
    {
      icon: Tag,
      title: '첫구매 혜택',
      discount: '5,000원',
      description: '첫 주문 시 드리는 할인 쿠폰',
      color: 'from-emerald-500 to-green-600',
      validUntil: '2025년 12월 31일까지',
      action: 'website',
      buttonText: '웹사이트 바로가기',
    },
    {
      icon: Gift,
      title: '무료 샘플 신청시',
      discount: '3,000원',
      description: '무료 샘플도 받아보고 주문시 쿠폰 사용도!',
      color: 'from-blue-500 to-cyan-600',
      validUntil: '2025년 12월 31일까지',
      action: 'form',
      buttonText: '무료 샘플 신청하기',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/40 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Why Choose 섹션 */}
        <div className="mb-20">
          {/* 제목 */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#006400] mb-2">선택의 이유</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              왜 팜투비즈를 선택해야 할까요?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              차별화된 서비스와 시스템으로 고객님의 비즈니스 성공을 지원합니다
            </p>
          </div>

          {/* 6개 혜택 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                {/* 아이콘 */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#006400] flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* 텍스트 */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 쿠폰 섹션 */}
        <div>
          {/* 제목 */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#006400] mb-2">특별 혜택</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              지금 시작하면 더 많은 할인 혜택
            </h2>
          </div>

          {/* 2개 쿠폰 카드 */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coupons.map((coupon, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* 배경 그라데이션 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${coupon.color} opacity-5`}></div>

                {/* 컨텐츠 */}
                <div className="relative p-8">
                  {/* 아이콘 */}
                  <div className={`inline-flex w-14 h-14 rounded-full bg-gradient-to-br ${coupon.color} items-center justify-center mb-4`}>
                    <coupon.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* 제목 */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {coupon.title}
                  </h3>

                  {/* 할인 금액 */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${coupon.color} bg-clip-text text-transparent`}>
                      {coupon.discount}
                    </span>
                    <span className="text-gray-600 font-semibold">쿠폰</span>
                  </div>

                  {/* 설명 */}
                  <p className="text-gray-700 mb-4">
                    {coupon.description}
                  </p>

                  {/* 유효기간 */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>{coupon.validUntil}</span>
                  </div>

                  {/* 버튼 */}
                  {coupon.action === 'website' ? (
                    <a
                      href="https://farmtobiz-wholesaler.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${coupon.color} hover:opacity-90 transition-opacity text-center`}
                    >
                      {coupon.buttonText}
                    </a>
                  ) : (
                    <button
                      onClick={scrollToForm}
                      className={`w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${coupon.color} hover:opacity-90 transition-opacity`}
                    >
                      {coupon.buttonText}
                    </button>
                  )}
                </div>

                {/* 장식 요소 */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${coupon.color} opacity-10 rounded-bl-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
