'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Check, Activity, Copy, CheckCheck } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const securityItems = [
  'AES-256 Encryption at rest and in transit',
  'AML/KYC compliant monitoring flows',
  'Real-time fraud detection (NeX IA)',
  'SOC 2 Type II certified infrastructure',
];

const codeString = `POST /v1/settlement/route
Authorization: Bearer nx_live_k8x...
Content-Type: application/json

{
  "amount": 24990,
  "currency": "GBP",
  "destination": "GB29NWBK60161331926819",
  "routing": "dynamic",
  "priority": "cost_optimized"
}

\u2192 200 OK {
    "route": "stripe_uk",
    "latency_ms": 23,
    "cost_gbp": 0.12,
    "settlement": "2026-01-15T14:30:00Z"
  }`;

export function DeveloperHub() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scaleMetrics = [
    { value: '10,000+', label: t.devhub.tps, sub: t.devhub.tpsSub },
    { value: '<50ms', label: t.devhub.latency, sub: t.devhub.latencySub },
    { value: '99.99%', label: t.devhub.sla, sub: t.devhub.slaSub },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#08090b]" ref={ref}>
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00FF66] mb-4" style={{ fontFamily: 'var(--nx-font-mono)' }}>
            {t.devhub.tag}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}
          >
            {t.devhub.title}
          </h2>
          <p className="text-[#C5C6C7] max-w-xl mx-auto" style={{ fontFamily: 'var(--nx-font-body)' }}>
            {t.devhub.sub}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Code Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex-1 rounded-xl border border-[#333F4D] bg-[#0a0b0e] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)]">
              {/* Code header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#333F4D] bg-[#151A22]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-xs text-[#C5C6C7]/50" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                    terminal
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-[#C5C6C7] hover:text-[#00FF66] hover:bg-white/5 transition-colors"
                >
                  {copied ? <CheckCheck className="w-3 h-3 text-[#00FF66]" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              {/* Code content */}
              <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                <code>
                  <span className="text-[#C5C6C7]">{'POST '}</span>
                  <span className="text-[#00FF66]">{'/v1/settlement/route'}</span>
                  {'\n'}
                  <span className="text-[#5C6370]">{'Authorization: Bearer nx_live_k8x...'}</span>
                  {'\n'}
                  <span className="text-[#5C6370]">{'Content-Type: application/json'}</span>
                  {'\n\n'}
                  <span className="text-[#C5C6C7]">{'{'}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'  "amount"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#D19A66]">24990</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'  "currency"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#98C379]">{'"GBP"'}</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'  "destination"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#98C379]">{'"GB29NWBK60161331926819"'}</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'  "routing"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#98C379]">{'"dynamic"'}</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'  "priority"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#98C379]">{'"cost_optimized"'}</span>
                  {'\n'}
                  <span className="text-[#C5C6C7]">{'}'}</span>
                  {'\n\n'}
                  <span className="text-[#00FF66]">{'→ 200 OK {'}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'    "route"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#98C379]">{'"stripe_uk"'}</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'    "latency_ms"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#D19A66]">23</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'    "cost_gbp"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#D19A66]">0.12</span>
                  <span className="text-[#ABB2BF]">{','}</span>
                  {'\n'}
                  <span className="text-[#E5C07B]">{'    "settlement"'}</span>
                  <span className="text-[#ABB2BF]">{': '}</span>
                  <span className="text-[#98C379]">{'"2026-01-15T14:30:00Z"'}</span>
                  {'\n'}
                  <span className="text-[#00FF66]">{'}'}</span>
                </code>
              </pre>
            </div>
          </motion.div>

          {/* RIGHT: Security + Scalability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Security */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#333F4D] bg-[#151A22]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#00FF66]" />
                </div>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--nx-font-heading)' }}
                >
                  {t.devhub.securityTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {securityItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-[#00FF66] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-body)' }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Scalability */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#333F4D] bg-[#151A22]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#00FF66]" />
                </div>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--nx-font-heading)' }}
                >
                  {t.devhub.scaleTitle}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {scaleMetrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center p-3 rounded-xl bg-[#0B0C10] border border-[#333F4D]"
                  >
                    <div
                      className="text-xl sm:text-2xl font-bold text-[#00FF66] mb-1"
                      style={{ fontFamily: 'var(--nx-font-heading)' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs text-white font-semibold" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                      {m.label}
                    </div>
                    <div className="text-[10px] text-[#C5C6C7]/60 mt-0.5" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                      {m.sub}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
