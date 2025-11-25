'use client';

import React from 'react';

export default function Header() {
  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-deep-green-700)]">
              팜투비즈
            </h1>
            <p className="text-xs text-[var(--color-navy-600)] hidden md:block">
              FarmToBiz
            </p>
          </div>

          {/* CTA 버튼 */}
          <button
            onClick={scrollToForm}
            className="bg-[var(--color-deep-green-700)] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold hover:bg-[var(--color-deep-green-800)] transition-colors duration-200 text-sm md:text-base"
          >
            무료 샘플 신청
          </button>
        </div>
      </div>
    </header>
  );
}
