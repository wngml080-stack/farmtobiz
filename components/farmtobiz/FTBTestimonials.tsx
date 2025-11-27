'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function FTBTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: '김영수',
      role: '레스토랑 사장님',
      rating: 5,
      comment: '팜투비즈를 이용한 지 1년이 넘었는데, 정말 만족하며 사용하고 있습니다. 매일 새벽 5시면 신선한 채소와 과일이 도착해서 오픈 준비가 수월해요. 특히 가격 대비 품질이 뛰어나고, 배송 기사님들도 친절하셔서 믿고 거래하고 있습니다. 주문도 앱으로 10초면 끝나니 정말 편리합니다!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
    },
    {
      name: '박지혜',
      role: '카페 운영자',
      rating: 5,
      comment: '브런치 카페를 운영하면서 신선한 과일과 채소가 정말 중요한데, 팜투비즈는 항상 최상의 퀄리티를 유지해줍니다. 고객분들이 샐러드와 과일 플레이트 맛이 다르다고 칭찬하실 때마다 뿌듯해요. 계절 과일도 저렴하게 구매할 수 있어서 메뉴 개발에도 큰 도움이 되고 있습니다.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&q=80',
    },
    {
      name: '이민호',
      role: '호텔 구매팀장',
      rating: 5,
      comment: '호텔 레스토랑 특성상 대량 주문이 많은데, 팜투비즈는 물량이 많아도 품질이 일정하고 납품 시간도 정확합니다. 긴급 주문에도 빠르게 대응해주시고, 담당자분과 소통도 원활해서 업무 효율이 많이 높아졌어요. 다른 업체 대비 가격 경쟁력도 있어서 예산 관리에도 도움이 됩니다.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
    },
    {
      name: '정수진',
      role: '베이커리 대표',
      rating: 5,
      comment: '제과제빵에 들어가는 견과류와 과일의 신선도가 완제품 맛을 좌우하는데, 팜투비즈는 HACCP 인증 제품만 취급해서 안심하고 사용합니다. 특히 아몬드, 호두 같은 견과류의 고소한 맛이 살아있어서 고객 만족도가 높아요. 정기 배송 시스템으로 재고 관리도 효율적으로 할 수 있게 되었습니다.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#006400] mb-2">고객 후기</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            고객님들의 생생한 목소리
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            팜투비즈와 함께하는 사업장들의 실제 경험담을 확인하세요
          </p>
        </div>

        {/* 슬라이더 */}
        <div className="max-w-4xl mx-auto relative">
          {/* 메인 카드 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* 인용 아이콘 */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-[#006400] opacity-20" />
            </div>

            {/* 별점 */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* 후기 내용 */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8">
              "{testimonials[currentIndex].comment}"
            </p>

            {/* 고객 정보 */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#006400]"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:bg-[#006400] hover:text-white group"
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:bg-[#006400] hover:text-white group"
            aria-label="다음 후기"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#006400] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`후기 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
