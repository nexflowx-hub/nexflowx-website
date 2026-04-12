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
  Server,
  Users,
  ShieldAlert,
  Scale,
  Search,
  Target,
  Shield,
  Eye,
  FileBarChart,
  ArrowRight,
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
type Severity = 'Low' | 'Medium' | 'High';

const riskCategories: {
  icon: React.ElementType;
  title: string;
  description: string;
  mitigation: string;
  severity: Severity;
}[] = [
  {
    icon: Server,
    title: 'Operational Risk',
    description: 'System failures, downtime, human error',
    mitigation: 'Redundancy, monitoring, incident response',
    severity: 'Medium',
  },
  {
    icon: Users,
    title: 'Third-Party Risk',
    description: 'Partner failures, regulatory changes',
    mitigation: 'Due diligence, diversification, SLAs',
    severity: 'Medium',
  },
  {
    icon: ShieldAlert,
    title: 'Data Security Risk',
    description: 'Breaches, unauthorized access',
    mitigation: 'Encryption, access controls, audits',
    severity: 'Low',
  },
  {
    icon: Scale,
    title: 'Legal and Regulatory Risk',
    description: 'Non-compliance, jurisdictional changes',
    mitigation: 'Legal counsel, monitoring, adaptation',
    severity: 'High',
  },
];

const frameworkSteps = [
  { icon: Search, label: 'Identify' },
  { icon: Target, label: 'Assess' },
  { icon: Shield, label: 'Mitigate' },
  { icon: Eye, label: 'Monitor' },
  { icon: FileBarChart, label: 'Report' },
];

function severityBadge(severity: Severity) {
  switch (severity) {
    case 'Low':
      return <span className="nx-badge nx-badge-success">Low</span>;
    case 'Medium':
      return <span className="nx-badge nx-badge-warning">Medium</span>;
    case 'High':
      return <span className="nx-badge nx-badge-error">High</span>;
  }
}

/* ═══════════════════════════════════════
   ComplianceRiskPage
   ═══════════════════════════════════════ */
export function ComplianceRiskPage() {
  const navigate = useAppStore((s) => s.navigate);
  const currentPage = useAppStore((s) => s.currentPage);

  const introRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: '-60px' });
  const categoriesInView = useInView(categoriesRef, { once: true, margin: '-60px' });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: '-60px' });

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
                      Risk & Controls
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
                Risk &{' '}
                <span className="nx-gradient-text">Controls</span>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Operational risk identification, management, and mitigation strategies.
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
                      NexFlowX identifies and manages operational risks associated with providing infrastructure services.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="nx-divider" />

            {/* ─── Risk Categories ─── */}
            <section ref={categoriesRef} className="py-10 sm:py-12" aria-labelledby="categories-heading">
              <motion.h2
                id="categories-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={categoriesInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Risk Categories
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {riskCategories.map((risk, idx) => (
                  <motion.div
                    key={idx}
                    className="nx-card p-5 sm:p-6"
                    variants={fadeUp}
                    initial="hidden"
                    animate={categoriesInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(47, 107, 255, 0.08)',
                          border: '1px solid rgba(47, 107, 255, 0.18)',
                        }}
                      >
                        <risk.icon className="w-5 h-5" style={{ color: '#2F6BFF' }} />
                      </div>
                      {severityBadge(risk.severity)}
                    </div>

                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {risk.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted-foreground)' }}>
                      {risk.description}
                    </p>

                    <div
                      className="rounded-lg p-3"
                      style={{ background: 'var(--muted)' }}
                    >
                      <p className="text-xs font-medium leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        <span style={{ color: 'var(--muted-foreground)' }}>Mitigation: </span>
                        {risk.mitigation}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Risk Management Framework ─── */}
            <section ref={frameworkRef} className="py-10 sm:py-12 pb-20" aria-labelledby="framework-heading">
              <motion.h2
                id="framework-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={frameworkInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Risk Management Framework
              </motion.h2>

              {/* Desktop: horizontal flow */}
              <div className="hidden sm:flex items-stretch gap-0">
                {frameworkSteps.map((step, idx) => (
                  <motion.div
                    key={step.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate={frameworkInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                    className="contents"
                  >
                    <div className="flex-1 nx-card p-5 flex flex-col items-center text-center">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                        style={{
                          background: 'rgba(47, 107, 255, 0.08)',
                          border: '1px solid rgba(47, 107, 255, 0.18)',
                          color: '#2F6BFF',
                        }}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {step.label}
                      </span>
                    </div>

                    {idx < frameworkSteps.length - 1 && (
                      <div className="flex items-center px-2">
                        <ArrowRight className="w-4 h-4" style={{ color: 'rgba(47, 107, 255, 0.18)' }} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile: vertical flow */}
              <div className="flex flex-col gap-3 sm:hidden">
                {frameworkSteps.map((step, idx) => (
                  <motion.div
                    key={step.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate={frameworkInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                    className="nx-card p-4 flex items-center gap-4"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(47, 107, 255, 0.08)',
                        border: '1px solid rgba(47, 107, 255, 0.18)',
                        color: '#2F6BFF',
                      }}
                    >
                      <step.icon className="w-4 h-4" />
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {step.label}
                    </span>
                    {idx < frameworkSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 ml-auto rotate-90" style={{ color: 'rgba(47, 107, 255, 0.18)' }} />
                    )}
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
