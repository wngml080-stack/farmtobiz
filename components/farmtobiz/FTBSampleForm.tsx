'use client';

import { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail } from 'lucide-react';

export default function FTBSampleForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 여기에 실제 API 호출을 추가할 수 있습니다
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // 3초 후 폼 초기화
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="sample-form" className="py-12 md:py-16 bg-gradient-to-br from-[#006400] to-[#004d00]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* 제목 */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green-200 mb-2">무료 샘플 신청</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              지금 신청하고 무료로 체험하세요
            </h2>
            <p className="text-green-100 text-lg">
              팜투비즈의 신선한 품질을 직접 경험해보세요
            </p>
          </div>

          {/* 폼 */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="space-y-6">
                {/* 이름 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#006400]" />
                      <span>이름 *</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#006400] focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                {/* 전화번호 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#006400]" />
                      <span>전화번호 *</span>
                    </div>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#006400] focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                {/* 이메일 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#006400]" />
                      <span>이메일 *</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@company.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#006400] focus:outline-none transition-colors text-gray-900"
                  />
                </div>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 py-4 bg-[#006400] text-white font-bold rounded-lg hover:bg-[#004d00] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>처리중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>무료 샘플 신청하기</span>
                  </>
                )}
              </button>

              {/* 안내 문구 */}
              <p className="text-center text-sm text-gray-500 mt-4">
                신청 후 1영업일 내에 담당자가 연락드립니다
              </p>
            </form>
          ) : (
            // 제출 완료 메시지
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-[#006400]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h3>
              <p className="text-gray-600">
                담당자가 곧 연락드리겠습니다.<br />
                감사합니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
