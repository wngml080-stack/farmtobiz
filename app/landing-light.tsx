'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ChevronRight,
  Check,
  TrendingDown,
  Truck,
  Shield,
  Star,
  Clock,
  Award,
  ThumbsUp,
  Package,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function LandingLightPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedProducts: '',
    privacyConsent: false,
  });

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('sample-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('샘플 신청이 완료되었습니다!');
  };

  const productImages = [
    {
      category: '신선 채소',
      image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&h=800&fit=crop&q=80',
    },
    {
      category: '신선 생선',
      image: 'https://images.unsplash.com/photo-1580959375944-0ea1eb0868e3?w=800&h=800&fit=crop&q=80',
    },
    {
      category: '프리미엄 과일',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=800&fit=crop&q=80',
    },
    {
      category: '최상급 육류',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&h=800&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ========== 헤더 (Header) ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* 로고 */}
            <div className="flex items-center">
              <img
                src="/images/farmtobiz-logo.png"
                alt="팜투비즈 로고"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* CTA 버튼 */}
            <button
              onClick={scrollToForm}
              className="bg-[#006400] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold hover:bg-[#004d00] transition-all duration-200 text-sm md:text-base transform hover:scale-105"
            >
              무료 샘플 신청
            </button>
          </div>
        </div>
      </header>

      {/* ========== 히어로 섹션 (Hero Section) ========== */}
      <section className="relative min-h-screen bg-white pt-24 pb-12 md:pt-32 md:pb-20">
        {/* 메인 메시지 */}
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-12 md:mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
              <Sparkles className="w-4 h-4 text-[#006400]" />
              <span className="text-gray-700 text-sm font-medium">
                전국 1,200+ 식당이 선택한 신뢰
              </span>
            </div>

            <h1 className="text-[#111111] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              최고의 농수산물을
              <br />
              <span className="text-[#006400]">
                가장 합리적인 가격에
              </span>
            </h1>
            <p className="text-[#4B5563] text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
              중간 유통 마진 제거로{' '}
              <span className="font-bold text-[#006400]">가락시장 대비 15% 저렴</span>
              <br className="hidden md:block" />
              산지에서 식당까지, 새벽 배송으로 신선하게
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-10 md:mt-12">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-white bg-[#006400] rounded-full shadow-2xl hover:shadow-[#006400]/30 transform hover:scale-105 transition-all duration-300"
            >
              <span>무료 샘플 신청하기</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-600 text-sm md:text-base mt-4">
              ✓ 배송비 무료 | ✓ 구매 의무 없음 | ✓ 2-3일 내 배송
            </p>
          </div>

          {/* 4개 제품 이미지 그리드 */}
          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {productImages.map((product, index) => (
                <div
                  key={index}
                  className="relative group aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#006400] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {/* 이미지 */}
                  <img
                    src={product.image}
                    alt={product.category}
                    className="w-full h-full object-cover"
                  />

                  {/* 하단 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* 텍스트 */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <p className="text-white font-bold text-base md:text-lg text-center drop-shadow-lg">
                      {product.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 신뢰 배지 */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Truck, label: '산지 직송' },
                { icon: Shield, label: '신선도 보장' },
                { icon: TrendingDown, label: '가격 투명' },
                { icon: Award, label: '품질 인증' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-all duration-300 hover:bg-white hover:border-[#006400] hover:shadow-lg hover:scale-105"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-[#006400] group-hover:scale-110 transition-transform" />
                  <p className="text-gray-700 font-medium text-xs md:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 쿠폰/가격 비교 섹션 ========== */}
      <section className="py-16 md:py-24 bg-[#F3F4F6]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 제목 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              가락시장보다 평균 <span className="text-[#006400]">15% 저렴</span>합니다
            </h2>
            <p className="text-[#4B5563] text-base md:text-lg mt-4">
              * 2024년 11월 기준 주요 품목 평균가 비교
            </p>
            <p className="text-gray-500 text-sm md:text-base mt-2">
              중간 유통 단계 3개를 없애고 산지에서 바로 공급합니다
            </p>
          </div>

          {/* 가격 비교 카드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { product: '양파 (10kg)', garakPrice: 35000, farmtobizPrice: 29750 },
              { product: '당근 (10kg)', garakPrice: 42000, farmtobizPrice: 35700 },
              { product: '감자 (20kg)', garakPrice: 55000, farmtobizPrice: 46750 },
              { product: '대파 (5kg)', garakPrice: 28000, farmtobizPrice: 23800 },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-bold text-[#111111] text-lg mb-4 text-center">
                  {item.product}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">가락시장</span>
                    <span className="text-gray-700 font-medium line-through">
                      {item.garakPrice.toLocaleString()}원
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#006400] text-sm font-bold">팜투비즈</span>
                    <span className="text-[#006400] font-bold text-xl">
                      {item.farmtobizPrice.toLocaleString()}원
                    </span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="inline-block bg-[#006400] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {Math.round((1 - item.farmtobizPrice / item.garakPrice) * 100)}% 할인
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 강조 메시지 */}
          <div className="text-center">
            <div className="inline-block bg-white rounded-xl px-6 md:px-8 py-4 md:py-6 shadow-lg">
              <p className="text-[#006400] text-lg md:text-xl font-bold">
                💰 연간 평균 <span className="text-2xl md:text-3xl">1,500만원</span> 절감 가능
              </p>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                * 월 1,000만원 구매 시 기준
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 영상/설명 섹션 ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] text-center mb-8">
              팜투비즈가 특별한 이유
            </h2>

            {/* 유튜브 플레이스홀더 */}
            <div className="aspect-video bg-gray-200 rounded-xl mb-8 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#006400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">영상으로 보는 팜투비즈</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-[#4B5563] text-lg leading-relaxed text-center">
                산지에서 식당까지 직접 연결하는 팜투비즈는 중간 유통 단계를 최소화하여
                신선도는 높이고 가격은 낮췄습니다. 전국 1,200개 이상의 식당이
                팜투비즈와 함께하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 프로세스 섹션 (1,2,3 단계) ========== */}
      <section className="py-16 md:py-24 bg-[#F3F4F6]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] text-center mb-12 md:mb-16">
            이렇게 간단합니다
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: '무료 샘플 신청',
                description: '아래 폼을 작성하고 무료 샘플을 받아보세요. 배송비도 무료입니다.',
                icon: Package,
              },
              {
                step: '2',
                title: '품질 확인',
                description: '직접 받아보고 신선도와 품질을 확인하세요. 마음에 들지 않으면 구매 의무가 없습니다.',
                icon: ThumbsUp,
              },
              {
                step: '3',
                title: '정기 주문',
                description: '만족하셨다면 정기 주문으로 전환하세요. 매주 신선한 농수산물을 받아보실 수 있습니다.',
                icon: Clock,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* 단계 번호 */}
                <div className="w-16 h-16 bg-[#006400] text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>

                {/* 아이콘 */}
                <item.icon className="w-12 h-12 text-[#006400] mx-auto mb-4" />

                {/* 제목 */}
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {item.title}
                </h3>

                {/* 설명 */}
                <p className="text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 후기 섹션 (Social Proof) - 다크 그린 배경 ========== */}
      <section className="py-16 md:py-24 bg-[#006400]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 제목 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              사장님들이 먼저 인정한 팜투비즈
            </h2>
            <p className="text-white/90 text-base md:text-lg mt-4">
              이미 <span className="font-bold text-white">1,200곳</span>의 식당이 사용 중입니다
            </p>
          </div>

          {/* 후기 카드 그리드 */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                content: "처음엔 샘플만 시켰는데, 품질이 너무 좋아서 지금은 전량 여기서 받아요. 반품할 일이 없어서 좋습니다.",
                restaurant: "서울 한식당",
                location: "서울 강남구",
                type: "한식",
              },
              {
                content: "새벽 배송 덕분에 장보러 갈 시간을 아낄 수 있어요. 가격도 시장보다 저렴하고 품질도 만족스럽니다.",
                restaurant: "부산 횟집",
                location: "부산 해운대구",
                type: "일식",
              },
              {
                content: "상세페이지에 당도계 수치까지 올려주니 믿고 주문할 수 있어요. 고객들 반응도 좋습니다.",
                restaurant: "대구 카페",
                location: "대구 중구",
                type: "카페",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 별점 */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* 후기 내용 */}
                <p className="text-[#4B5563] text-base md:text-lg italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* 구분선 */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#111111] mb-1">
                    {testimonial.restaurant}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location} | {testimonial.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 통계 정보 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { number: '1,200+', label: '거래 식당' },
              { number: '87%', label: '월 재주문율' },
              { number: '4.8', label: '만족도 /5.0' },
              { number: '0.3%', label: '반품률' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* 신뢰 배지 */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { icon: Check, text: '품질 보증' },
                { icon: Check, text: '100% 환불 보장' },
                { icon: Check, text: '신선도 보증' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <item.icon className="w-6 h-6" />
                  <span className="font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 신청 폼 (Lead Form) ========== */}
      <section id="sample-form" className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* 제목 */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
                무료 샘플 박스 신청
              </h2>
              <p className="text-[#4B5563] text-base md:text-lg">
                직접 받아보시고 품질을 확인하세요
              </p>
              <p className="text-gray-600 text-sm mt-2">
                ✓ 배송비 무료 | ✓ 구매 의무 없음
              </p>
            </div>

            {/* 폼 */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-6 md:p-8 shadow-xl border-2 border-gray-200"
            >
              {/* 이름 */}
              <div className="mb-6">
                <label className="block text-[#111111] font-bold mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="예: 홍길동"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* 이메일 */}
              <div className="mb-6">
                <label className="block text-[#111111] font-bold mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* 연락처 */}
              <div className="mb-6">
                <label className="block text-[#111111] font-bold mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* 관심 품목 */}
              <div className="mb-6">
                <label className="block text-[#111111] font-bold mb-2">
                  관심 품목 *
                </label>
                <select
                  required
                  value={formData.interestedProducts}
                  onChange={(e) => setFormData({ ...formData, interestedProducts: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent transition-all duration-200"
                >
                  <option value="">선택해주세요</option>
                  <option value="채소류">채소류 (양파, 당근, 감자 등)</option>
                  <option value="과일류">과일류 (사과, 배, 귤 등)</option>
                  <option value="수산물">수산물 (오징어, 고등어 등)</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              {/* 개인정보 동의 */}
              <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#006400]"
                  />
                  <span className="text-sm text-[#4B5563]">
                    개인정보 수집 및 이용에 동의합니다 *
                    <span className="block text-xs text-gray-500 mt-1">
                      (수집 항목: 이름, 이메일, 연락처 | 이용 목적: 샘플 발송 및 상담)
                    </span>
                  </span>
                </label>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                className="w-full py-4 text-lg font-bold text-white bg-[#006400] rounded-lg hover:bg-[#004d00] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                무료 샘플 신청하기
              </button>

              <p className="text-center text-gray-600 text-sm mt-4">
                * 영업일 기준 2-3일 내 배송됩니다
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ========== 푸터 (Footer) ========== */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 회사 정보 */}
            <div>
              <img
                src="/images/farmtobiz-logo.png"
                alt="팜투비즈 로고"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                산지에서 식당까지, 신선한 농수산물을 합리적인 가격에 공급하는 B2B 플랫폼입니다.
              </p>
            </div>

            {/* 연락처 */}
            <div>
              <h4 className="font-bold mb-4">고객센터</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>1588-1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@farmtobiz.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>서울시 강남구</span>
                </div>
              </div>
            </div>

            {/* 링크 */}
            <div>
              <h4 className="font-bold mb-4">바로가기</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={scrollToForm} className="hover:text-[#006400] transition-colors">
                    무료 샘플 신청
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-[#006400] transition-colors">회사소개</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#006400] transition-colors">이용약관</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#006400] transition-colors">개인정보처리방침</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 팜투비즈. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
