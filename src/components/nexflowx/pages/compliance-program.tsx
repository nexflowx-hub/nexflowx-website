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
  ClipboardList,
  KeyRound,
  BellRing,
  Handshake,
  Users,
  UserCog,
  Server,
  Landmark,
  CheckCircle2,
  Brain,
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
const pillars = [
  {
    icon: ClipboardList,
    title: 'Internal Audit Logs',
    description: 'Comprehensive logging of all system activities and access events',
  },
  {
    icon: KeyRound,
    title: 'Access Control',
    description: 'Role-based access with multi-factor authentication',
  },
  {
    icon: BellRing,
    title: 'Incident Monitoring',
    description: 'Real-time alerting and escalation procedures',
  },
  {
    icon: Handshake,
    title: 'Partner Due Diligence',
    description: 'Regular assessment of partner regulatory compliance',
  },
];

const orgLevels = [
  {
    level: 1,
    title: 'Board of Directors',
    role: 'Oversight',
    icon: Users,
    color: '#2F6BFF',
  },
  {
    level: 2,
    title: 'Compliance Officer',
    role: 'Management',
    icon: UserCog,
    color: '#5B8AFF',
  },
  {
    level: 3,
    title: 'Operational Teams',
    role: 'Execution',
    icon: Server,
    color: '#0A1F44',
  },
];

/* ═══════════════════════════════════════
   ComplianceProgramPage
   ═══════════════════════════════════════ */
export function ComplianceProgramPage() {
  const navigate = useAppStore((s) => s.navigate);
  const currentPage = useAppStore((s) => s.currentPage);

  const introRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const orgRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: '-60px' });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-60px' });
  const orgInView = useInView(orgRef, { once: true, margin: '-60px' });
  const statementInView = useInView(statementRef, { once: true, margin: '-60px' });

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
                      Compliance Program
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
                Compliance{' '}
                <span className="nx-gradient-text">Program</span>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Internal controls and governance ensuring operational integrity.
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
                      NexFlowX operates strictly as a Non-Custodial Technology Service Provider (TSP). Our compliance framework ensures operational integrity while maintaining clear separation from financial activities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="nx-divider" />

            {/* ─── Four Pillars ─── */}
            <section ref={pillarsRef} className="py-10 sm:py-12" aria-labelledby="pillars-heading">
              <motion.h2
                id="pillars-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={pillarsInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Program Pillars
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    className="nx-card p-5 sm:p-6"
                    variants={fadeUp}
                    initial="hidden"
                    animate={pillarsInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mb-4"
                      style={{
                        background: 'rgba(47, 107, 255, 0.08)',
                        border: '1px solid rgba(47, 107, 255, 0.18)',
                      }}
                    >
                      <pillar.icon className="w-5 h-5" style={{ color: '#2F6BFF' }} />
                    </div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Zero-Custody Mandate ─── */}
            <section className="py-10 sm:py-12" aria-labelledby="custody-heading">
              <h2 id="custody-heading" className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Zero-Custody Mandate
              </h2>
              <div className="nx-compliance-banner mb-4">
                <p className="text-sm leading-relaxed">
                  NexFlowX provides the orchestration layer (API) and technical routing for global payments. We do not hold, settle, or process third-party funds. All financial settlements are executed directly by our regulated financial partners (Licensed PSPs/Banks).
                </p>
              </div>
            </section>

            {/* ─── Technical KYB ─── */}
            <section className="py-10 sm:py-12" aria-labelledby="kyb-heading">
              <h2 id="kyb-heading" className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Technical KYB (Know Your Business)
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--muted-foreground)' }}>
                While we are not a financial institution, we maintain a high-integrity network. Every merchant accessing our infrastructure undergoes a technical KYB audit, including:
              </p>
              <div className="space-y-3">
                <div className="nx-card p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--foreground)' }}>UBO (Ultimate Beneficial Owner) verification</span>
                </div>
                <div className="nx-card p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--foreground)' }}>Business activity legitimacy checks</span>
                </div>
                <div className="nx-card p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--foreground)' }}>Prohibited industry screening</span>
                </div>
              </div>
            </section>

            {/* ─── Anti-Fraud & Monitoring ─── */}
            <section className="py-10 sm:py-12" aria-labelledby="antifraud-heading">
              <h2 id="antifraud-heading" className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Anti-Fraud & Monitoring
              </h2>
              <div className="nx-card p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="nx-icon-box nx-icon-box-sm"><Brain className="w-4 h-4 text-[#2F6BFF]" /></div>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>NeX IA — Proprietary AI Layer</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  Our proprietary AI layer (NeX IA) monitors metadata and transaction velocity to detect technical anomalies and prevent network abuse, providing an extra layer of security to our banking partners.
                </p>
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Reporting Structure (Org Chart) ─── */}
            <section ref={orgRef} className="py-10 sm:py-12" aria-labelledby="org-heading">
              <motion.h2
                id="org-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={orgInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Reporting Structure
              </motion.h2>

              <div className="flex flex-col items-center gap-0">
                {orgLevels.map((level, idx) => (
                  <motion.div
                    key={level.level}
                    variants={fadeUp}
                    initial="hidden"
                    animate={orgInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                    className="w-full flex flex-col items-center"
                  >
                    <div
                      className="w-full max-w-sm nx-card p-5 sm:p-6 flex items-center gap-4"
                      style={{
                        borderLeft: `3px solid ${level.color}`,
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(47, 107, 255, 0.08)',
                          border: '1px solid rgba(47, 107, 255, 0.18)',
                        }}
                      >
                        <level.icon className="w-5 h-5" style={{ color: level.color }} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="nx-badge nx-badge-info text-[10px] px-2 py-0.5"
                          >
                            Level {level.level}
                          </span>
                          <span
                            className="text-xs font-medium uppercase tracking-wider"
                            style={{ color: 'var(--muted-foreground)' }}
                          >
                            {level.role}
                          </span>
                        </div>
                        <h3
                          className="text-sm font-semibold"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {level.title}
                        </h3>
                      </div>
                    </div>

                    {/* Connector line */}
                    {idx < orgLevels.length - 1 && (
                      <div className="w-[2px] h-6" style={{ background: 'rgba(47, 107, 255, 0.18)' }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Statement ─── */}
            <section ref={statementRef} className="py-10 sm:py-12 pb-20" aria-labelledby="statement-heading">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={statementInView ? 'visible' : 'hidden'}
                custom={0}
              >
                <div className="flex items-start gap-4 nx-card p-6 sm:p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      border: '1px solid rgba(47, 107, 255, 0.18)',
                    }}
                  >
                    <Landmark className="w-6 h-6" style={{ color: '#2F6BFF' }} />
                  </div>
                  <div>
                    <h2
                      id="statement-heading"
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Financial Compliance Responsibility
                    </h2>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      Compliance responsibilities related to financial transactions remain with regulated service providers. NexFlowX maintains internal operational controls only.
                    </p>
                  </div>
                </div>
              </motion.div>
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
