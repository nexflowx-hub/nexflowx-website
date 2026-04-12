'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Zap,
  Lock,
  Puzzle,
  Clipboard,
  Check,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Webhook,
  Server,
  ExternalLink,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

/* ─────────────────────────── helpers ─────────────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer"
      style={{
        color: copied ? '#22C55E' : 'var(--muted-foreground)',
        background: copied ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
        border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.25)' : 'transparent'}`,
      }}
      aria-label="Copy code"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Clipboard className="w-3.5 h-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

/* ────────────────────── fade-in on scroll ────────────────────── */

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── data ────────────────────────────── */

const architectureCards = [
  {
    icon: Globe,
    title: 'API-First Infrastructure',
    description: 'Every feature accessible through well-documented RESTful endpoints.',
  },
  {
    icon: Zap,
    title: 'Stateless Request Handling',
    description: 'Scalable architecture designed for high-throughput environments.',
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description: 'API key-based authentication with role-based access control.',
  },
  {
    icon: Puzzle,
    title: 'Modular Integration',
    description: 'Plug-and-play modules for different payment providers and use cases.',
  },
];

const webhookEvents = [
  { event: 'payment.completed', description: 'Payment successfully processed' },
  { event: 'payment.failed', description: 'Payment attempt failed' },
  { event: 'payment.refunded', description: 'Payment was refunded' },
  { event: 'settlement.completed', description: 'Settlement processed' },
];

const requestRaw = `POST /v1/payment/session
Content-Type: application/json
Authorization: Bearer nx_live_k3y...

{
  "amount": 12500,
  "currency": "EUR",
  "merchant_id": "mer_001",
  "customer": {
    "email": "buyer@example.com",
    "country": "PT"
  },
  "payment_methods": ["card", "mbway", "pix"],
  "metadata": {
    "order_id": "ORD-2026-001"
  }
}`;

const responseRaw = `{
  "id": "sess_a1b2c3d4",
  "status": "pending",
  "amount": 12500,
  "currency": "EUR",
  "created_at": "2026-01-15T10:30:00Z",
  "expires_at": "2026-01-15T11:00:00Z"
}`;

const webhookPayloadRaw = `{
  "event": "payment.completed",
  "data": {
    "session_id": "sess_a1b2c3d4",
    "amount": 12500,
    "status": "completed"
  },
  "timestamp": "2026-01-15T10:31:45Z"
}`;

/* ────────────────────── syntax highlighter ───────────────────── */

function highlightJSON(raw: string) {
  /* Simple token-level highlighter — escapes HTML first */
  const html = raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    /* strings (double-quoted) */
    .replace(
      /"([^"\\]*(\\.[^"\\]*)*)"/g,
      '<span class="str">"$1"</span>',
    )
    /* numbers (standalone) — but skip inside already-highlighted spans */
    .replace(
      /(?<![#\w])(\b\d+\b)(?![^<]*>)/g,
      '<span class="num">$1</span>',
    )
    /* HTTP method / header keywords (case-insensitive line-start) */
    .replace(
      /^(POST|GET|PUT|PATCH|DELETE|HEAD|OPTIONS)\b/gm,
      '<span class="kw">$1</span>',
    )
    /* property keys before colon — object keys like "amount": */
    .replace(
      /(<span class="str">"[^"]*"<\/span>)\s*:/g,
      '<span class="prop">$1</span>:',
    );

  return html;
}

/* ───────────────────── code block shell ──────────────────────── */

function CodeBlock({ title, raw, label }: { title: string; raw: string; label?: string }) {
  return (
    <div className="nx-code-block overflow-hidden">
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          borderBottom: '1px solid #1E293B',
          background: 'rgba(15,18,25,0.6)',
        }}
      >
        <div className="flex items-center gap-2">
          {label && (
            <span
              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
              style={{
                color: '#2F6BFF',
                background: 'rgba(47, 107, 255, 0.08)',
                border: '1px solid rgba(47, 107, 255, 0.18)',
                fontFamily: 'var(--font-space-mono)',
              }}
            >
              {label}
            </span>
          )}
          <span className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-space-mono)' }}>
            {title}
          </span>
        </div>
        <CopyButton text={raw} />
      </div>
      {/* Code body */}
      <pre className="px-5 py-4 overflow-x-auto">
        <code
          className="text-[13px] leading-relaxed"
          style={{ fontFamily: 'var(--font-space-mono)' }}
          dangerouslySetInnerHTML={{ __html: highlightJSON(raw) }}
        />
      </pre>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */

export function ApiTechnologyPage() {
  const navigate = useAppStore((s) => s.navigate);

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <main>
        {/* ─────────── 1. Page Header ─────────── */}
        <section className="pt-24 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="nx-breadcrumb mb-6">
                <ol className="flex items-center gap-1.5 flex-wrap">
                  <li>
                    <button
                      onClick={() => navigate('home')}
                      className="hover:underline cursor-pointer"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <ChevronRight className="w-3 h-3 inline" style={{ verticalAlign: 'middle' }} />
                  </li>
                  <li>
                    <span className="text-foreground">API &amp; Technology</span>
                  </li>
                </ol>
              </nav>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
                style={{ letterSpacing: '-0.03em' }}
              >
                API &amp;{' '}
                <span className="nx-gradient-text">Technology</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-muted-foreground">
                NexFlowX provides a RESTful API designed for scalable integration with
                payment providers and merchant platforms.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─────────── 2. Architecture ─────────── */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="nx-icon-box nx-icon-box-sm">
                  <Server className="w-4 h-4 text-[#2F6BFF]" />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Architecture
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {architectureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <FadeIn key={card.title} delay={i * 0.08}>
                    <div className="nx-card p-5 sm:p-6 h-full">
                      <div className="nx-icon-box mb-4">
                        <Icon className="w-5 h-5 text-[#2F6BFF]" />
                      </div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="nx-divider" />
        </div>

        {/* ─────────── 3. Quick Start / Code Examples ─────────── */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-2">
                <div className="nx-icon-box nx-icon-box-sm">
                  <BookOpen className="w-4 h-4 text-[#2F6BFF]" />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Quick Start
                </h2>
              </div>
              <p className="text-sm sm:text-base mb-8 ml-11 text-muted-foreground">
                Create a payment session in seconds. Send a POST request with your
                credentials and transaction details.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.05}>
                <CodeBlock title="Request" raw={requestRaw} label="POST" />
              </FadeIn>
              <FadeIn delay={0.15}>
                <CodeBlock title="Response" raw={responseRaw} label="200 OK" />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="nx-divider" />
        </div>

        {/* ─────────── 4. Webhooks ─────────── */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-2">
                <div className="nx-icon-box nx-icon-box-sm">
                  <Webhook className="w-4 h-4 text-[#2F6BFF]" />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Webhooks
                </h2>
              </div>
              <p className="text-sm sm:text-base mb-8 ml-11 text-muted-foreground">
                Receive real-time notifications for payment events.
              </p>
            </FadeIn>

            {/* Events Table */}
            <FadeIn delay={0.05}>
              <div
                className="nx-card overflow-hidden mb-8"
                style={{ borderRadius: 12 }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ fontFamily: 'var(--font-space-mono)' }}>
                    <thead>
                      <tr
                        style={{
                          borderBottom: '2px solid rgba(47, 107, 255, 0.18)',
                          background: 'rgba(47, 107, 255, 0.08)',
                        }}
                      >
                        <th
                          className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-[#2F6BFF]"
                        >
                          Event
                        </th>
                        <th
                          className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-[#2F6BFF]"
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {webhookEvents.map((row, i) => (
                        <tr
                          key={row.event}
                          style={{
                            borderBottom:
                              i < webhookEvents.length - 1
                                ? '1px solid var(--border)'
                                : 'none',
                          }}
                        >
                          <td
                            className="px-5 py-3.5 font-medium whitespace-nowrap text-[#2F6BFF]"
                            style={{ fontSize: '0.8125rem' }}
                          >
                            {row.event}
                          </td>
                          <td
                            className="px-5 py-3.5 text-muted-foreground"
                            style={{ fontSize: '0.875rem' }}
                          >
                            {row.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>

            {/* Webhook Payload Example */}
            <FadeIn delay={0.15}>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3 text-muted-foreground/70"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Example Payload
              </p>
              <CodeBlock title="webhook payload" raw={webhookPayloadRaw} label="POST" />
            </FadeIn>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="nx-divider" />
        </div>

        {/* ─────────── 5. Environments ─────────── */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="nx-icon-box nx-icon-box-sm">
                  <Globe className="w-4 h-4 text-[#2F6BFF]" />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Environments
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Sandbox */}
              <FadeIn delay={0.05}>
                <div className="nx-card p-6 sm:p-8 h-full relative overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="nx-badge nx-badge-info">
                      Testing
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-foreground">
                    Sandbox
                  </h3>
                  <p className="text-sm mb-5 text-muted-foreground">
                    Build and test your integration safely.
                  </p>

                  {/* Base URL */}
                  <div
                    className="rounded-lg px-4 py-2.5 mb-5 flex items-center gap-2"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      border: '1px solid rgba(47, 107, 255, 0.18)',
                      fontFamily: 'var(--font-space-mono)',
                      fontSize: '0.75rem',
                      color: '#2F6BFF',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    https://api.nexflowx.com/v1/sandbox
                  </div>

                  <ul className="space-y-2.5">
                    {[
                      'Test transactions with mock data',
                      'Full API coverage',
                      'No real funds involved',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#22C55E]" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Production */}
              <FadeIn delay={0.12}>
                <div className="nx-card p-6 sm:p-8 h-full relative overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="nx-badge nx-badge-success">
                      Production
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-foreground">
                    Production
                  </h3>
                  <p className="text-sm mb-5 text-muted-foreground">
                    Go live with real payment processing.
                  </p>

                  {/* Base URL */}
                  <div
                    className="rounded-lg px-4 py-2.5 mb-5 flex items-center gap-2"
                    style={{
                      background: 'rgba(47, 107, 255, 0.08)',
                      border: '1px solid rgba(47, 107, 255, 0.18)',
                      fontFamily: 'var(--font-space-mono)',
                      fontSize: '0.75rem',
                      color: '#2F6BFF',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    https://api.nexflowx.com/v1
                  </div>

                  <ul className="space-y-2.5">
                    {[
                      'Live transactions',
                      'Priority support',
                      'SLA guaranteed',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#22C55E]" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="nx-divider" />
        </div>

        {/* ─────────── 6. Compliance Note ─────────── */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="nx-compliance-banner">
                <p className="font-medium mb-1 text-foreground">
                  Regulatory Notice
                </p>
                <p className="text-muted-foreground">
                  The NexFlowX API facilitates communication between systems and does not
                  initiate or execute financial transactions. All payment processing is
                  performed by regulated third-party institutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─────────── 7. CTA ─────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="nx-card p-8 sm:p-12 text-center relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(47, 107, 255, 0.08), transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-3 text-foreground"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    Ready to integrate?
                  </h2>
                  <p className="text-sm sm:text-base mb-8 max-w-lg mx-auto text-muted-foreground">
                    Get API keys and start processing payments in minutes.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => navigate('portal-dashboard')}
                      className="nx-btn-primary px-6 py-3 rounded-xl text-sm font-semibold text-white gap-2 transition-all cursor-pointer"
                    >
                      Request API Access
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="#"
                      className="nx-btn-secondary px-6 py-3 rounded-xl text-sm font-medium gap-2 transition-colors text-[#2F6BFF]"
                    >
                      <BookOpen className="w-4 h-4" />
                      View Documentation
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
