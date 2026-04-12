'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  Globe,
  Lock,
  Layers,
  Code2,
  ArrowRight,
  ShoppingBag,
  Store,
  Building2,
  BadgeCheck,
  Server,
  CreditCard,
  Wallet,
  ChevronRight,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={delay} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   1. HERO — Official gradient, clean, institutional
   ═══════════════════════════════════════════════ */
function HeroSection() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <section className="relative overflow-hidden">
      {/* Official gradient background */}
      <div className="absolute inset-0 nx-gradient opacity-[0.07]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #2F6BFF 0%, transparent 70%)' }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* TSP Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <span className="nx-badge nx-badge-info text-xs font-medium">
              <span className="nx-dot nx-dot-success" />
              Technology Service Provider
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="nx-gradient-text">Financial Infrastructure</span>
            <br />
            <span className="text-[var(--foreground)]">for Cross-Border Commerce</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg mb-3 text-[var(--muted-foreground)]"
          >
            API-first orchestration layer connecting global sellers to local payment systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm mb-10 max-w-xl mx-auto text-[var(--muted-foreground)] opacity-70"
          >
            NexFlowX provides API-driven infrastructure that enables global businesses to connect with
            local payment systems through regulated financial partners.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button onClick={() => navigate('portal-onboarding')} className="nx-btn-primary h-12 px-8 text-sm">
              Request Institutional Access
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => navigate('solutions')} className="nx-btn-secondary h-12 px-8 text-sm">
              Contact Partnerships
            </button>
          </motion.div>

          {/* Trust micro-line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex items-center justify-center gap-4 text-xs text-[var(--muted-foreground)] opacity-60"
          >
            <span className="nx-badge nx-badge-info text-[0.65rem] py-1 px-2">Infrastructure Layer</span>
            <span className="nx-badge nx-badge-info text-[0.65rem] py-1 px-2">No Custody</span>
            <span className="nx-badge nx-badge-info text-[0.65rem] py-1 px-2">API-First</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   2. TRUST STRIP
   ═══════════════════════════════════════════════ */
const trustItems = [
  { icon: ShieldCheck, label: 'SOC 2 Compliant' },
  { icon: Lock, label: 'GDPR Ready' },
  { icon: Code2, label: 'API-First' },
  { icon: Server, label: 'Enterprise Grade' },
];

function TrustStrip() {
  return (
    <FadeSection>
      <div className="nx-divider" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-2.5 text-[var(--muted-foreground)]">
                <Icon className="w-4 h-4 text-[#2F6BFF]" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="nx-divider" />
    </FadeSection>
  );
}

/* ═══════════════════════════════════════════════
   3. KEY FEATURES
   ═══════════════════════════════════════════════ */
const features = [
  {
    icon: Layers,
    title: 'Payment Orchestration',
    description: 'Route payments intelligently across multiple PSPs and acquirers. Optimize authorization rates and reduce costs through smart routing logic.',
  },
  {
    icon: Globe,
    title: 'Multi-Region Settlement',
    description: 'Consolidate settlements across jurisdictions. Manage multi-currency reconciliation with automated clearing and reporting.',
  },
  {
    icon: Code2,
    title: 'API Infrastructure',
    description: 'RESTful API designed for scalability. Integrate once, connect to multiple payment providers through a unified interface.',
  },
];

function KeyFeatures() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Orchestrate. Route. <span className="nx-gradient-text">Settle.</span>
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
            Infrastructure designed for the complexity of cross-border commerce.
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <FadeSection key={feat.title} delay={i * 0.08}>
                <div className="nx-card h-full p-6">
                  <div className="nx-icon-box mb-5">
                    <Icon className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{feat.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{feat.description}</p>
                </div>
              </FadeSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   4. FLOW DIAGRAM — Brand signature visual
   ═══════════════════════════════════════════════ */
const flowSteps = [
  { icon: ShoppingBag, label: 'Seller', sub: 'Merchant' },
  { icon: CreditCard, label: 'Checkout', sub: 'NexFlowX API' },
  { icon: BadgeCheck, label: 'Licensed PSP', sub: 'Regulated' },
  { icon: Layers, label: 'NexFlowX', sub: 'Orchestration' },
  { icon: Wallet, label: 'Settlement', sub: 'Financial Inst.' },
];

function FlowDiagram() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <section className="py-20 sm:py-24 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">See How It Works</h2>
          <p className="text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
            A streamlined flow from checkout to settlement, orchestrated through regulated partners.
          </p>
        </FadeSection>

        {/* Flow — vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === flowSteps.length - 1;
            return (
              <FadeSection key={step.label} delay={i * 0.06}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="nx-card flex flex-col items-center gap-2.5 p-5 w-full md:w-auto md:min-w-[130px] text-center">
                    <div className="nx-icon-box nx-icon-box-sm">
                      <Icon className="w-4 h-4 text-[#2F6BFF]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">{step.label}</span>
                      <span className="text-xs text-[var(--muted-foreground)]">{step.sub}</span>
                    </div>
                  </div>
                  {!isLast && (
                    <div className="flex items-center justify-center py-2 md:py-0 md:px-3 text-[var(--border)]">
                      <ChevronRight className="w-4 h-4 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              </FadeSection>
            );
          })}
        </div>

        <FadeSection className="text-center mt-10" delay={0.3}>
          <button
            onClick={() => navigate('how-it-works')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F6BFF] hover:text-[#00C2FF] transition-colors"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </FadeSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   5. COMPLIANCE CALLOUT
   ═══════════════════════════════════════════════ */
function ComplianceCallout() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="nx-compliance-banner max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="nx-icon-box shrink-0 mt-0.5">
                <Shield className="w-5 h-5 text-[#2F6BFF]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Regulatory Positioning</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-3 leading-relaxed">
                  NexFlowX operates strictly as a Technology Service Provider (TSP) and does not
                  provide regulated financial services, hold client funds, or execute payment
                  transactions.
                </p>
                <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">
                  All financial transactions are performed exclusively by regulated third-party
                  institutions.
                </p>
                <button
                  onClick={() => navigate('compliance-regulatory')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F6BFF] hover:text-[#00C2FF] transition-colors"
                >
                  View Compliance Framework <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   6. SOLUTIONS PREVIEW
   ═══════════════════════════════════════════════ */
const solutions = [
  { icon: ShoppingBag, title: 'Cross-Border Sellers', description: 'Access local payment methods without complex financial relationships in each jurisdiction.' },
  { icon: Store, title: 'Marketplaces', description: 'Unified payment infrastructure for your sellers, powered by licensed financial partners.' },
  { icon: Building2, title: 'PSPs & Fintechs', description: 'Extend capabilities through orchestration, routing, and integration infrastructure.' },
];

function SolutionsPreview() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <section className="py-20 sm:py-24 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Built for Scale</h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <FadeSection key={sol.title} delay={i * 0.08}>
                <div className="nx-card h-full p-6">
                  <div className="nx-icon-box mb-5">
                    <Icon className="w-5 h-5 text-[#2F6BFF]" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{sol.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{sol.description}</p>
                </div>
              </FadeSection>
            );
          })}
        </div>

        <FadeSection className="text-center" delay={0.24}>
          <button
            onClick={() => navigate('solutions')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F6BFF] hover:text-[#00C2FF] transition-colors"
          >
            Explore Solutions <ArrowRight className="w-4 h-4" />
          </button>
        </FadeSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   7. FINAL CTA
   ═══════════════════════════════════════════════ */
function FinalCTA() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Infrastructure for cross-border payments,{' '}
              <span className="nx-gradient-text">reliably.</span>
            </h2>
            <p className="text-sm mb-8 max-w-md mx-auto text-[var(--muted-foreground)]">
              Join the enterprises that trust NexFlowX for their cross-border payment
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => navigate('portal-onboarding')} className="nx-btn-primary h-12 px-8 text-sm">
                Request Institutional Access
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('solutions')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F6BFF] hover:text-[#00C2FF] transition-colors"
              >
                Contact Partnerships <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════ */
export function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <KeyFeatures />
      <FlowDiagram />
      <ComplianceCallout />
      <SolutionsPreview />
      <FinalCTA />
    </main>
  );
}
