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
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/30 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#006400] mb-3 tracking-wider">취급 품목</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            신선한 식재료, 한곳에서
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            엄선된 최고 품질의 농수산물을 합리적인 가격으로 만나보세요
          </p>
        </div>

        {/* 4개 카드 그리드 - 3D 효과 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2"
              style={{
                boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
                perspective: '1000px',
              }}
            >
              {/* 배경 이미지 */}
              <div className="aspect-[3/4] relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-50 group-hover:opacity-60 transition-opacity`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* 텍스트 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <product.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-white/90 mb-4">{product.description}</p>

                {/* 버튼 */}
                <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white transition-all transform group-hover:scale-105 shadow-lg">
                  자세히 보기 →
                </button>
              </div>

              {/* 3D 광택 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
