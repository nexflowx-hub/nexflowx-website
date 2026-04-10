'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Layers, Server, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

const solutions = [
  { icon: Globe, titleKey: 's1Title', descKey: 's1Desc', capsKey: 's1Capabilities' },
  { icon: Layers, titleKey: 's2Title', descKey: 's2Desc', capsKey: 's2Capabilities' },
  { icon: Server, titleKey: 's3Title', descKey: 's3Desc', capsKey: 's3Capabilities' },
] as const;

const svgVisuals = [
  // Globe flow arrows
  <svg key="globe" viewBox="0 0 120 80" className="w-full h-full p-3 opacity-40 group-hover:opacity-70 transition-opacity">
    <circle cx="60" cy="40" r="25" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <ellipse cx="60" cy="40" rx="40" ry="15" fill="none" stroke="#00FF66" strokeWidth="0.5" />
    <line x1="60" y1="15" x2="60" y2="65" stroke="#00FF66" strokeWidth="0.5" />
    <path d="M20 40 Q40 25 60 40 Q80 55 100 40" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <circle cx="20" cy="40" r="3" fill="#00FF66" opacity="0.5" />
    <circle cx="100" cy="40" r="3" fill="#00FF66" opacity="0.5" />
  </svg>,
  // Stacked layers
  <svg key="layers" viewBox="0 0 120 80" className="w-full h-full p-3 opacity-40 group-hover:opacity-70 transition-opacity">
    <rect x="25" y="15" width="70" height="12" rx="2" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <rect x="25" y="32" width="70" height="12" rx="2" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <rect x="25" y="49" width="70" height="12" rx="2" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <circle cx="95" cy="21" r="2" fill="#00FF66" /><circle cx="95" cy="38" r="2" fill="#00FF66" /><circle cx="95" cy="55" r="2" fill="#00FF66" />
  </svg>,
  // Server rack
  <svg key="server" viewBox="0 0 120 80" className="w-full h-full p-3 opacity-40 group-hover:opacity-70 transition-opacity">
    <rect x="30" y="10" width="60" height="14" rx="3" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <rect x="30" y="28" width="60" height="14" rx="3" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <rect x="30" y="46" width="60" height="14" rx="3" fill="none" stroke="#00FF66" strokeWidth="0.8" />
    <circle cx="78" cy="17" r="2.5" fill="#00FF66" /><circle cx="78" cy="35" r="2.5" fill="#00FF66" /><circle cx="78" cy="53" r="2.5" fill="#00FF66" />
    <line x1="38" y1="17" x2="65" y2="17" stroke="#00FF66" strokeWidth="1" />
    <line x1="38" y1="35" x2="65" y2="35" stroke="#00FF66" strokeWidth="1" />
    <line x1="38" y1="53" x2="65" y2="53" stroke="#00FF66" strokeWidth="1" />
  </svg>,
];

export function EnterpriseSolutions() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00FF66] mb-4" style={{ fontFamily: 'var(--nx-font-mono)' }}>{t.solutions.tag}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}>
            {t.solutions.title} <span className="text-[#00FF66]" style={{ textShadow: '0 0 10px rgba(0,255,102,0.2)' }}>{t.solutions.highlight}</span>
          </h2>
          <p className="text-[#C5C6C7] max-w-2xl" style={{ fontFamily: 'var(--nx-font-body)' }}>{t.solutions.sub}</p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const title = (t.solutions as Record<string, unknown>)[s.titleKey] as string;
            const desc = (t.solutions as Record<string, unknown>)[s.descKey] as string;
            const caps = (t.solutions as Record<string, unknown>)[s.capsKey] as string[];
            return (
              <motion.div key={s.titleKey} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }} className="group relative rounded-xl border border-[#333F4D] bg-[#151A22] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,102,0.12)] hover:border-[#00FF66]/40">
                <div className="absolute inset-x-0 top-0 h-px bg-transparent group-hover:bg-[#00FF66] transition-colors duration-300 rounded-t-xl" />
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#00FF66]/10 flex items-center justify-center group-hover:bg-[#00FF66]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#00FF66]" style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,102,0.3))' }} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--nx-font-heading)' }}>{title}</h3>
                      <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed max-w-xl" style={{ fontFamily: 'var(--nx-font-body)' }}>{desc}</p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                        {caps.map((cap) => (
                          <span key={cap} className="text-xs text-[#00FF66]/80 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#00FF66]" />{cap}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-32 h-20 rounded-lg border border-[#333F4D]/60 bg-[#0B0C10]/50 overflow-hidden">
                    {svgVisuals[i]}
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-[#333F4D]/50">
                  <span className="flex items-center gap-2 text-sm text-[#00FF66] cursor-pointer hover:gap-3 transition-all" style={{ fontFamily: 'var(--nx-font-body)' }}>
                    {t.solutions.contact} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.6 }} className="mt-16 text-center">
          <p className="text-lg sm:text-xl text-[#C5C6C7] mb-6" style={{ fontFamily: 'var(--nx-font-body)' }}>{t.solutions.ctaText}</p>
          <Button size="lg" className="bg-[#00FF66] text-[#0B0C10] font-bold hover:bg-[#00FF66]/90 rounded-xl h-12 px-8 text-base" style={{ fontFamily: 'var(--nx-font-heading)' }}>
            {t.solutions.ctaBtn} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
