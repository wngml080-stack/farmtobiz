'use client';

import React from 'react';
import { Instagram, Mail, Globe } from 'lucide-react';

export default function FTBHeader() {
  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div className="flex items-center">
            <img
              src="/images/farmtobiz-logo.png"
              alt="팜투비즈 로고"
              className="h-10 md:h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-2xl font-bold text-[#006400]">팜투비즈</div>
          </div>

          {/* 메뉴 */}
          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">인스타그램</span>
            </a>

            <a
              href="mailto:contact@farmtobiz.com"
              className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">문의</span>
            </a>

            <button
              onClick={scrollToForm}
              className="bg-[#006400] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold hover:bg-[#004d00] transition-all duration-200 text-sm transform hover:scale-105"
            >
              무료신청
            </button>

            <a
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">웹사이트</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
