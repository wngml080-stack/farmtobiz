-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,

  -- 기본 정보
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  interested_products VARCHAR(100) NOT NULL,
  privacy_consent BOOLEAN NOT NULL DEFAULT false,

  -- UTM 파라미터
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_term VARCHAR(255),
  utm_content VARCHAR(255),

  -- 세션 정보
  referrer TEXT,
  first_page TEXT,
  session_start VARCHAR(50),

  -- 디바이스 정보
  device_type VARCHAR(20),
  screen_width INTEGER,
  screen_height INTEGER,

  -- 행동 정보
  time_on_page INTEGER,
  scroll_depth INTEGER,
  cta_clicks INTEGER,

  -- 타임스탬프
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from API
CREATE POLICY "Enable insert for all users" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to read all
CREATE POLICY "Enable read for service role" ON leads
  FOR SELECT
  USING (true);
