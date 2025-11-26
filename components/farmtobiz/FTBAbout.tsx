'use client';

import React from 'react';
import { Award, DollarSign, Check } from 'lucide-react';

export default function FTBAbout() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 이미지 */}
          <div className="relative">
            {/* 큰 원형 이미지 */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=800&fit=crop&q=80"
                  alt="농장 풍경"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 작은 원형 이미지 */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop&q=80"
                  alt="신선한 채소"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 오른쪽: 텍스트 */}
          <div>
            <p className="text-sm font-semibold text-[#006400] mb-2">팜투비즈 소개</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              농장에서 식탁까지,
              <br />
              신뢰할 수 있는 유통 파트너
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              팜투비즈는 전국 200개 이상의 농장과 직접 계약하여 중간 유통을 거치지 않고 신선한 농수산물을 공급합니다.
            </p>

            {/* 2개 아이콘 박스 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <Award className="w-8 h-8 text-[#006400] mb-2" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">엄격한 품질 관리</h3>
                <p className="text-gray-600 text-xs">산지 검수부터 배송까지 전 과정 품질 검증</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <DollarSign className="w-8 h-8 text-[#006400] mb-2" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">투명한 가격 정책</h3>
                <p className="text-gray-600 text-xs">중간 마진 없이 합리적인 가격 제공</p>
              </div>
            </div>

            {/* 체크리스트 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#006400]" />
                <span className="text-gray-700">100% 산지 직송으로 신선도 보장</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#006400]" />
                <span className="text-gray-700">전국 1,200+ 식당이 선택한 신뢰</span>
              </div>
            </div>

            {/* 버튼 */}
            <button className="mt-6 bg-[#006400] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#004d00] transition-colors">
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
