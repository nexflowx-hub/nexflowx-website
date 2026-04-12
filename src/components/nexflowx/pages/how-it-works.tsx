'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  ArrowRightLeft,
  Shield,
  Layers,
  Landmark,
  ChevronRight,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

/* ─── data ─── */
const flowSteps = [
  {
    step: 1,
    title: 'Merchant Integration',
    description: 'A merchant integrates NexFlowX API',
    Icon: Code2,
  },
  {
    step: 2,
    title: 'Payment Request',
    description:
      'Payment requests are routed to licensed Payment Service Providers (PSPs)',
    Icon: ArrowRightLeft,
  },
  {
    step: 3,
    title: 'Transaction Processing',
    description: 'Transactions are processed externally by regulated entities',
    Icon: Shield,
  },
  {
    step: 4,
    title: 'Orchestration',
    description: 'NexFlowX orchestrates communication and data flows',
    Icon: Layers,
  },
  {
    step: 5,
    title: 'Settlement',
    description: 'Settlement is handled by financial institutions',
    Icon: Landmark,
  },
];

const detailedSteps = [
  {
    step: 1,
    title: 'Merchant Integration',
    description:
      'Integrate once using our RESTful API. Support for multiple programming languages and SDKs.',
  },
  {
    step: 2,
    title: 'Smart Routing',
    description:
      'Payment requests are analyzed and routed to the optimal PSP based on geography, cost, and performance.',
  },
  {
    step: 3,
    title: 'Licensed Execution',
    description:
      'All transactions are executed by regulated Payment Service Providers. NexFlowX does not process payments.',
  },
  {
    step: 4,
    title: 'Real-Time Monitoring',
    description:
      'Track transaction status, settlement progress, and performance metrics through a unified dashboard.',
  },
  {
    step: 5,
    title: 'Automated Settlement',
    description:
      'Receive consolidated settlements across all connected PSPs and jurisdictions.',
  },
];

const disclaimers = [
  'NexFlowX does NOT hold or custody funds',
  'NexFlowX does NOT process or execute payments',
  'NexFlowX does NOT act as a Payment Service Provider (PSP), Electronic Money Institution (EMI), or bank',
];

/* ─── Arrow Connector (animated SVG) ─── */
function ArrowConnector({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  const isH = orientation === 'horizontal';

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{
        width: isH ? 48 : '100%',
        height: isH ? '100%' : 48,
      }}
    >
      <svg
        width={isH ? 48 : 24}
        height={isH ? 24 : 48}
        viewBox={isH ? '0 0 48 24' : '0 0 24 48'}
        fill="none"
        className="overflow-visible"
      >
        {/* Dashed line */}
        {isH ? (
          <>
            <motion.line
              x1="0"
              y1="12"
              x2="36"
              y2="12"
              stroke="#2F6BFF"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.polygon
              points="36,6 48,12 36,18"
              fill="#2F6BFF"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
            />
          </>
        ) : (
          <>
            <motion.line
              x1="12"
              y1="0"
              x2="12"
              y2="36"
              stroke="#2F6BFF"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.polygon
              points="6,36 12,48 18,36"
              fill="#2F6BFF"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
            />
          </>
        )}
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════
   HowItWorksPage
   ═══════════════════════════════════════ */
export function HowItWorksPage() {
  const navigate = useAppStore((s) => s.navigate);

  const flowRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const disclaimerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const flowInView = useInView(flowRef, { once: true, margin: '-60px' });
  const processInView = useInView(processRef, { once: true, margin: '-60px' });
  const disclaimerInView = useInView(disclaimerRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* ─── 1. Page Header ─── */}
        <header className="pt-24 pb-8">
          {/* Breadcrumb */}
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
                <ChevronRight className="w-3.5 h-3.5 inline-block text-muted-foreground/70" />
              </li>
              <li>
                <span className="font-medium text-foreground">
                  How It Works
                </span>
              </li>
            </ol>
          </nav>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            How NexFlowX{' '}
            <span className="nx-gradient-text">Works</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            NexFlowX provides an infrastructure layer that connects merchants to
            licensed financial institutions through a unified API.
          </motion.p>
        </header>

        {/* ─── 2. Visual Flow Diagram ─── */}
        <section
          ref={flowRef}
          className="py-12 sm:py-16"
          aria-labelledby="flow-diagram-heading"
        >
          <motion.h2
            id="flow-diagram-heading"
            className="text-2xl sm:text-3xl font-bold mb-10 text-foreground"
            variants={fadeUp}
            initial="hidden"
            animate={flowInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Integration Flow
          </motion.h2>

          {/* ── Desktop: horizontal row ── */}
          <div className="hidden lg:flex items-stretch gap-0">
            {flowSteps.map((s, idx) => (
              <div key={s.step} className="contents">
                {/* Step Card */}
                <motion.div
                  className="flex-1 nx-card p-6 flex flex-col items-center text-center relative group"
                  variants={fadeUp}
                  initial="hidden"
                  animate={flowInView ? 'visible' : 'hidden'}
                  custom={idx}
                >
                  {/* Top blue accent bar */}
                  <div
                    className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full"
                    style={{
                      background: '#2F6BFF',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '0';
                    }}
                  />

                  {/* Step number */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4 shrink-0"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      color: '#2F6BFF',
                      border: '1px solid rgba(47, 107, 255, 0.18)',
                    }}
                  >
                    {s.step}
                  </div>

                  {/* Icon */}
                  <s.Icon
                    className="w-8 h-8 mb-3 shrink-0 transition-colors duration-200 text-[#2F6BFF]"
                    strokeWidth={1.8}
                  />

                  {/* Title */}
                  <h3 className="text-sm font-semibold mb-2 leading-snug text-foreground">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </motion.div>

                {/* Arrow connector between steps */}
                {idx < flowSteps.length - 1 && (
                  <motion.div
                    className="flex items-center shrink-0"
                    variants={fadeIn}
                    initial="hidden"
                    animate={flowInView ? 'visible' : 'hidden'}
                    custom={idx + 0.5}
                  >
                    <ArrowConnector orientation="horizontal" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* ── Tablet: 3 + 2 grid ── */}
          <div className="hidden sm:grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {flowSteps.map((s, idx) => (
              <div key={s.step} className="contents">
                <motion.div
                  className="nx-card p-6 flex items-start gap-4 relative group"
                  variants={fadeUp}
                  initial="hidden"
                  animate={flowInView ? 'visible' : 'hidden'}
                  custom={idx}
                >
                  {/* Step number */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      color: '#2F6BFF',
                      border: '1px solid rgba(47, 107, 255, 0.18)',
                    }}
                  >
                    {s.step}
                  </div>

                  {/* Icon */}
                  <s.Icon
                    className="w-6 h-6 mt-0.5 shrink-0 text-[#2F6BFF]"
                    strokeWidth={1.8}
                  />

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold mb-1 text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* ── Mobile: vertical column with arrows ── */}
          <div className="flex flex-col gap-0 sm:hidden">
            {flowSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                animate={flowInView ? 'visible' : 'hidden'}
                custom={idx}
              >
                <div className="nx-card p-5 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      color: '#2F6BFF',
                      border: '1px solid rgba(47, 107, 255, 0.18)',
                    }}
                  >
                    {s.step}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <s.Icon
                        className="w-5 h-5 shrink-0 text-[#2F6BFF]"
                        strokeWidth={1.8}
                      />
                      <h3 className="text-sm font-semibold text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (vertical) between steps */}
                {idx < flowSteps.length - 1 && (
                  <motion.div
                    className="flex justify-center py-2"
                    variants={fadeIn}
                    initial="hidden"
                    animate={flowInView ? 'visible' : 'hidden'}
                    custom={idx + 0.5}
                  >
                    <ArrowConnector orientation="vertical" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="nx-divider" />

        {/* ─── 3. Detailed Steps (The Process) ─── */}
        <section
          ref={processRef}
          className="py-12 sm:py-16"
          aria-labelledby="process-heading"
        >
          <motion.h2
            id="process-heading"
            className="text-2xl sm:text-3xl font-bold mb-10 text-foreground"
            variants={fadeUp}
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
            custom={0}
          >
            The Process
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-[2px] rounded-full hidden sm:block"
              style={{
                background:
                  'linear-gradient(180deg, #2F6BFF, rgba(47, 107, 255, 0.18), transparent)',
              }}
            />

            <div className="space-y-8 sm:space-y-10">
              {detailedSteps.map((s, idx) => (
                <motion.div
                  key={s.step}
                  className="relative flex gap-5 sm:gap-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate={processInView ? 'visible' : 'hidden'}
                  custom={idx}
                >
                  {/* Timeline dot */}
                  <div className="shrink-0 flex items-start pt-1">
                    <div
                      className="relative w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
                      style={{
                        background: '#2F6BFF',
                        color: '#fff',
                        boxShadow: '0 0 0 4px rgba(47, 107, 255, 0.08)',
                      }}
                    >
                      {String(s.step).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="nx-divider" />

        {/* ─── 4. Critical Disclaimers ─── */}
        <section
          ref={disclaimerRef}
          className="py-12 sm:py-16"
          aria-labelledby="disclaimers-heading"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={disclaimerInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: '#F59E0B',
                  boxShadow: '0 0 12px rgba(245, 158, 11, 0.3)',
                }}
              >
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2
                id="disclaimers-heading"
                className="text-2xl sm:text-3xl font-bold text-foreground"
              >
                Important Clarifications
              </h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            {disclaimers.map((text, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                animate={disclaimerInView ? 'visible' : 'hidden'}
                custom={idx + 1}
              >
                <div className="nx-compliance-banner flex items-start gap-3" role="alert">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(239, 68, 68, 0.12)' }}
                  >
                    <span className="text-xs font-bold leading-none text-[#EF4444]">
                      !
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-relaxed text-[#EF4444]">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Final compliance statement */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={disclaimerInView ? 'visible' : 'hidden'}
              custom={disclaimers.length + 1}
              className="pt-4"
            >
              <div
                className="rounded-xl p-5 border"
                style={{
                  background: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <p className="text-sm leading-relaxed font-medium text-muted-foreground">
                  All financial transactions are performed exclusively by regulated
                  third-party institutions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="nx-divider" />

        {/* ─── 5. CTA Section ─── */}
        <section
          ref={ctaRef}
          className="py-16 sm:py-20"
          aria-labelledby="cta-heading"
        >
          <motion.div
            className="text-center max-w-xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0}
          >
            {/* Gradient accent line */}
            <div
              className="w-16 h-1 rounded-full mx-auto mb-8"
              style={{
                background: 'linear-gradient(90deg, #0A1F44, #2F6BFF)',
              }}
            />

            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl font-bold mb-3 text-foreground"
            >
              Ready to integrate?
            </h2>

            <p className="text-sm sm:text-base mb-8 leading-relaxed text-muted-foreground">
              Get started with NexFlowX and connect to licensed financial
              infrastructure in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => navigate('portal-dashboard')}
                className="nx-btn-primary px-6 py-3 rounded-xl text-sm font-semibold text-white gap-2 transition-all duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 8px 24px rgba(47, 107, 255, 0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    'none';
                }}
              >
                Request API Access
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => navigate('compliance-regulatory')}
                className="nx-btn-secondary px-6 py-3 rounded-xl text-sm font-semibold gap-2 transition-all duration-200 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Contact Partnerships
              </button>
            </div>
          </motion.div>
        </section>

        {/* Bottom spacer */}
        <div className="h-8" />
      </div>
    </div>
  );
}
