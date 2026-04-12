'use client';

import { useAppStore } from '@/lib/store';
import { Navbar } from '@/components/nexflowx/navbar';
import { Footer } from '@/components/nexflowx/footer';
import { PortalLayout } from '@/components/nexflowx/portal-layout';

import { HomePage } from '@/components/nexflowx/pages/home';
import { HowItWorksPage } from '@/components/nexflowx/pages/how-it-works';
import { SolutionsPage } from '@/components/nexflowx/pages/solutions';
import { ApiTechnologyPage } from '@/components/nexflowx/pages/api-technology';
import { ComplianceRegulatoryPage } from '@/components/nexflowx/pages/compliance-regulatory';
import { ComplianceAmlKycPage } from '@/components/nexflowx/pages/compliance-aml-kyc';
import { ComplianceProgramPage } from '@/components/nexflowx/pages/compliance-program';
import { ComplianceRiskPage } from '@/components/nexflowx/pages/compliance-risk';
import { ComplianceDataProtectionPage } from '@/components/nexflowx/pages/compliance-data-protection';
import { TermsOfServicePage } from '@/components/nexflowx/pages/terms-of-service';
import { PrivacyPolicyPage } from '@/components/nexflowx/pages/privacy-policy';
import { ComplianceStatementPage } from '@/components/nexflowx/pages/compliance-statement';

import { PortalDashboard } from '@/components/nexflowx/portal/dashboard';
import { PortalOnboarding } from '@/components/nexflowx/portal/onboarding';
import { PortalDocuments } from '@/components/nexflowx/portal/documents';
import { PortalApiAccess } from '@/components/nexflowx/portal/api-access';

import { AnimatePresence, motion } from 'framer-motion';

function PageContent() {
  const { currentPage } = useAppStore();

  const isPortal = currentPage.startsWith('portal');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'api-technology':
        return <ApiTechnologyPage />;
      case 'compliance':
        return <ComplianceRegulatoryPage />;
      case 'compliance-regulatory':
        return <ComplianceRegulatoryPage />;
      case 'compliance-aml-kyc':
        return <ComplianceAmlKycPage />;
      case 'compliance-program':
        return <ComplianceProgramPage />;
      case 'compliance-risk':
        return <ComplianceRiskPage />;
      case 'compliance-data-protection':
        return <ComplianceDataProtectionPage />;
      case 'terms-of-service':
        return <TermsOfServicePage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'compliance-statement':
        return <ComplianceStatementPage />;
      case 'portal':
      case 'portal-dashboard':
        return <PortalDashboard />;
      case 'portal-onboarding':
        return <PortalOnboarding />;
      case 'portal-documents':
        return <PortalDocuments />;
      case 'portal-api-access':
        return <PortalApiAccess />;
      default:
        return <HomePage />;
    }
  };

  if (isPortal) {
    return <PortalLayout>{renderPage()}</PortalLayout>;
  }

  return (
    <main className="flex-grow pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NexFlowX',
  legalName: 'IAHUB360 LTD',
  url: 'https://nexflowx.tech',
  logo: 'https://nexflowx.tech/nexflowx-logo-nav.png',
  description: 'API-driven financial infrastructure for cross-border commerce. Technology Service Provider (TSP).',
  foundingDate: '2025',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@nexflowx.tech',
    contactType: 'customer support',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '124-128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  sameAs: [],
};

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NexFlowX Platform',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description: 'Cross-border payment orchestration and financial infrastructure API',
  url: 'https://nexflowx.tech',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Institutional access requires KYC/KYB verification',
  },
  creator: {
    '@type': 'Organization',
    name: 'IAHUB360 LTD',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <PageContent />
        <Footer />
      </div>
    </>
  );
}
