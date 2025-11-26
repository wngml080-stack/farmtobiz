'use client';

import React from 'react';
import { Truck, DollarSign, Leaf } from 'lucide-react';

export default function FTBHero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 md:pb-24 bg-gradient-to-br from-gray-100 to-gray-50">
      {/* 배경 이미지 (상단) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop&q=80"
          alt="농부가 논에서 일하는 모습"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 메시지 */}
        <div className="text-center pt-16 md:pt-24">
          <p className="text-sm md:text-base text-gray-600 font-medium mb-4">WELCOME TO FARMTOBIZ</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            최고의 농수산물을
            <br />
            <span className="text-[#006400]">가장 합리적인 가격에</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            중간 유통 마진 제거로 가락시장 대비 15% 저렴.
            <br className="hidden md:block" />
            산지에서 식당까지, 새벽 배송으로 신선하게
          </p>

          {/* CTA 버튼 */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#006400] text-white font-bold rounded-lg hover:bg-[#004d00] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>무료 샘플 신청하기</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* 3개 장점 카드 */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#006400]">
            <div className="w-12 h-12 bg-[#006400] rounded-lg flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">산지 직송</h3>
            <p className="text-gray-600 text-sm">
              중간 유통 단계 제거, 농장에서 바로
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-emerald-600">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">가격 투명</h3>
            <p className="text-gray-600 text-sm">
              가락시장 대비 평균 15% 저렴
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-500">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">신선 보장</h3>
            <p className="text-gray-600 text-sm">
              새벽 배송으로 당일 신선도 유지
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
