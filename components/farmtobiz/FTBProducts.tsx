'use client';

import React from 'react';
import { Leaf, Apple, Fish, Beef } from 'lucide-react';

export default function FTBProducts() {
  const products = [
    {
      icon: Leaf,
      title: '신선 채소',
      description: '제철 채소부터 특수 품종까지',
      image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&h=800&fit=crop&q=80',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Apple,
      title: '프리미엄 과일',
      description: '당도 선별된 신선한 과일',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=800&fit=crop&q=80',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Fish,
      title: '수산물',
      description: '매일 아침 산지 직송 해산물',
      image: 'https://images.unsplash.com/photo-1580959375944-0ea1eb0868e3?w=600&h=800&fit=crop&q=80',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Beef,
      title: '축산물',
      description: 'HACCP 인증 신선육',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&h=800&fit=crop&q=80',
      color: 'from-red-600 to-pink-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#006400] mb-2">취급 품목</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            신선한 식재료, 한곳에서
          </h2>
        </div>

        {/* 4개 카드 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* 배경 이미지 */}
              <div className="aspect-[3/4] relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* 텍스트 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <product.icon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <p className="text-sm text-white/90">{product.description}</p>

                {/* 버튼 */}
                <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
