import { z } from 'zod';

export const sampleFormSchema = z.object({
  name: z.string()
    .min(2, '이름은 최소 2자 이상이어야 합니다')
    .max(50, '이름은 50자를 초과할 수 없습니다'),

  email: z.string()
    .email('올바른 이메일 형식이 아닙니다')
    .min(1, '이메일을 입력해주세요'),

  phone: z.string()
    .regex(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)'
    ),

  interestedProducts: z.string()
    .min(1, '관심 품목을 선택해주세요'),

  privacyConsent: z.boolean()
    .refine(val => val === true, {
      message: '개인정보 수집 및 이용에 동의해주세요',
    }),
});

export type SampleFormData = z.infer<typeof sampleFormSchema>;
