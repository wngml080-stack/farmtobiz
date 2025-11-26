'use client';

import React from 'react';
import { Carrot, Apple, Fish, Beef } from 'lucide-react';

export default function FTBCategories() {
  const categories = [
    {
      icon: Carrot,
      title: '채소류',
      count: '150+ 품목',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop&q=80',
      description: '신선한 제철 채소',
    },
    {
      icon: Apple,
      title: '과일류',
      count: '80+ 품목',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=600&fit=crop&q=80',
      description: '당도 높은 프리미엄 과일',
    },
    {
      icon: Fish,
      title: '수산물',
      count: '120+ 품목',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80',
      description: '매일 새벽 산지 직송',
    },
    {
      icon: Beef,
      title: '축산물',
      count: '60+ 품목',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=600&fit=crop&q=80',
      description: 'HACCP 인증 신선육',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#006400] mb-2">카테고리</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            다양한 품목을 한 곳에서
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            채소부터 축산물까지, 필요한 모든 식재료를 팜투비즈에서 만나보세요
          </p>
        </div>

        {/* 4개 카테고리 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* 이미지 */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* 컨텐츠 */}
              <div className="p-6">
                {/* 아이콘 */}
                <div className="w-12 h-12 rounded-full bg-[#006400] flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>

                {/* 품목 수 */}
                <p className="text-[#006400] font-semibold text-sm mb-2">
                  {category.count}
                </p>

                {/* 설명 */}
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>

                {/* 더보기 버튼 */}
                <button className="mt-4 text-[#006400] font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                  더 알아보기
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
