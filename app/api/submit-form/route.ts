import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sampleFormSchema } from '@/lib/validation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwe9_W020oFH2OCBSzwurOVQy6uNO5eYy2m_Hp90d3iAysvk2KMQ4pL-KFybNluIdU_4w/exec';

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

    // Supabase 클라이언트 생성
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Supabase에 데이터 저장
    const { data, error } = await supabase.from('leads').insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        interested_products: body.interestedProducts,
        privacy_consent: body.privacyConsent,
        // UTM 파라미터
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
        utm_term: body.utm_term || null,
        utm_content: body.utm_content || null,
        // 세션 정보
        referrer: body.referrer || null,
        first_page: body.first_page || null,
        session_start: body.session_start || null,
        // 디바이스 정보
        device_type: body.device_type || null,
        screen_width: body.screen_width || null,
        screen_height: body.screen_height || null,
        // 행동 정보
        time_on_page: body.time_on_page || null,
        scroll_depth: body.scroll_depth || null,
        cta_clicks: body.cta_clicks || null,
        // 타임스탬프
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        {
          success: false,
          message: '데이터 저장 중 오류가 발생했습니다',
        },
        { status: 500 }
      );
    }

    // Google Sheets로 전송
    try {
      await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
        }),
      });
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
