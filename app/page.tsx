import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PriceComparisonSection from '@/components/sections/PriceComparisonSection';
import ProductDetailSection from '@/components/sections/ProductDetailSection';
import WhyFarmToBizSection from '@/components/sections/WhyFarmToBizSection';
import ConvenienceSection from '@/components/sections/ConvenienceSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import CTAFormSection from '@/components/sections/CTAFormSection';

export default function Home() {
  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '팜투비즈',
    description: 'B2B 농수산물 도소매 플랫폼',
    url: 'https://farmtobiz-landing.vercel.app',
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection />
        <PriceComparisonSection />
        <ProductDetailSection />
        <WhyFarmToBizSection />
        <ConvenienceSection />
        <SocialProofSection />
        <CTAFormSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
