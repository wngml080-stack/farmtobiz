'use client';

import React from 'react';
import FTBHeader from '@/components/farmtobiz/FTBHeader';
import FTBHero from '@/components/farmtobiz/FTBHero';
import FTBAbout from '@/components/farmtobiz/FTBAbout';
import FTBProducts from '@/components/farmtobiz/FTBProducts';
import FTBBenefits from '@/components/farmtobiz/FTBBenefits';
import FTBVideo from '@/components/farmtobiz/FTBVideo';
import FTBCategories from '@/components/farmtobiz/FTBCategories';
import FTBTestimonials from '@/components/farmtobiz/FTBTestimonials';
import FTBWhyChoose from '@/components/farmtobiz/FTBWhyChoose';
import FTBFooter from '@/components/farmtobiz/FTBFooter';

export default function FarmToBizPage() {
  return (
    <div className="min-h-screen bg-white">
      <FTBHeader />
      <main>
        <FTBHero />
        <FTBAbout />
        <FTBProducts />
        <FTBBenefits />
        <FTBVideo />
        <FTBCategories />
        <FTBTestimonials />
        <FTBWhyChoose />
      </main>
      <FTBFooter />
    </div>
  );
}
