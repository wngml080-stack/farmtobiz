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
      comment: '팜투비즈 덕분에 매일 신선한 재료를 합리적인 가격에 공급받고 있습니다. 특히 새벽 배송 서비스가 정말 만족스럽습니다.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
    },
    {
      name: '박지혜',
      role: '카페 운영자',
      rating: 5,
      comment: '과일 품질이 정말 좋아요. 고객들도 만족해하시고, 재주문률이 높아졌습니다. 10초 발주 시스템도 너무 편리합니다.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
    },
    {
      name: '이민호',
      role: '호텔 구매팀장',
      rating: 5,
      comment: '대량 주문에도 품질이 일정하고, 배송도 정확합니다. 팜투비즈는 믿을 수 있는 파트너입니다.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
    },
    {
      name: '정수진',
      role: '베이커리 대표',
      rating: 5,
      comment: '신선한 재료가 빵 맛을 결정합니다. 팜투비즈의 품질 관리 시스템 덕분에 항상 최고의 재료를 사용할 수 있어요.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
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
