'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Globe, Shield, Terminal, Clock, AlertTriangle, Building2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const roadmapItems = [
  { phase: '01', title: 'Foundation', status: 'complete', statusLabel: 'COMPLETE', desc: 'AWS Docker Swarm, Nginx Proxy Manager, NeX IA' },
  { phase: '02', title: 'Connectivity', status: 'active', statusLabel: 'ACTIVE', desc: 'Airwallex/Stripe API integration, NexTrustX panel' },
  { phase: '03', title: 'Scale & AI', status: 'future', statusLabel: 'Q3 2026', desc: 'Predictive liquidity models, LATAM CNPJ expansion' },
];

export function DossierContent({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const d = t.dossier as Record<string, string>;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const statusStyles: Record<string, string> = {
    complete: 'bg-[#00FF66] text-[#0B0C10] shadow-[0_0_8px_#00FF66]',
    active: 'bg-[#FF9F0A] text-[#0B0C10] animate-pulse shadow-[0_0_8px_#FF9F0A]',
    future: 'bg-transparent border-2 border-dashed border-[#333F4D] text-[#666]',
  };

  return (
    <div className="px-6 sm:px-10 py-16" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5C6C7]/60 mb-6" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              {d.confidential}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}>
              {d.title}
            </h1>
            <p className="text-sm text-[#00FF66] mb-8" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              {d.subtitle}
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#00FF66]/40 to-transparent mx-auto mb-12" />
          </div>
        </motion.div>

        {/* Section 1: Architecture Overview */}
        <motion.section initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }} className="mb-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            <span className="text-xs font-bold text-[#00FF66] px-2.5 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              01
            </span>
            {d.s1Title}
          </h2>
          <p className="text-[#C5C6C7] leading-relaxed mb-8" style={{ fontFamily: 'var(--nx-font-body)', fontSize: '15px' }}>
            {d.s1Content}
          </p>

          {/* 1.1 London-Core */}
          <div className="ml-6 pl-6 border-l-2 border-[#00FF66]/30 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--nx-font-heading)' }}>
              <Server className="w-4 h-4 text-[#00FF66]" />
              {d.s1CoreTitle}
            </h3>
            <p className="text-[#C5C6C7] mb-4" style={{ fontFamily: 'var(--nx-font-body)', fontSize: '14px' }}>
              {d.s1CoreContent}
            </p>
            <ul className="space-y-3">
              {(d.s1CoreBullets as unknown[]).map((item: unknown, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 4px rgba(0,255,102,0.4)' }} />
                  <span className="text-[#C5C6C7] leading-relaxed">{item as string}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-16" />

        {/* Section 2: Tech Stack */}
        <motion.section initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="mb-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            <span className="text-xs font-bold text-[#00FF66] px-2.5 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              02
            </span>
            {d.s2Title}
          </h2>
          <p className="text-[#C5C6C7] leading-relaxed mb-8" style={{ fontFamily: 'var(--nx-font-body)', fontSize: '15px' }}>
            {d.s2Content}
          </p>
          <div className="ml-6 pl-6 border-l-2 border-[#00FF66]/30">
            <ul className="space-y-3">
              {(d.s2Items as unknown[]).map((item: unknown, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 4px rgba(0,255,102,0.4)' }} />
                  <span className="text-[#C5C6C7] leading-relaxed">{item as string}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-16" />

        {/* Section 3: API Documentation */}
        <motion.section initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            <span className="text-xs font-bold text-[#00FF66] px-2.5 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              03
            </span>
            {d.s3Title}
          </h2>

          <div className="ml-6 space-y-6">
            <div>
              <p className="text-xs text-[#00FF66] uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                {d.s3Auth}
              </p>
            </div>
            <div className="rounded-xl border border-[#333F4D] bg-[#0a0b0e] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)]">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#333F4D] bg-[#151A22]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#C5C6C7]/50" />
                  <span className="text-[11px] text-[#C5C6C6]/50" style={{ fontFamily: 'var(--nx-font-mono)' }}>bash</span>
                </div>
              </div>
              {/* Code */}
              <pre className="px-5 py-4 text-[12px] leading-relaxed overflow-x-auto" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                <code>
                  <span className="text-[#C5C6C7]">{'curl -X POST https://api.nexflowx.com'}</span>
                  {'\n'}
                  <span className="text-[#00FF66]">{'/v1/orchestration/route'}</span>
                  {'\n'}
                  <span className="text-[#C5C6C7]">{'  -H "Authorization: Bearer nfx_live_node_2026"'}</span>
                  {'\n'}
                  <span className="text-[#5C6370]">{'  -H "Content-Type: application/json"'}</span>
                  {'\n'}
                  <span className="text-[#C5C6C7]">{"  -d '"}</span>{'\n'}
                  <span className="text-[#ABB2BF]">{"    \"amount\": 150000,"}</span><span className="text-[#ABB2BF]">{','}</span>
                  <span className="text-[#ABB2BF]">{"    \"currency\": \"GBP\""}</span><span className="text-[#ABB2BF]">{','}</span>
                  <span className="text-[#C5C6C7]">{"}"}</span>
                </code>
              </pre>
            </div>

            {/* Endpoints */}
            <div className="mt-6">
              <p className="text-xs text-[#00FF66] uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                {d.s3EndpointsTitle}
              </p>
              <div className="rounded-lg border border-[#333F4D] bg-[#0a0b0e] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#00FF66]/30">
                      <th className="px-4 py-2.5 text-left text-[10px] uppercase tracking-wider text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-mono)' }}>Endpoint</th>
                      <th className="px-4 py-2.5 text-left text-[10px] uppercase tracking-wider text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-mono)' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(d.s3Endpoints as unknown[]).map((ep: unknown, i: number) => (
                      <tr key={i} className="border-b border-[#333F4D]/30 last:border-b-0">
                        <td className="px-4 py-3 text-[12px] text-[#00FF66] font-semibold" style={{ fontFamily: 'var(--nx-font-mono)' }}>{(ep as {endpoint: string}).endpoint}</td>
                        <td className="px-4 py-3 text-[12px] text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-mono)' }}>{(ep as {desc: string}).desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-16" />

        {/* Section 4: Security */}
        <motion.section initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="mb-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            <span className="text-xs font-bold text-[#00FF66] px-2.5 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              04
            </span>
            {d.s4Title}
          </h2>
          <div className="space-y-6">
            {[d.s4DataTitle, d.s4ZeroTitle, d.s4AmlTitle].map((title: string, i: number) => (
              <div key={title} className="ml-6 pl-6 border-l-2 border-[#00FF66]/30">
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  <Shield className="w-4 h-4 text-[#00FF66]" />
                  {title}
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed text-sm" style={{ fontFamily: 'var(--nx-font-body)' }}>
                  {(d as Record<string, unknown>)[`s4Content${i + 1}`] as string}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-16" />

        {/* Section 5: Roadmap */}
        <motion.section initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mb-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-8" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            <span className="text-xs font-bold text-[#00FF66] px-2.5 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              05
            </span>
            {d.s5Title}
          </h2>
          <div className="space-y-4">
            {roadmapItems.map((item) => {
              return (
              <motion.div key={item.phase} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#333F4D] bg-[#151A22]/50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${statusStyles[item.status]}`} style={{ fontFamily: 'var(--nx-font-mono)' }}>
                    {item.phase}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                        {item.title}
                      </h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusStyles[item.status]}`} style={{ fontFamily: 'var(--nx-font-mono)', fontWeight: 700 }}>
                        {item.statusLabel}
                      </span>
                    </div>
                    <p className="text-sm text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-body)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-16" />

        {/* Section 6: Governance */}
        <motion.section initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mb-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            <span className="text-xs font-bold text-[#00FF66] px-2.5 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              06
            </span>
            {d.s6Title}
          </h2>
          <div className="p-6 rounded-xl border border-[#00FF66]/30 bg-[#00FF66]/[0.03] backdrop-blur-sm" style={{ boxShadow: 'inset 0 0 30px rgba(0,255,102,0.05)' }}>
            <ul className="space-y-3">
              {(d.s6Items as unknown[]).map((item: unknown, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] mt-1.5 flex-shrink-0" />
                  <span className="text-white font-semibold">{item as string}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-16" />

        {/* Section 7: Access Notice */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="mb-16">
          <div className="p-6 rounded-xl border border-[#FF9F0A]/30 bg-[#FF9F0A]/[0.03]">
            <h3 className="text-base font-bold text-[#FF9F0A] mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--nx-font-heading)' }}>
              <AlertTriangle className="w-5 h-5" />
              {d.s7Title}
            </h3>
            <p className="text-sm text-[#C5C6C7] leading-relaxed mb-4" style={{ fontFamily: 'var(--nx-font-body)' }}>
              {d.s7Content}
            </p>
            <div className="p-4 rounded-lg bg-[#0B0C10] border border-dashed border-[#FF9F0A]/30 text-center">
              <p className="text-xs text-[#C5C6C7] mb-2" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                {d.s7SandboxLabel}
              </p>
              <p className="text-sm font-bold text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                dev.nexflowx.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back button */}
        <div className="pt-8 text-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#333F4D] text-sm text-[#C5C6C7] hover:border-[#00FF66]/50 hover:text-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] transition-all"
            style={{ fontFamily: 'var(--nx-font-mono)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            {d.back}
          </button>
        </div>
      </div>
    </div>
  );
}
