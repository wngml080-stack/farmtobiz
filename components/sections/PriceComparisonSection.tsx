'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 임시 데이터 (나중에 실제 데이터로 교체)
const priceComparisonData = [
  { product: '양파 (10kg)', garakPrice: 35000, farmtobizPrice: 29750 },
  { product: '당근 (10kg)', garakPrice: 42000, farmtobizPrice: 35700 },
  { product: '감자 (20kg)', garakPrice: 55000, farmtobizPrice: 46750 },
  { product: '대파 (5kg)', garakPrice: 28000, farmtobizPrice: 23800 },
];

export default function PriceComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-navy-900)] mb-4">
            가락시장보다 평균 <span className="text-[var(--color-deep-green-700)]">15% 저렴</span>합니다
          </h2>
          <p className="text-[var(--color-navy-600)] text-base md:text-lg mt-4">
            * 2024년 11월 기준 주요 품목 평균가 비교
          </p>
          <p className="text-[var(--color-navy-500)] text-sm md:text-base mt-2">
            중간 유통 단계 3개를 없애고 산지에서 바로 공급합니다
          </p>
        </div>

        {/* 차트 (데스크탑) */}
        <div className="hidden md:block max-w-5xl mx-auto mb-12">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={priceComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="product"
                angle={-20}
                textAnchor="end"
                height={100}
                tick={{ fill: '#475569' }}
              />
              <YAxis
                tick={{ fill: '#475569' }}
                label={{ value: '가격 (원)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => value.toLocaleString() + '원'}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value) =>
                  value === 'garakPrice' ? '가락시장' : '팜투비즈'
                }
              />
              <Bar
                dataKey="garakPrice"
                fill="#1e293b"
                name="가락시장"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="farmtobizPrice"
                fill="#065f46"
                name="팜투비즈"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 테이블 (모바일) */}
        <div className="md:hidden max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-[var(--color-navy-800)] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold">품목</th>
                  <th className="px-4 py-3 text-right text-sm font-bold">가락시장</th>
                  <th className="px-4 py-3 text-right text-sm font-bold">팜투비즈</th>
                </tr>
              </thead>
              <tbody>
                {priceComparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-[var(--color-navy-900)]">
                      {item.product}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-[var(--color-navy-600)]">
                      {item.garakPrice.toLocaleString()}원
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-bold text-[var(--color-deep-green-700)]">
                      {item.farmtobizPrice.toLocaleString()}원
                      <span className="block text-xs text-[var(--color-deep-green-600)] mt-1">
                        -{Math.round((1 - item.farmtobizPrice / item.garakPrice) * 100)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 강조 메시지 */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-[var(--color-deep-green-50)] rounded-lg px-6 md:px-8 py-4 md:py-6">
            <p className="text-[var(--color-deep-green-800)] text-lg md:text-xl font-bold">
              💰 연간 평균 <span className="text-2xl md:text-3xl text-[var(--color-deep-green-700)]">1,500만원</span> 절감 가능
            </p>
            <p className="text-[var(--color-deep-green-700)] text-sm md:text-base mt-2">
              * 월 1,000만원 구매 시 기준
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
