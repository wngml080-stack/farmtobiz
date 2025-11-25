import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-900)] text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 회사 정보 */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-deep-green-400)] mb-4">
              팜투비즈
            </h2>
            <p className="text-[var(--color-navy-300)] text-sm mb-2">
              FarmToBiz
            </p>
            <p className="text-[var(--color-navy-400)] text-sm">
              B2B 농수산물 도소매 플랫폼
            </p>
          </div>

          {/* 팀 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4">팀원</h3>
            <p className="text-[var(--color-navy-300)] text-sm">
              이상환, 김소연, 남혜리, 박용범, 김지헌
            </p>
            <p className="text-[var(--color-navy-500)] text-xs mt-4">
              사업자등록번호: (추후 업데이트)
            </p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-[var(--color-navy-700)] my-8"></div>

        {/* 저작권 */}
        <div className="text-center text-[var(--color-navy-500)] text-sm">
          <p>&copy; 2024 팜투비즈 (FarmToBiz). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
