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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex justify-between items-center py-4">
            {/* 로고 */}
            <div className="flex items-center gap-3 transform hover:scale-105 transition-transform cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/images/farmtobiz-logo.png"
                alt="Farm to Biz"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            {/* 메뉴 */}
            <nav className="flex items-center gap-3 md:gap-6 lg:gap-8">
              {/* 더 궁금한 문의는 텍스트 (데스크탑만 표시) */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-base text-gray-800 font-bold">
                  더 궁금한 문의는
                </span>
                <svg className="w-5 h-5 text-[#006400] animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <a
                href="https://www.instagram.com/farmto_biz?igsh=N3F4OWNkNHAxb3hz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-all transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
                <span className="hidden md:inline text-sm font-medium">인스타그램</span>
              </a>

              <a
                href="mailto:contact@farmtobiz.com"
                className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-all transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden md:inline text-sm font-medium">문의</span>
              </a>

              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-[#006400] to-[#008000] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold hover:from-[#004d00] hover:to-[#006400] transition-all duration-200 text-sm transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                무료신청
              </button>

              <a
                href="https://farmtobiz-wholesaler.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-all transform hover:scale-110"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden md:inline text-sm font-medium">웹사이트</span>
              </a>
            </nav>
          </div>
        </div>
        
        {/* 찢어진 종이 효과 (헤더 하단 부착) */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-[99%] z-50 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-[20px] md:h-[30px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47,24.5,94,38.8,130,26,47-17,64-53,100-68,32-13,85-11,127-2,50,11,80,28,124,24,52-5,75-36,122-33,43,3,80,25,119,34,42,10,88,3,132-18,41-19,60-50,106-52,24-1,40,7,60,15V0Z" 
              fill="rgba(255,255,255,0.95)" 
              className="drop-shadow-sm"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              fill="rgba(255,255,255,0.95)" 
              opacity=".5"
            ></path>
          </svg>
        </div>
      </header>
    </>
  );
}
