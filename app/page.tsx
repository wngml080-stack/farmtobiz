'use client';

import FTBHeader from '@/components/farmtobiz/FTBHeader';
import FTBHero from '@/components/farmtobiz/FTBHero';
import FTBAbout from '@/components/farmtobiz/FTBAbout';
import FTBCategories from '@/components/farmtobiz/FTBCategories';
import FTBBenefits from '@/components/farmtobiz/FTBBenefits';
import FTBVideo from '@/components/farmtobiz/FTBVideo';
import FTBTestimonials from '@/components/farmtobiz/FTBTestimonials';
import FTBWhyChoose from '@/components/farmtobiz/FTBWhyChoose';
import FTBSampleForm from '@/components/farmtobiz/FTBSampleForm';
import FTBFooter from '@/components/farmtobiz/FTBFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FTBHeader />
      <main>
        <FTBHero />
        <FTBAbout />
        <FTBCategories />
        <FTBBenefits />
        <FTBVideo />
        <FTBTestimonials />
        <FTBWhyChoose />
        <FTBSampleForm />
      </main>
      <FTBFooter />
    </div>
  );
}
