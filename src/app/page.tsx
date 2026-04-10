'use client';

import { Navigation } from '@/components/nexflowx/navigation';
import { HeroEnterprise } from '@/components/nexflowx/hero-enterprise';
import { CoreEngine } from '@/components/nexflowx/core-engine';
import { DeveloperHub } from '@/components/nexflowx/developer-hub';
import { TowerSection } from '@/components/nexflowx/tower-section';
import { CoverageSection } from '@/components/nexflowx/coverage-section';
import { NodesSection } from '@/components/nexflowx/nodes-section';
import { EnterpriseSolutions } from '@/components/nexflowx/enterprise-solutions';
import { InsightsSection } from '@/components/nexflowx/insights-section';
import { PartnersTrust } from '@/components/nexflowx/partners-trust';
import { CTASection } from '@/components/nexflowx/cta-section';
import { Footer } from '@/components/nexflowx/footer';
import Webchat from '@/components/nexflowx/webchat';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroEnterprise />
        <CoreEngine />
        <DeveloperHub />
        <TowerSection />
        <CoverageSection />
        <NodesSection />
        <EnterpriseSolutions />
        <InsightsSection />
        <PartnersTrust />
        <CTASection />
      </main>
      <Footer />
      <Webchat />
    </div>
  );
}
