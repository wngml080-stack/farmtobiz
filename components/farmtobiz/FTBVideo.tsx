'use client';

import React from 'react';
import { Play } from 'lucide-react';

export default function FTBVideo() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#006400] mb-2">홍보 영상</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            팜투비즈를 영상으로 만나보세요
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            농장에서 식탁까지, 팜투비즈가 제공하는 신선한 농수산물의 여정을 확인하세요
          </p>
        </div>

        {/* 비디오 플레이어 */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            {/* 썸네일 이미지 */}
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=675&fit=crop&q=80"
              alt="팜투비즈 홍보 영상 썸네일"
              className="w-full h-full object-cover"
            />

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* 재생 버튼 */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-[#006400] ml-1" fill="currentColor" />
              </div>
            </button>

            {/* 비디오 길이 표시 */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
              2:30
            </div>
          </div>

          {/* 비디오 설명 */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#006400] mb-2">1,000+</div>
              <p className="text-gray-600">거래 업체</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#006400] mb-2">5,000+</div>
              <p className="text-gray-600">월 배송 건수</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#006400] mb-2">99%</div>
              <p className="text-gray-600">고객 만족도</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
