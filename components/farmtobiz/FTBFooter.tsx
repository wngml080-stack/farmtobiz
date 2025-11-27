'use client';

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Search } from 'lucide-react';

export default function FTBFooter() {
  const categories = [
    '과일',
    '채소',
    '곡물',
    '견과류',
    '수산물',
    '기타',
  ];

  const news = [
    {
      title: '팜투비즈, B2B 농수산물 유통 1위 달성',
      date: '2025.01.15',
    },
    {
      title: '새벽배송 서비스 지역 확대',
      date: '2025.01.10',
    },
    {
      title: '프리미엄 과일 라인업 추가',
      date: '2025.01.05',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* 메인 푸터 컨텐츠 */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* 1. 로고 & 소개 */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/farmtobiz-logo.png"
                alt="팜투비즈 로고"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-2xl font-bold text-white">팜투비즈</div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              농장에서 비즈니스까지, 최고의 농수산물을 합리적인 가격에 공급하는 B2B 플랫폼입니다.
            </p>

            {/* 연락처 아이콘 */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/farmto_biz?igsh=N3F4OWNkNHAxb3hz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#006400] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:031-555-5555"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#006400] flex items-center justify-center transition-colors"
                aria-label="전화"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:wngml080@gmail.com"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#006400] flex items-center justify-center transition-colors"
                aria-label="이메일"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. 카테고리 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">취급 품목</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-[#006400] transition-colors inline-block"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 최신 소식 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">최신 소식</h3>
            <ul className="space-y-3">
              {news.map((item, index) => (
                <li key={index}>
                  <a href="#" className="group">
                    <div className="text-sm hover:text-[#006400] transition-colors mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. 고객센터 & 문의내용 검색 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">고객센터</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006400]" />
                <div>
                  <div className="font-semibold text-white">031-555-5555</div>
                  <div className="text-xs text-gray-500">평일 09:00 - 18:00</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006400]" />
                <a href="mailto:wngml080@gmail.com" className="hover:text-[#006400] transition-colors">
                  wngml080@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006400]" />
                <div>서울특별시 강남구<br />테헤란로 12345</div>
              </li>
            </ul>

            {/* 문의내용 검색하기 */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">문의내용 검색하기</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-[#006400] transition-colors"
                />
                <button className="w-10 h-10 rounded-lg bg-[#006400] hover:bg-[#004d00] flex items-center justify-center transition-colors flex-shrink-0">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 저작권 */}
      <div className="border-t border-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © 2025 FarmToBiz. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#006400] transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-[#006400] transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-[#006400] transition-colors">
                사업자정보
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
