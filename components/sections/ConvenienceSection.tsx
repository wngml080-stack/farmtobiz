'use client';

import React from 'react';

export default function ConvenienceSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-navy-900)] text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* 스마트폰 목업 */}
          <div className="relative order-2 md:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* 스마트폰 프레임 */}
              <div className="bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* 스마트폰 화면 */}
                  <div className="aspect-[9/19] bg-gradient-to-br from-[var(--color-deep-green-400)] to-[var(--color-deep-green-600)] flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <svg
                        className="w-20 h-20 mx-auto mb-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <p className="text-lg font-bold">10초 만에</p>
                      <p className="text-lg font-bold">발주 완료</p>
                      <div className="mt-6 space-y-3">
                        <div className="bg-white/20 rounded-lg py-2 px-4">
                          <p className="text-sm">양파 10kg</p>
                        </div>
                        <div className="bg-white/20 rounded-lg py-2 px-4">
                          <p className="text-sm">당근 10kg</p>
                        </div>
                        <div className="bg-white/20 rounded-lg py-2 px-4">
                          <p className="text-sm">감자 20kg</p>
                        </div>
                      </div>
                      <button className="mt-6 w-full bg-[var(--color-deep-green-800)] text-white py-3 rounded-lg font-bold shadow-lg">
                        주문하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 장식 요소 */}
              <div className="absolute -top-4 -right-4 bg-[var(--color-deep-green-500)] rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
                <span className="text-4xl">⚡</span>
              </div>
            </div>
          </div>

          {/* 편의성 설명 */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              10초면 발주 완료
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              시장 가느라 시간 낭비하지 마세요
            </p>

            <div className="space-y-6 md:space-y-8">
              {/* 단계 1 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="bg-[var(--color-deep-green-600)] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">필요한 품목 검색</h3>
                  <p className="text-white/70 text-base md:text-lg">
                    양파, 당근 등 키워드로 바로 검색
                  </p>
                </div>
              </div>

              {/* 단계 2 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="bg-[var(--color-deep-green-600)] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">수량 선택 후 주문</h3>
                  <p className="text-white/70 text-base md:text-lg">
                    클릭 몇 번으로 주문 완료
                  </p>
                </div>
              </div>

              {/* 단계 3 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="bg-[var(--color-deep-green-600)] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">다음날 새벽 배송</h3>
                  <p className="text-white/70 text-base md:text-lg">
                    식당 문 앞까지 안전하게 배송
                  </p>
                </div>
              </div>
            </div>

            {/* 추가 혜택 */}
            <div className="mt-10 md:mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg md:text-xl font-bold mb-3">💡 추가 혜택</p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-deep-green-400)]">✓</span>
                  최근 주문 내역 다시 담기 기능
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-deep-green-400)]">✓</span>
                  자주 주문하는 품목 즐겨찾기
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-deep-green-400)]">✓</span>
                  배송 현황 실시간 알림
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
