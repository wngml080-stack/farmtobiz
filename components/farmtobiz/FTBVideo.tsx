'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function FTBVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#006400] mb-2">홍보 영상</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            팜투비즈를 영상으로 만나보세요
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            농장에서 식탁까지, 팜투비즈가 제공하는 신선한 농수산물의 여정을 확인하세요
          </p>
        </div>

        {/* 비디오 플레이어 */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            {/* 비디오 */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onClick={togglePlay}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              <source src="/videos/1127.mov" type="video/quicktime" />
              <source src="/videos/1127.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* 오버레이 및 재생 버튼 (비디오가 재생 중이 아닐 때만 표시) */}
            {!isPlaying && (
              <>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-[#006400] ml-1" fill="currentColor" />
                  </div>
                </button>

                {/* 비디오 길이 표시 */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  0:10
                </div>
              </>
            )}
          </div>

          {/* 비디오 설명 */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#006400] mb-2">1,000+</div>
              <p className="text-gray-600">거래 업체</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#006400] mb-2">5,000+</div>
              <p className="text-gray-600">월 배송 건수</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#006400] mb-2">99%</div>
              <p className="text-gray-600">고객 만족도</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
