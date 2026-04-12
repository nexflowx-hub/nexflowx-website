'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingBag,
  Store,
  Building2,
  CheckCircle2,
  CreditCard,
  Globe,
  ArrowRight,
  ChevronRight,
  Zap,
  ShieldCheck,
  Layers,
  Clock,
  XCircle,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

/* ─────────────────────────────────────────────
   Animation helpers
   ───────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionInView({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeChild({ children, className = '', index = 0 }: { children: React.ReactNode; className?: string; index?: number }) {
  return (
    <motion.div variants={fadeUp} custom={index} className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Feature bullet item
   ───────────────────────────────────────────── */

function FeatureBullet({ text, index = 0 }: { text: string; index?: number }) {
  return (
    <FadeChild index={index}>
      <li className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#22C55E]" />
        <span className="text-sm leading-relaxed text-muted-foreground">
          {text}
        </span>
      </li>
    </FadeChild>
  );
}

/* ─────────────────────────────────────────────
   Visual mockup: Checkout (Segment 1)
   ───────────────────────────────────────────── */

function CheckoutMockup() {
  const paymentMethods = [
    { label: 'Visa', icon: '💳' },
    { label: 'iDEAL', icon: '🏦' },
    { label: 'SEPA', icon: '💶' },
    { label: 'MB Way', icon: '📱' },
    { label: 'Pix', icon: '⚡' },
  ];

  return (
    <div className="nx-card p-5 sm:p-6">
      {/* Mock header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="nx-icon-box nx-icon-box-sm">
            <CreditCard className="w-4 h-4 text-[#2F6BFF]" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Checkout
          </span>
        </div>
        <span className="nx-badge nx-badge-success">
          <Zap className="w-3 h-3" />
          Live
        </span>
      </div>

      {/* Order summary */}
      <div
        className="rounded-lg p-4 mb-4"
        style={{
          background: 'var(--muted)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground/70">
            Order Total
          </span>
          <span className="text-lg font-bold text-foreground">
            € 1,249.00
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-[#2F6BFF]" />
          <span className="text-xs text-muted-foreground">
            GBP 1,060.42 · Auto-converted via NexFlowX
          </span>
        </div>
      </div>

      {/* Payment methods grid */}
      <p
        className="text-xs font-medium mb-2.5 text-muted-foreground/70 uppercase"
        style={{ letterSpacing: '0.05em' }}
      >
        Local Payment Methods
      </p>
      <div className="grid grid-cols-3 gap-2">
        {paymentMethods.map((pm) => (
          <div
            key={pm.label}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors text-foreground"
            style={{
              background: 'var(--muted)',
              border: '1px solid var(--border)',
            }}
          >
            <span>{pm.icon}</span>
            <span>{pm.label}</span>
          </div>
        ))}
      </div>

      {/* Footer status */}
      <div
        className="mt-4 flex items-center gap-2 rounded-lg px-3 py-2"
        style={{ background: 'rgba(47, 107, 255, 0.08)', border: '1px solid rgba(47, 107, 255, 0.18)' }}
      >
        <ShieldCheck className="w-4 h-4 shrink-0 text-[#2F6BFF]" />
        <span className="text-xs text-[#2F6BFF]">
          PCI DSS Compliant · 3D Secure 2.0
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Visual mockup: Marketplace (Segment 2)
   ───────────────────────────────────────────── */

function MarketplaceMockup() {
  const vendors = [
    { name: 'EuroGoods GmbH', status: 'active', volume: '€ 45,200', flag: '🇩🇪' },
    { name: 'LondonTech Ltd', status: 'active', volume: '£ 32,100', flag: '🇬🇧' },
    { name: 'ParisMode SAS', status: 'pending', volume: '€ 18,600', flag: '🇫🇷' },
    { name: 'LisbonWine Lda', status: 'active', volume: '€ 27,800', flag: '🇵🇹' },
  ];

  return (
    <div className="nx-card p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="nx-icon-box nx-icon-box-sm">
            <Store className="w-4 h-4 text-[#2F6BFF]" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Vendor Hub
          </span>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-md font-medium"
          style={{
            background: 'rgba(47, 107, 255, 0.08)',
            color: '#2F6BFF',
            border: '1px solid rgba(47, 107, 255, 0.18)',
          }}
        >
          4 vendors
        </span>
      </div>

      {/* Vendor list */}
      <div className="space-y-2">
        {vendors.map((v) => (
          <div
            key={v.name}
            className="flex items-center justify-between rounded-lg px-3 py-2.5"
            style={{
              background: 'var(--muted)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">{v.flag}</span>
              <div>
                <p className="text-sm font-medium leading-tight text-foreground">
                  {v.name}
                </p>
                <p className="text-xs mt-0.5 text-muted-foreground/70">
                  KYB Verified
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className="text-sm font-semibold text-foreground"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                {v.volume}
              </p>
              <span
                className={`nx-badge text-[10px] ${
                  v.status === 'active' ? 'nx-badge-success' : 'nx-badge-warning'
                }`}
              >
                {v.status === 'active' ? 'Active' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Split footer */}
      <div
        className="mt-3 flex items-center justify-between rounded-lg px-3 py-2"
        style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
      >
        <span className="text-xs text-muted-foreground/70">
          Commission: 2.5% auto-split
        </span>
        <Layers className="w-4 h-4 text-[#2F6BFF]" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Visual mockup: PSP / API (Segment 3)
   ───────────────────────────────────────────── */

function PSPMockup() {
  const endpoints = [
    { method: 'POST', path: '/v1/payments/charge', status: 200 },
    { method: 'GET', path: '/v1/settlements', status: 200 },
    { method: 'POST', path: '/v1/routing/optimize', status: 200 },
    { method: 'GET', path: '/v1/transactions', status: 200 },
  ];

  return (
    <div className="nx-card p-5 sm:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="nx-icon-box nx-icon-box-sm">
            <Building2 className="w-4 h-4 text-[#2F6BFF]" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            API Console
          </span>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-md font-medium"
          style={{
            background: 'rgba(34, 197, 94, 0.1)',
            color: '#22C55E',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}
        >
          All systems nominal
        </span>
      </div>

      {/* Endpoints list */}
      <div className="space-y-2">
        {endpoints.map((ep) => (
          <div
            key={ep.path}
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{
              background: 'var(--muted)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{
                  background: ep.method === 'POST' ? 'rgba(34, 197, 94, 0.12)' : 'rgba(47, 107, 255, 0.08)',
                  color: ep.method === 'POST' ? '#22C55E' : '#2F6BFF',
                  fontFamily: 'var(--font-space-mono)',
                }}
              >
                {ep.method}
              </span>
              <span
                className="text-xs text-muted-foreground"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                {ep.path}
              </span>
            </div>
            <span
              className="text-[10px] font-bold px-1.5 py-0.5 rounded"
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#22C55E',
                fontFamily: 'var(--font-space-mono)',
              }}
            >
              {ep.status}
            </span>
          </div>
        ))}
      </div>

      {/* Latency footer */}
      <div
        className="mt-3 flex items-center justify-between rounded-lg px-3 py-2"
        style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#22C55E]" />
          <span className="text-xs text-muted-foreground/70">
            Avg latency: <strong className="text-foreground" style={{ fontFamily: 'var(--font-space-mono)' }}>42ms</strong>
          </span>
        </div>
        <span className="text-xs text-muted-foreground/70">
          99.99% uptime
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Comparison Table
   ───────────────────────────────────────────── */

const comparisonRows = [
  {
    feature: 'Integration Points',
    traditional: 'Multiple per PSP',
    nexflowx: 'Single API',
  },
  {
    feature: 'Settlement',
    traditional: 'Manual per PSP',
    nexflowx: 'Consolidated',
  },
  {
    feature: 'Compliance',
    traditional: 'Per jurisdiction',
    nexflowx: 'Partner-based',
  },
  {
    feature: 'Time to Market',
    traditional: '6–12 months',
    nexflowx: '2–4 weeks',
  },
];

/* ─────────────────────────────────────────────
   Segment data
   ───────────────────────────────────────────── */

interface Segment {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  visual: React.FC;
  reversed: boolean;
}

const segments: Segment[] = [
  {
    icon: ShoppingBag,
    title: 'For Cross-Border Sellers',
    description:
      'NexFlowX enables international merchants to access local payment methods without establishing complex financial relationships in each jurisdiction.',
    features: [
      'Accept local payment methods across multiple regions',
      'Single API integration, multiple PSP connections',
      'Automated currency conversion and settlement reconciliation',
      'Real-time transaction monitoring and reporting',
    ],
    visual: CheckoutMockup,
    reversed: false,
  },
  {
    icon: Store,
    title: 'For Marketplaces',
    description:
      'Provide your sellers with unified payment infrastructure while relying on licensed financial partners for transaction execution.',
    features: [
      'Multi-vendor payment orchestration',
      'Automated split payments and commission management',
      'Unified seller onboarding through partner KYC/KYB',
      'Compliance-ready infrastructure for regulated operations',
    ],
    visual: MarketplaceMockup,
    reversed: true,
  },
  {
    icon: Building2,
    title: 'For PSPs & Fintech Platforms',
    description:
      'Extend your capabilities through orchestration, routing, and integration infrastructure without duplicating core systems.',
    features: [
      'White-label orchestration layer',
      'Additional acquiring and routing options',
      'Cross-border expansion support',
      'Shared compliance and monitoring framework',
    ],
    visual: PSPMockup,
    reversed: false,
  },
];

/* ═══════════════════════════════════════════
   Solutions Page
   ═══════════════════════════════════════════ */

export function SolutionsPage() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* ── Page Header ── */}
      <header className="pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <SectionInView>
            <FadeChild>
              {/* Breadcrumb */}
              <nav className="nx-breadcrumb mb-6" aria-label="Breadcrumb">
                <button
                  onClick={() => navigate('home')}
                  className="inline-flex items-center gap-1 text-sm transition-colors hover:underline text-muted-foreground"
                >
                  Home
                </button>
                <ChevronRight className="inline w-3 h-3 mx-1.5 text-muted-foreground/70" />
                <span className="text-foreground">Solutions</span>
              </nav>
            </FadeChild>

            <FadeChild index={1}>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
                style={{ letterSpacing: '-0.03em' }}
              >
                Solutions
              </h1>
            </FadeChild>

            <FadeChild index={2}>
              <p
                className="text-base sm:text-lg max-w-2xl text-muted-foreground"
                style={{ lineHeight: 1.7 }}
              >
                Purpose-built infrastructure for every segment of cross-border commerce.
              </p>
            </FadeChild>

            <FadeChild index={3}>
              <div className="nx-divider mt-8" />
            </FadeChild>
          </SectionInView>
        </div>
      </header>

      {/* ── Solution Segments ── */}
      <main>
        {segments.map((seg, segIdx) => {
          const Visual = seg.visual;
          return (
            <section
              key={seg.title}
              className="py-16 sm:py-24"
              style={{
                background:
                  segIdx % 2 === 1 ? 'var(--muted)' : 'transparent',
              }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <SectionInView>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                      seg.reversed ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Content column */}
                    <div
                      className={
                        seg.reversed ? 'lg:col-start-2' : ''
                      }
                    >
                      {/* Icon + label */}
                      <FadeChild>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="nx-icon-box">
                            <seg.icon className="w-5 h-5 text-[#2F6BFF]" />
                          </div>
                          <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-md"
                            style={{
                              background: 'rgba(47, 107, 255, 0.08)',
                              color: '#2F6BFF',
                              border: '1px solid rgba(47, 107, 255, 0.18)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              fontFamily: 'var(--font-space-mono)',
                            }}
                          >
                            Segment {segIdx + 1}
                          </span>
                        </div>
                      </FadeChild>

                      {/* Title */}
                      <FadeChild index={1}>
                        <h2
                          className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
                          style={{ letterSpacing: '-0.025em' }}
                        >
                          {seg.title}
                        </h2>
                      </FadeChild>

                      {/* Description */}
                      <FadeChild index={2}>
                        <p
                          className="text-sm sm:text-base mb-6 text-muted-foreground"
                          style={{ lineHeight: 1.75 }}
                        >
                          {seg.description}
                        </p>
                      </FadeChild>

                      {/* Feature bullets */}
                      <ul className="space-y-3">
                        {seg.features.map((feat, fi) => (
                          <FeatureBullet key={feat} text={feat} index={fi + 3} />
                        ))}
                      </ul>
                    </div>

                    {/* Visual column */}
                    <div
                      className={
                        seg.reversed ? 'lg:col-start-1' : ''
                      }
                    >
                      <FadeChild index={2}>
                        <Visual />
                      </FadeChild>
                    </div>
                  </div>
                </SectionInView>
              </div>
            </section>
          );
        })}

        {/* ── Section Divider ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="nx-divider" />
        </div>

        {/* ── Comparison Table ── */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionInView>
              {/* Title */}
              <FadeChild>
                <div className="text-center mb-12">
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-3 text-foreground"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    Why <span className="nx-gradient-text">NexFlowX</span>
                  </h2>
                  <p className="text-sm sm:text-base max-w-lg mx-auto text-muted-foreground">
                    A direct comparison between traditional approaches and the NexFlowX platform.
                  </p>
                </div>
              </FadeChild>

              {/* Table */}
              <FadeChild index={1}>
                <div className="nx-card overflow-hidden -mx-6 sm:mx-0">
                  <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <div className="min-w-[520px]">
                      {/* Table header */}
                      <div
                        className="grid grid-cols-3 text-left"
                        style={{
                          background: 'var(--muted)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <div className="px-4 sm:px-6 py-3.5">
                          <span
                            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                          >
                            Feature
                          </span>
                        </div>
                        <div className="px-4 sm:px-6 py-3.5">
                          <span
                            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                          >
                            Traditional Approach
                          </span>
                        </div>
                        <div className="px-4 sm:px-6 py-3.5">
                          <span
                            className="text-xs font-semibold uppercase tracking-wider text-[#2F6BFF]"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                          >
                            NexFlowX
                          </span>
                        </div>
                      </div>

                      {/* Table rows */}
                      {comparisonRows.map((row, i) => (
                        <div
                          key={row.feature}
                          className="grid grid-cols-3 text-left"
                          style={{
                            borderBottom:
                              i < comparisonRows.length - 1
                                ? '1px solid var(--border)'
                                : 'none',
                          }}
                        >
                          <div className="px-4 sm:px-6 py-4">
                            <span className="text-sm font-medium text-foreground">
                              {row.feature}
                            </span>
                          </div>
                          <div className="px-4 sm:px-6 py-4">
                            <div className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 shrink-0 text-[#EF4444]" />
                              <span className="text-sm text-muted-foreground">
                                {row.traditional}
                              </span>
                            </div>
                          </div>
                          <div className="px-4 sm:px-6 py-4">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#22C55E]" />
                              <span className="text-sm font-medium text-foreground">
                                {row.nexflowx}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeChild>
            </SectionInView>
          </div>
        </section>

        {/* ── Section Divider ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="nx-divider" />
        </div>

        {/* ── CTA Section ── */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionInView>
              <FadeChild>
                <div
                  className="relative rounded-2xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #0A1F44 0%, #2F6BFF 100%)',
                  }}
                >
                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  <div className="relative z-10">
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white"
                      style={{ letterSpacing: '-0.025em' }}
                    >
                      Find the right solution for your business
                    </h2>
                    <p
                      className="text-sm sm:text-base max-w-xl mx-auto mb-8"
                      style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}
                    >
                      Speak with our partnerships team to explore how NexFlowX can
                      accelerate your cross-border payment strategy.
                    </p>
                    <Button
                      size="lg"
                      onClick={() => navigate('portal-dashboard')}
                      className="h-12 px-8 rounded-xl text-base font-semibold gap-2 transition-transform hover:scale-[1.02]"
                      style={{
                        background: '#FFFFFF',
                        color: '#2F6BFF',
                      }}
                    >
                      Contact Partnerships
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </FadeChild>
            </SectionInView>
          </div>
        </section>
      </main>
    </div>
  );
}
