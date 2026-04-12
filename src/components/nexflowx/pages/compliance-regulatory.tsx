'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Server,
  Building2,
  FileText,
  Lock,
  AlertTriangle,
  Landmark,
  Globe,
  MapPin,
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
const isItems = [
  'A Technology Service Provider (TSP)',
  'An Infrastructure Layer for cross-border commerce',
  'A software platform for payment orchestration',
  'A data and communication facilitator',
];

const isNotItems = [
  'A bank',
  'A Payment Service Provider (PSP)',
  'An Electronic Money Institution (EMI)',
  'A custodian of funds',
  'A financial intermediary',
];

/* ═══════════════════════════════════════
   ComplianceRegulatoryPage
   ═══════════════════════════════════════ */
export function ComplianceRegulatoryPage() {
  const navigate = useAppStore((s) => s.navigate);
  const currentPage = useAppStore((s) => s.currentPage);

  const introRef = useRef<HTMLDivElement>(null);
  const isRef = useRef<HTMLDivElement>(null);
  const notRef = useRef<HTMLDivElement>(null);
  const corporateRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: '-60px' });
  const isInView = useInView(isRef, { once: true, margin: '-60px' });
  const notInView = useInView(notRef, { once: true, margin: '-60px' });
  const corporateInView = useInView(corporateRef, { once: true, margin: '-60px' });
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
                      Regulatory Positioning
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
                Regulatory{' '}
                <span className="nx-gradient-text">Positioning</span>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Understanding NexFlowX&rsquo;s role as a Technology Service Provider in the financial ecosystem.
              </motion.p>
            </header>

            <div className="nx-divider" />

            {/* ─── Intro Statement ─── */}
            <section ref={introRef} className="py-10 sm:py-12" aria-labelledby="intro-heading">
              <motion.div variants={fadeUp} initial="hidden" animate={introInView ? 'visible' : 'hidden'} custom={0}>
                <div className="nx-compliance-banner">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#2F6BFF' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      NexFlowX operates exclusively as a Technology Service Provider (TSP). The platform provides software infrastructure that enables communication and orchestration between merchants and licensed financial institutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="nx-divider" />

            {/* ─── What NexFlowX IS ─── */}
            <section ref={isRef} className="py-10 sm:py-12" aria-labelledby="is-heading">
              <motion.div
                className="flex items-center gap-3 mb-8"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={0}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(5, 150, 105, 0.1)' }}
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: '#22C55E' }} />
                </div>
                <h2
                  id="is-heading"
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: 'var(--foreground)' }}
                >
                  What NexFlowX IS
                </h2>
              </motion.div>

              <div className="space-y-4">
                {isItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div className="nx-card p-4 sm:p-5 flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(5, 150, 105, 0.1)' }}
                      >
                        <CheckCircle2 className="w-4 h-4" style={{ color: '#22C55E' }} />
                      </div>
                      <p
                        className="text-sm sm:text-base font-medium leading-relaxed"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── What NexFlowX is NOT ─── */}
            <section ref={notRef} className="py-10 sm:py-12" aria-labelledby="not-heading">
              <motion.div
                className="flex items-center gap-3 mb-8"
                variants={fadeUp}
                initial="hidden"
                animate={notInView ? 'visible' : 'hidden'}
                custom={0}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(220, 38, 38, 0.1)' }}
                >
                  <XCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
                </div>
                <h2
                  id="not-heading"
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: 'var(--foreground)' }}
                >
                  What NexFlowX is NOT
                </h2>
              </motion.div>

              <div className="space-y-4">
                {isNotItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    animate={notInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div className="nx-card p-4 sm:p-5 flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(220, 38, 38, 0.1)' }}
                      >
                        <XCircle className="w-4 h-4" style={{ color: '#EF4444' }} />
                      </div>
                      <p
                        className="text-sm sm:text-base font-medium leading-relaxed"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Corporate Structure ─── */}
            <section ref={corporateRef} className="py-10 sm:py-12" aria-labelledby="corporate-heading">
              <motion.h2 id="corporate-heading" className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }} variants={fadeUp} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'} custom={0}>
                Corporate Structure
              </motion.h2>
              <motion.p className="text-sm mb-8 max-w-2xl" style={{ color: 'var(--muted-foreground)' }} variants={fadeUp} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'} custom={1}>
                The NexFlowX™ ecosystem is a global financial logistics infrastructure designed to bridge the gap between complex banking rails and modern digital business. Our structure ensures that technology remains global while compliance remains local.
              </motion.p>

              {/* Global IP */}
              <motion.div className="nx-card p-5 sm:p-6 mb-4" style={{ borderLeft: '3px solid #2F6BFF' }} variants={fadeUp} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'} custom={2}>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-[#2F6BFF]" />
                  <span className="nx-badge nx-badge-info text-xs">Global</span>
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>Global Intellectual Property & Governance</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#2F6BFF' }}>IAHUB360 LTD</p>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Company No. 16626733</p>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Registered Office: 124-128 City Road, London, England, EC1V 2NX</p>
              </motion.div>

              {/* Regional nodes */}
              <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--foreground)' }}>Regional Operational Nodes</h3>
              <div className="space-y-3">
                {/* France */}
                <motion.div className="nx-card p-4 sm:p-5 flex items-start gap-3" variants={fadeUp} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'} custom={3}>
                  <div className="nx-icon-box nx-icon-box-sm"><MapPin className="w-4 h-4 text-[#2F6BFF]" /></div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>France</p>
                    <p className="text-sm" style={{ color: '#2F6BFF' }}>NeXTech France</p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>SIRET 79015500600014</p>
                  </div>
                </motion.div>
                {/* Portugal */}
                <motion.div className="nx-card p-4 sm:p-5 flex items-start gap-3" variants={fadeUp} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'} custom={4}>
                  <div className="nx-icon-box nx-icon-box-sm"><MapPin className="w-4 h-4 text-[#2F6BFF]" /></div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Portugal</p>
                    <p className="text-sm" style={{ color: '#2F6BFF' }}>NeXTech Portugal <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>(NIF 219458090)</span></p>
                    <p className="text-sm" style={{ color: '#2F6BFF' }}>NeX-Systems <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>(NIF 312668201)</span></p>
                  </div>
                </motion.div>
                {/* Brazil */}
                <motion.div className="nx-card p-4 sm:p-5 flex items-start gap-3" variants={fadeUp} initial="hidden" animate={corporateInView ? 'visible' : 'hidden'} custom={5}>
                  <div className="nx-icon-box nx-icon-box-sm"><MapPin className="w-4 h-4 text-[#2F6BFF]" /></div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Brazil</p>
                    <p className="text-sm" style={{ color: '#2F6BFF' }}>NexTrustX Brasil</p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>CNPJ 65.764.339/0001-00</p>
                  </div>
                </motion.div>
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Regulatory Statement ─── */}
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
                      Regulatory Responsibility
                    </h2>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      All regulated financial activities are performed by third-party institutions duly authorized under applicable laws and regulations. NexFlowX does not hold, process, or custody any funds.
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
