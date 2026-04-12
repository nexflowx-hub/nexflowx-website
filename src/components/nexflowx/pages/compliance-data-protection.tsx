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
  Database,
  KeyRound,
  Minimize2,
  ShieldAlert,
  Trash2,
  Eye,
  PenLine,
  Eraser,
  Download,
  Ban,
  Server,
  Mail,
  ArrowRightLeft,
  Store,
  Users,
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
const protectionMeasures = [
  {
    icon: Lock,
    title: 'Encryption',
    description: 'Encryption in transit and at rest (TLS 1.3, AES-256)',
  },
  {
    icon: KeyRound,
    title: 'Access Control',
    description: 'Access control policies (RBAC, MFA)',
  },
  {
    icon: Minimize2,
    title: 'Data Minimization',
    description: 'Data minimization principles',
  },
  {
    icon: ShieldAlert,
    title: 'Security Assessments',
    description: 'Regular security assessments and penetration testing',
  },
  {
    icon: Trash2,
    title: 'Retention & Deletion',
    description: 'Secure data retention and deletion policies',
  },
];

const userRights = [
  { icon: Eye, label: 'Right of access', description: 'You can request a copy of your personal data' },
  { icon: PenLine, label: 'Right to rectification', description: 'You can request correction of inaccurate data' },
  { icon: Eraser, label: 'Right to erasure', description: 'You can request deletion of your personal data' },
  { icon: Download, label: 'Right to data portability', description: 'You can receive your data in a structured format' },
  { icon: Ban, label: 'Right to object', description: 'You can object to processing of your personal data' },
];

const processingActivities = [
  { icon: Server, text: 'Technical data collection for service delivery' },
  { icon: Mail, text: 'Contact information for communication' },
  { icon: ArrowRightLeft, text: 'Transaction data for operational purposes' },
  { icon: Store, text: 'No sale of personal data' },
  { icon: Users, text: 'Data shared only with necessary partners' },
];

/* ═══════════════════════════════════════
   ComplianceDataProtectionPage
   ═══════════════════════════════════════ */
export function ComplianceDataProtectionPage() {
  const navigate = useAppStore((s) => s.navigate);
  const currentPage = useAppStore((s) => s.currentPage);

  const introRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const measuresRef = useRef<HTMLDivElement>(null);
  const rightsRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: '-60px' });
  const rolesInView = useInView(rolesRef, { once: true, margin: '-60px' });
  const measuresInView = useInView(measuresRef, { once: true, margin: '-60px' });
  const rightsInView = useInView(rightsRef, { once: true, margin: '-60px' });
  const activitiesInView = useInView(activitiesRef, { once: true, margin: '-60px' });

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
                      Data Protection (GDPR)
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
                Data Protection &{' '}
                <span className="nx-gradient-text">Privacy</span>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                GDPR-compliant data handling and privacy practices.
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
                      NexFlowX is committed to protecting personal data in accordance with applicable data protection laws, including GDPR.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            <div className="nx-divider" />

            {/* ─── Roles and Responsibilities ─── */}
            <section ref={rolesRef} className="py-10 sm:py-12" aria-labelledby="roles-heading">
              <motion.h2
                id="roles-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={rolesInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Roles and Responsibilities
              </motion.h2>

              <motion.div
                className="nx-card overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                animate={rolesInView ? 'visible' : 'hidden'}
                custom={1}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: 'var(--muted)' }}>
                        <th
                          className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          Entity
                        </th>
                        <th
                          className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          GDPR Role
                        </th>
                        <th
                          className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="px-5 py-4 font-medium" style={{ color: 'var(--foreground)' }}>
                          Operators / Clients
                        </td>
                        <td className="px-5 py-4">
                          <span className="nx-badge nx-badge-info">Data Controller</span>
                        </td>
                        <td className="px-5 py-4 hidden sm:table-cell" style={{ color: 'var(--muted-foreground)' }}>
                          Determines purposes and means of processing personal data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium" style={{ color: 'var(--foreground)' }}>
                          NexFlowX
                        </td>
                        <td className="px-5 py-4">
                          <span className="nx-badge nx-badge-success">Data Processor</span>
                        </td>
                        <td className="px-5 py-4 hidden sm:table-cell" style={{ color: 'var(--muted-foreground)' }}>
                          Processes personal data on behalf of the controller
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            <div className="nx-divider" />

            {/* ─── Data Protection Measures ─── */}
            <section ref={measuresRef} className="py-10 sm:py-12" aria-labelledby="measures-heading">
              <motion.h2
                id="measures-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={measuresInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Data Protection Measures
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {protectionMeasures.map((measure, idx) => (
                  <motion.div
                    key={idx}
                    className="nx-card p-5 sm:p-6"
                    variants={fadeUp}
                    initial="hidden"
                    animate={measuresInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mb-4"
                      style={{
                        background: 'rgba(47, 107, 255, 0.08)',
                        border: '1px solid rgba(47, 107, 255, 0.18)',
                      }}
                    >
                      <measure.icon className="w-5 h-5" style={{ color: '#2F6BFF' }} />
                    </div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {measure.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {measure.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── User Rights ─── */}
            <section ref={rightsRef} className="py-10 sm:py-12" aria-labelledby="rights-heading">
              <motion.h2
                id="rights-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={rightsInView ? 'visible' : 'hidden'}
                custom={0}
              >
                User Rights (GDPR)
              </motion.h2>

              <div className="space-y-4">
                {userRights.map((right, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    animate={rightsInView ? 'visible' : 'hidden'}
                    custom={idx + 1}
                  >
                    <div className="nx-card p-4 sm:p-5 flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: 'rgba(47, 107, 255, 0.08)',
                          border: '1px solid rgba(47, 107, 255, 0.18)',
                        }}
                      >
                        <right.icon className="w-4 h-4" style={{ color: '#2F6BFF' }} />
                      </div>
                      <div>
                        <h3
                          className="text-sm font-semibold mb-1"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {right.label}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <div className="nx-divider" />

            {/* ─── Data Processing Activities ─── */}
            <section ref={activitiesRef} className="py-10 sm:py-12 pb-20" aria-labelledby="activities-heading">
              <motion.h2
                id="activities-heading"
                className="text-xl sm:text-2xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
                variants={fadeUp}
                initial="hidden"
                animate={activitiesInView ? 'visible' : 'hidden'}
                custom={0}
              >
                Data Processing Activities
              </motion.h2>

              <div className="space-y-3">
                {processingActivities.map((activity, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    animate={activitiesInView ? 'visible' : 'hidden'}
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
                        <activity.icon className="w-4 h-4" style={{ color: '#2F6BFF' }} />
                      </div>
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {activity.text}
                      </p>
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
