'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productImages = [
    {
      category: '신선 채소',
      image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&h=800&fit=crop&q=80', // 푸른 채소들
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      category: '신선 생선',
      image: 'https://images.unsplash.com/photo-1580959375944-0ea1eb0868e3?w=800&h=800&fit=crop&q=80', // 생선살이 보이는 신선한 생선
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      category: '프리미엄 과일',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=800&fit=crop&q=80', // 정렬된 신선한 과일
      gradient: 'from-orange-500 to-red-600',
    },
    {
      category: '최상급 육류',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&h=800&fit=crop&q=80', // 마블링 좋은 빨간 육류
      gradient: 'from-red-500 to-pink-600',
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-deep-green-900 via-deep-green-800 to-deep-green-900 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* 배경 애니메이션 효과 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-deep-green-600 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-green-700 rounded-full blur-3xl animate-float delay-200" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 메시지 */}
        <div className="text-center mt-12 md:mt-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-deep-green-300" />
            <span className="text-white/90 text-sm font-medium">
              전국 1,200+ 식당이 선택한 신뢰
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            최고의 농수산물을
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-green-300 to-emerald-400">
              가장 합리적인 가격에
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
            중간 유통 마진 제거로{' '}
            <span className="font-bold text-deep-green-300">가락시장 대비 15% 저렴</span>
            <br className="hidden md:block" />
            산지에서 식당까지, 새벽 배송으로 신선하게
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center mt-10 md:mt-12 animate-fade-in-up delay-100">
          <button
            onClick={scrollToForm}
            className="
              group
              relative
              inline-flex
              items-center
              gap-2
              px-10 py-5
              text-lg font-bold
              text-white
              bg-gradient-to-r from-emerald-500 to-green-600
              rounded-full
              shadow-2xl
              hover:shadow-emerald-500/50
              transform hover:scale-105
              transition-all duration-300
              animate-pulse-glow
            "
          >
            <span>무료 샘플 신청하기</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <p className="text-white/70 text-sm md:text-base mt-4">
            ✓ 배송비 무료 | ✓ 구매 의무 없음 | ✓ 2-3일 내 배송
          </p>
        </div>

        {/* 4개 제품 이미지 그리드 */}
        <div className="mt-16 md:mt-20 animate-fade-in delay-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {productImages.map((product, index) => (
              <div
                key={index}
                className={`
                  card-3d-lift
                  relative
                  group
                  aspect-square
                  rounded-2xl
                  overflow-hidden
                  border-2 border-white/10
                  animate-scale-in
                  delay-${(index + 2) * 100}
                `}
              >
                {/* 배경 이미지 (실제 이미지 또는 그라데이션 폴백) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}>
                  <img
                    src={product.image}
                    alt={product.category}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // 이미지 로드 실패 시 부모 그라데이션이 보이도록
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* 하단 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* 텍스트 (하단 중앙) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-white font-bold text-base md:text-lg text-center drop-shadow-lg">
                    {product.category}
                  </p>
                </div>

                {/* 호버 시 추가 효과 */}
                <div className="absolute inset-0 bg-deep-green-600/0 group-hover:bg-deep-green-600/10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* 신뢰 배지 - 심플 아이콘 스타일 */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto animate-fade-in-up delay-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: '🚚', label: '산지 직송', color: 'from-emerald-500/20 to-green-600/20' },
              { icon: '❄️', label: '신선도 보장', color: 'from-cyan-500/20 to-blue-600/20' },
              { icon: '💰', label: '가격 투명', color: 'from-amber-500/20 to-orange-600/20' },
              { icon: '✨', label: '품질 인증', color: 'from-purple-500/20 to-pink-600/20' },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  rounded-lg
                  p-4
                  text-center
                  transition-all duration-300
                  hover:bg-white/10
                  hover:border-white/20
                  hover:scale-105
                "
              >
                {/* 배경 그라데이션 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />

                {/* 내용 */}
                <div className="relative">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-white/90 font-medium text-xs md:text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
