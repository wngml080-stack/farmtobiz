'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sampleFormSchema, SampleFormData } from '@/lib/validation';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function CTAFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionData, setSessionData] = useState({
    sessionStart: Date.now(),
    ctaClicks: 0,
    scrollDepth: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormData>({
    resolver: zodResolver(sampleFormSchema),
  });

  // 스크롤 깊이 추적
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const depth = Math.round((scrolled / scrollHeight) * 100);

      setSessionData((prev) => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, depth),
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = async (data: SampleFormData) => {
    setIsSubmitting(true);

    try {
      // UTM 파라미터 및 세션 정보 가져오기
      const utmParams = JSON.parse(localStorage.getItem('utm_params') || '{}');
      const referrer = localStorage.getItem('referrer') || '';
      const firstPage = localStorage.getItem('first_page') || '';
      const sessionStart = localStorage.getItem('session_start') || '';

      // 디바이스 정보
      const deviceType =
        window.innerWidth < 768
          ? 'mobile'
          : window.innerWidth < 1024
          ? 'tablet'
          : 'desktop';

      // 페이지 체류 시간 (초)
      const timeOnPage = Math.round((Date.now() - sessionData.sessionStart) / 1000);

      // API 요청 (나중에 구현)
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // 폼 데이터
          ...data,
          // UTM 파라미터
          ...utmParams,
          // 세션 정보
          referrer,
          first_page: firstPage,
          session_start: sessionStart,
          // 디바이스 정보
          device_type: deviceType,
          screen_width: window.screen.width,
          screen_height: window.screen.height,
          // 행동 정보
          time_on_page: timeOnPage,
          scroll_depth: sessionData.scrollDepth,
          cta_clicks: sessionData.ctaClicks,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Thank You 페이지로 리다이렉트
        window.location.href = '/thank-you';
      } else {
        alert(result.message || '신청 중 오류가 발생했습니다');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sample-form" className="py-16 md:py-24 bg-[var(--color-deep-green-700)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* 제목 */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              무료 샘플 박스 신청
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              직접 받아보시고 품질을 확인하세요
            </p>
            <p className="text-white/70 text-sm mt-2">
              ✓ 배송비 무료 | ✓ 구매 의무 없음
            </p>
          </div>

          {/* 폼 */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-xl p-6 md:p-8 shadow-2xl"
          >
            {/* 이름 */}
            <div className="mb-6">
              <Input
                label="이름 *"
                {...register('name')}
                placeholder="예: 홍길동"
                error={errors.name?.message}
              />
            </div>

            {/* 이메일 */}
            <div className="mb-6">
              <Input
                label="이메일 *"
                {...register('email')}
                type="email"
                placeholder="example@email.com"
                error={errors.email?.message}
              />
            </div>

            {/* 연락처 */}
            <div className="mb-6">
              <Input
                label="연락처 *"
                {...register('phone')}
                type="tel"
                placeholder="010-1234-5678"
                error={errors.phone?.message}
              />
            </div>

            {/* 관심 품목 */}
            <div className="mb-6">
              <label className="block text-[var(--color-navy-900)] font-bold mb-2">
                관심 품목 *
              </label>
              <select
                {...register('interestedProducts')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-deep-green-700)] focus:border-transparent transition-all duration-200"
              >
                <option value="">선택해주세요</option>
                <option value="채소류">채소류 (양파, 당근, 감자 등)</option>
                <option value="과일류">과일류 (사과, 배, 귤 등)</option>
                <option value="수산물">수산물 (오징어, 고등어 등)</option>
                <option value="기타">기타</option>
              </select>
              {errors.interestedProducts && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.interestedProducts.message}
                </p>
              )}
            </div>

            {/* 개인정보 동의 */}
            <div className="mb-6">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('privacyConsent')}
                  className="mt-1"
                />
                <span className="text-sm text-[var(--color-navy-700)]">
                  개인정보 수집 및 이용에 동의합니다 *
                  <span className="block text-xs text-[var(--color-navy-500)] mt-1">
                    (수집 항목: 이름, 이메일, 연락처 | 이용 목적: 샘플 발송 및 상담)
                  </span>
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.privacyConsent.message}
                </p>
              )}
            </div>

            {/* 제출 버튼 */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-lg"
            >
              {isSubmitting ? '신청 중...' : '무료 샘플 신청하기'}
            </Button>

            <p className="text-center text-[var(--color-navy-600)] text-sm mt-4">
              * 영업일 기준 2-3일 내 배송됩니다
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
