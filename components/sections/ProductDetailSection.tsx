'use client';

import React from 'react';
import Card from '../ui/Card';

export default function ProductDetailSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-navy-900)] mb-4">
            사진만 봐도 품질을 알 수 있습니다
          </h2>
          <p className="text-[var(--color-navy-600)] text-base md:text-lg mt-4">
            영업 사원의 "좋습니다"라는 말 대신, 당도계 수치와 자를 댄 사진을 믿으세요
          </p>
        </div>

        {/* 컨텐츠 그리드 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 고화질 상품 이미지 */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* 임시 이미지 플레이스홀더 */}
              <div className="aspect-square bg-gradient-to-br from-[var(--color-deep-green-500)] to-[var(--color-deep-green-700)] flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <svg
                    className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 opacity-70"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg md:text-xl font-bold">고화질 상품 사진</p>
                  <p className="text-sm opacity-70 mt-2">(실제 이미지로 교체 예정)</p>
                </div>
              </div>
            </div>
            {/* 배지 */}
            <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
              <span className="text-[var(--color-deep-green-700)] font-bold text-sm">
                📸 실제 상품 사진
              </span>
            </div>
          </div>

          {/* 품질 정보 카드 */}
          <div className="space-y-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🍎</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy-900)] mb-2">
                    당도계 수치 표기
                  </h3>
                  <p className="text-[var(--color-navy-600)] mb-4">
                    모든 과일 상품에 당도계 측정 결과를 표기합니다
                  </p>
                  <div className="bg-[var(--color-deep-green-50)] rounded-lg p-4">
                    <p className="text-[var(--color-deep-green-700)] font-bold text-2xl md:text-3xl">
                      당도 14.5 Brix
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-4xl">📏</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy-900)] mb-2">
                    정확한 규격 정보
                  </h3>
                  <p className="text-[var(--color-navy-600)] mb-4">
                    자를 댄 사진으로 정확한 크기를 확인하세요
                  </p>
                  <ul className="space-y-2 text-[var(--color-navy-700)]">
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--color-deep-green-700)]">✓</span>
                      크기: 직경 8-10cm
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--color-deep-green-700)]">✓</span>
                      중량: 개당 250-300g
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-navy-900)] mb-2">
                    산지/등급 정보
                  </h3>
                  <ul className="space-y-2 text-[var(--color-navy-700)]">
                    <li className="flex justify-between">
                      <span className="text-[var(--color-navy-600)]">산지</span>
                      <span className="font-bold">제주도</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--color-navy-600)]">등급</span>
                      <span className="font-bold text-[var(--color-deep-green-700)]">특품</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[var(--color-navy-600)]">포장 단위</span>
                      <span className="font-bold">10kg (40-50개)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 하단 강조 메시지 */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-[var(--color-navy-700)] font-bold">
            보지 않고도 믿을 수 있는 데이터 기반 상세 정보
          </p>
        </div>
      </div>
    </section>
  );
}
