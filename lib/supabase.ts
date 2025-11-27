import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  interested_products: string;
  privacy_consent: boolean;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  referrer?: string | null;
  first_page?: string | null;
  session_start?: string | null;
  device_type?: string | null;
  screen_width?: number | null;
  screen_height?: number | null;
  time_on_page?: number | null;
  scroll_depth?: number | null;
  cta_clicks?: number | null;
  created_at?: string;
};
