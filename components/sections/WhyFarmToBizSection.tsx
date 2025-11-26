'use client';

import { Sprout, TrendingDown, Timer, Shield } from 'lucide-react';

export default function WhyFarmToBizSection() {
  const features = [
    {
      icon: Sprout,
      title: '산지 직송 신선함',
      description:
        '중간 유통 단계를 거치지 않고 농가에서 직접 배송합니다. 수확 후 24시간 이내에 배송되어 최상의 신선도를 보장합니다.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: TrendingDown,
      title: '가락시장 대비 15% 저렴',
      description:
        '중간 마진을 없애고 산지 직거래로 합리적인 가격을 제공합니다. 대량 구매 시 추가 할인 혜택도 받으실 수 있습니다.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Timer,
      title: '새벽 배송 시스템',
      description:
        '전날 주문하면 다음날 새벽에 배송됩니다. 영업 시작 전 신선한 식재료를 받아보세요. 정기 배송 서비스도 이용 가능합니다.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Shield,
      title: '품질 보증 제도',
      description:
        '모든 상품은 엄격한 품질 검수를 거칩니다. 만족하지 못하셨다면 100% 환불 보증. 안심하고 주문하세요.',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            왜 팜투비즈여야 할까요?
          </h2>
          <p className="text-lg text-gray-600">
            식당 사장님들이 선택하는 4가지 이유
          </p>
        </div>

        {/* 4개 박스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`
                  card-3d-lift
                  relative
                  bg-white
                  rounded-2xl
                  p-8
                  border border-gray-100
                  overflow-hidden
                  group
                  animate-fade-in-up
                  delay-${index * 100}
                `}
              >
                {/* 배경 그라데이션 효과 */}
                <div
                  className={`
                    absolute top-0 right-0 w-32 h-32
                    bg-gradient-to-br ${feature.gradient}
                    opacity-5 group-hover:opacity-10
                    rounded-full blur-2xl
                    transition-opacity duration-500
                    -translate-y-1/2 translate-x-1/2
                  `}
                />

                {/* 아이콘 */}
                <div
                  className={`
                    relative
                    w-16 h-16
                    bg-gradient-to-br ${feature.gradient}
                    rounded-xl
                    flex items-center justify-center
                    mb-6
                    group-hover:scale-110
                    transition-transform duration-300
                  `}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* 콘텐츠 */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-deep-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* 호버 시 나타나는 그린 라인 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-deep-green-600 to-deep-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>

        {/* CTA 버튼 */}
        <div className="text-center mt-12 animate-fade-in-up delay-400">
          <a
            href="#sample-form"
            className="
              inline-block
              px-8 py-4
              bg-gradient-to-r from-deep-green-600 to-deep-green-700
              text-white
              font-bold
              rounded-full
              hover:from-deep-green-700 hover:to-deep-green-800
              transform hover:scale-105
              transition-all duration-300
              shadow-lg hover:shadow-xl
              animate-pulse-glow
            "
          >
            무료 샘플로 직접 확인하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
