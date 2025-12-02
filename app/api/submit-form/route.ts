import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sampleFormSchema } from '@/lib/validation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxuJ4HDjW0jVonsxyjX--3EeDO-RfPM3iblQeojv-yriOHUHOzHPlsEo-U-tr6YSZH8yw/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 폼 데이터 추출 및 검증
    const formData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      interestedProducts: body.interestedProducts,
      privacyConsent: body.privacyConsent,
    };

    // Zod 스키마로 검증
    const validationResult = sampleFormSchema.safeParse(formData);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: '입력 데이터가 올바르지 않습니다',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Google Sheets로 전송 (먼저 실행)
    try {
      console.log('Sending to Google Sheets:', {
        name: body.name,
        email: body.email,
        phone: body.phone,
      });

      const googleResponse = await fetch(googleScriptUrl, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
        }),
      });

      const responseText = await googleResponse.text();
      console.log('Google Sheets response status:', googleResponse.status);
      console.log('Google Sheets response:', responseText);
    } catch (googleError) {
      // Google Sheets 실패해도 계속 진행
      console.error('Google Sheets error:', googleError);
    }

    // n8n webhook 호출 (선택사항)
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...body,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        // Webhook 실패해도 계속 진행
        console.error('n8n webhook error:', webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      message: '신청이 완료되었습니다',
      data,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: '서버 오류가 발생했습니다',
      },
      { status: 500 }
    );
  }
}
