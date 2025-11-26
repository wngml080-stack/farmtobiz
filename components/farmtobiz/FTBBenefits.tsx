'use client';

import React from 'react';
import { Leaf, Truck, Zap } from 'lucide-react';

export default function FTBBenefits() {
  const benefits = [
    {
      icon: Leaf,
      title: '신선한 재료',
      description: '매일 아침 산지에서 직송되는 신선한 농수산물',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Truck,
      title: '무료배송',
      description: '일정 금액 이상 구매 시 전국 무료 배송',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: '10초 발주',
      description: '간편한 주문 시스템으로 빠르고 쉽게',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#006400] mb-2">3가지 장점</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            팜투비즈가 특별한 이유
          </h2>
        </div>

        {/* 3개 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* 아이콘 */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* 텍스트 */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* 장식 요소 */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
