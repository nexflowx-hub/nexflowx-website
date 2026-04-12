'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Lock,
  Building2,
  AlertTriangle,
  UserCheck,
  Search,
  Eye,
  Activity,
  ArrowDownUp,
} from 'lucide-react';
import { useAppStore, type PageRoute } from '@/lib/store';

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─── sidebar links ─── */
const complianceLinks: { route: PageRoute; label: string; icon: React.ElementType }[] = [
  { route: 'compliance-regulatory', label: 'Regulatory Positioning', icon: ShieldCheck },
  { route: 'compliance-aml-kyc', label: 'AML & KYC Framework', icon: FileText },
  { route: 'compliance-program', label: 'Compliance Program', icon: Building2 },
  { route: 'compliance-risk', label: 'Risk & Controls', icon: AlertTriangle },
  { route: 'compliance-data-protection', label: 'Data Protection (GDPR)', icon: Lock },
];

const legalLinks: { route: PageRoute; label: string }[] = [
  { route: 'terms-of-service', label: 'Terms of Service' },
  { route: 'privacy-policy', label: 'Privacy Policy' },
  { route: 'compliance-statement', label: 'Compliance Statement' },
];

/* ─── data ─── */
const kycCards = [
  {
    icon: UserCheck,
    title: 'Identity Verification',
    description: 'Identity verification is conducted by licensed PSPs and financial institutions',
  },
  {
    icon: ShieldCheck,
    title: 'No Independent Verification',
    description: 'NexFlowX does not independently verify end-users',
  },
  {
    icon: Building2,
    title: 'KYB Delegation',
    description: 'KYB (Know Your Business) procedures delegated to regulated partners',
  },
  {
    icon: Activity,
    title: 'Periodic Reviews',
    description: 'Periodic reviews managed by licensed entities',
  },
];

const riskItems = [
  { icon: Search, text: 'Transaction monitoring is performed by regulated partners' },
  { icon: Activity, text: 'NexFlowX maintains internal logs for operational oversight' },
  { icon: AlertTriangle, text: 'Suspicious activity reporting handled by regulated institutions' },
  { icon: Eye, text: 'Automated flagging systems via partner infrastructure' },
];

const riskTiers = [
  {
    label: 'Low Risk',
    color: '#22C55E',
    bg: 'rgba(5, 150, 105, 0.08)',
    border: 'rgba(5, 150, 105, 0.2)',
    monitoring: 'Standard monitoring',
    review: 'Annual review',
  },
  {
    label: 'Medium Risk',
    color: '#F59E0B',
    bg: 'rgba(217, 119, 6, 0.08)',
    border: 'rgba(217, 119, 6, 0.2)',
    monitoring: 'Enhanced monitoring',
    review: 'Semi-annual review',
  },
  {
    label: 'High Risk',
    color: '#EF4444',
    bg: 'rgba(220, 38, 38, 0.08)',
    border: 'rgba(220, 38, 38, 0.2)',
    monitoring: 'Intensive monitoring',
    review: 'Quarterly review',
  },
];

/* ═══════════════════════════════════════
   ComplianceAmlKycPage
   ═══════════════════════════════════════ */
export function ComplianceAmlKycPage() {
  const navigate = useAppStore((s) => s.navigate);
  const currentPage = useAppStore((s) => s.currentPage);

  const introRef = useRef<HTMLDivElement>(null);
  const kycRef = useRef<HTMLDivElement>(null);
  const monitoringRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: '-60px' });
  const kycInView = useInView(kycRef, { once: true, margin: '-60px' });
  const monitoringInView = useInView(monitoringRef, { once: true, margin: '-60px' });
  const tiersInView = useInView(tiersRef, { once: true, margin: '-60px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* ─── Main Content ─── */}
          <div className="min-w-0">
            {/* ─── Page Header ─── */}
            <header className="pt-24 pb-8">
              <nav aria-label="Breadcrumb" className="nx-breadcrumb mb-6">
                <ol className="inline-flex items-center gap-1.5 list-none">
                  <li>
                    <button
                      onClick={() => navigate('home')}
                      className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] rounded-sm"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate('compliance')}
                      className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] rounded-sm"
                    >
                      Compliance
                    </button>
                  </li>
                  <li>
                    <ChevronRight className="w-3.5 h-3.5 inline-block" style={{ color: 'var(--muted-foreground)' }} />
                  </li>
                  <li>
                    <span className="font-medium" style={{ color: 'var(--foreground)' }}>
                      AML & KYC Framework
                    </span>
                  </li>
                </ol>
              </nav>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                AML & KYC{' '}
                <span className="nx-gradient-text">Framework</span>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Risk-aware compliance through regulated financial partnerships.
              </motion.p>
            </header>

            <div className="nx-divider" />

            {/* ─── Intro ─── */}
            <section ref={introRef} className="py-10 sm:py-12" aria-labelledby="intro-heading">
              <motion.div variants={fadeUp} initial="hidden" animate={introInView ? 'visible' : 'hidden'} custom={0}>
                <div className="nx-compliance-banner">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#2F6BFF' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      NexFlowX adopts a risk-aware approach to compliance by working exclusively with regulated financial partners responsible for executing AML and KYC/KYB procedures.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="nx-divider" />

            {/* ─── KYC/KYB Model ─── */}
            <section ref={kycRef} className="py-10 sm:py-12" aria-labelledby="kyc-heading">
              <motion.h2
                id="kyc-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={kycInView ? 'visible' : 'hidden'}
                custom={0}
              >
                KYC/KYB Model
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {kycCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    className="nx-card p-5 sm:p-6"
                    variants={fadeUp}
                    initial="hidden"
                    animate={kycInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mb-4"
                      style={{
                        background: 'rgba(47, 107, 255, 0.08)',
                        border: '1px solid rgba(47, 107, 255, 0.18)',
                      }}
                    >
                      <card.icon className="w-5 h-5" style={{ color: '#2F6BFF' }} />
                    </div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Risk Monitoring ─── */}
            <section ref={monitoringRef} className="py-10 sm:py-12" aria-labelledby="monitoring-heading">
              <motion.h2
                id="monitoring-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={monitoringInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Risk Monitoring
              </motion.h2>

              <div className="space-y-4">
                {riskItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    animate={monitoringInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div className="nx-card p-4 sm:p-5 flex items-center gap-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(47, 107, 255, 0.08)',
                          border: '1px solid rgba(47, 107, 255, 0.18)',
                        }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: '#2F6BFF' }} />
                      </div>
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Risk-Based Approach ─── */}
            <section ref={tiersRef} className="py-10 sm:py-12 pb-20" aria-labelledby="tiers-heading">
              <motion.h2
                id="tiers-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={tiersInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Risk-Based Approach
              </motion.h2>

              <div className="space-y-4 sm:space-y-5">
                {riskTiers.map((tier, idx) => (
                  <motion.div
                    key={tier.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate={tiersInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div
                      className="rounded-xl p-5 sm:p-6 border"
                      style={{ background: tier.bg, borderColor: tier.border }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ background: tier.color }}
                          />
                          <h3
                            className="text-base font-semibold"
                            style={{ color: tier.color }}
                          >
                            {tier.label}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-3 sm:ml-auto">
                          <span className="nx-badge nx-badge-info">
                            <ArrowDownUp className="w-3 h-3" />
                            {tier.monitoring}
                          </span>
                          <span className="nx-badge nx-badge-info">
                            <Activity className="w-3 h-3" />
                            {tier.review}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* ─── Sidebar (Desktop Only) ─── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="nx-card p-5">
                <h3
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Compliance
                </h3>
                <nav aria-label="Compliance pages" className="space-y-1">
                  {complianceLinks.map((link) => {
                    const isActive = currentPage === link.route;
                    return (
                      <button
                        key={link.route}
                        onClick={() => navigate(link.route)}
                        className={`nx-sidebar-item w-full text-left ${isActive ? 'active' : ''}`}
                      >
                        <link.icon className="w-4 h-4 shrink-0" />
                        <span>{link.label}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="nx-divider my-4" />

                <h3
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Legal
                </h3>
                <nav aria-label="Legal pages" className="space-y-1">
                  {legalLinks.map((link) => (
                    <button
                      key={link.route}
                      onClick={() => navigate(link.route)}
                      className={`nx-sidebar-item w-full text-left ${currentPage === link.route ? 'active' : ''}`}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span>{link.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
