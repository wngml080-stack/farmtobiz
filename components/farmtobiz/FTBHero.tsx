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
    <section className="relative min-h-screen pt-20 pb-4 md:pb-8 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop&q=80"
          alt="농부가 논에서 일하는 모습"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 메시지 */}
        <div className="text-center pt-16 md:pt-24">
          <p className="text-xl md:text-2xl lg:text-3xl text-[#006400] font-bold mb-4 tracking-wider">WELCOME TO FARMTOBIZ</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
            최고의 농수산물을
            <br />
            <span className="bg-gradient-to-r from-[#006400] via-emerald-600 to-green-600 bg-clip-text text-transparent">
              가장 합리적인 가격에
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            중간 유통 마진 제로로 오프라인 시장 대비 <span className="text-[#006400] font-bold">15% 저렴</span>.
            <br className="hidden md:block" />
            산지에서 식당까지, 가격은 낮추고 새벽 배송으로 신선하게
          </p>

          {/* CTA 버튼 */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#006400] via-emerald-600 to-green-600 text-white text-lg font-bold rounded-2xl hover:from-[#004d00] hover:via-emerald-700 hover:to-green-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            style={{
              boxShadow: '0 20px 40px -15px rgba(0, 100, 0, 0.5)',
            }}
          >
            <span>무료 샘플 신청하기</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* 3개 장점 카드 - 3D 효과 */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 md:mt-20 max-w-6xl mx-auto mb-0">
          <div
            className="group relative bg-white rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
            style={{
              boxShadow: '0 10px 40px -10px rgba(0, 100, 0, 0.3)',
              perspective: '1000px',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#006400]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006400] to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">산지 직송</h3>
              <p className="text-gray-600 leading-relaxed">
                중간 유통 단계 제거, 농장에서 바로
              </p>
            </div>
          </div>

          <div
            className="group relative bg-white rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
            style={{
              boxShadow: '0 10px 40px -10px rgba(5, 150, 105, 0.3)',
              perspective: '1000px',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">가격 투명</h3>
              <p className="text-gray-600 leading-relaxed">
                가락시장 대비 평균 15% 저렴
              </p>
            </div>
          </div>

          <div
            className="group relative bg-white rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
            style={{
              boxShadow: '0 10px 40px -10px rgba(34, 197, 94, 0.3)',
              perspective: '1000px',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">신선 보장</h3>
              <p className="text-gray-600 leading-relaxed">
                새벽 배송으로 당일 신선도 유지
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 블러 효과 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
    </section>
  );
}
