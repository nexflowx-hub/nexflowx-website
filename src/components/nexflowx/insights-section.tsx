'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const articles = [
  { catKey: 'a1Cat', titleKey: 'a1Title', excerptKey: 'a1Excerpt', dateKey: 'a1Date' },
  { catKey: 'a2Cat', titleKey: 'a2Title', excerptKey: 'a2Excerpt', dateKey: 'a2Date' },
  { catKey: 'a3Cat', titleKey: 'a3Title', excerptKey: 'a3Excerpt', dateKey: 'a3Date' },
] as const;

export function InsightsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 sm:py-32 bg-[#08090b]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00FF66] mb-4" style={{ fontFamily: 'var(--nx-font-mono)' }}>{t.insights.tag}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}>
            {t.insights.title} <span className="text-[#C5C6C7]">&amp;</span>{' '}
            <span className="text-[#00FF66]" style={{ textShadow: '0 0 10px rgba(0,255,102,0.2)' }}>{t.insights.highlight}</span>
          </h2>
          <p className="text-[#C5C6C7] max-w-xl" style={{ fontFamily: 'var(--nx-font-body)' }}>{t.insights.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => {
            const ins = t.insights as Record<string, unknown>;
            return (
              <motion.article key={a.titleKey} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }} whileHover={{ y: -6 }} className="group relative rounded-xl border border-[#333F4D] bg-[#151A22] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,255,102,0.1)] hover:border-[#00FF66]/40 cursor-pointer">
                <div className="h-1 bg-gradient-to-r from-[#00FF66]/0 via-[#00FF66]/40 to-[#00FF66]/0 group-hover:via-[#00FF66] transition-all duration-300" />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-[#00FF66] text-[#0B0C10] uppercase tracking-wider" style={{ fontFamily: 'var(--nx-font-heading)' }}>{ins[a.catKey] as string}</span>
                    <span className="text-xs text-[#C5C6C7]/60" style={{ fontFamily: 'var(--nx-font-mono)' }}>{ins[a.dateKey] as string}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#00FF66] transition-colors" style={{ fontFamily: 'var(--nx-font-heading)' }}>{ins[a.titleKey] as string}</h3>
                  <p className="text-sm text-[#C5C6C7] leading-relaxed mb-6 flex-grow line-clamp-2" style={{ fontFamily: 'var(--nx-font-body)' }}>{ins[a.excerptKey] as string}</p>
                  <span className="flex items-center gap-2 text-sm text-[#00FF66]/70 group-hover:text-[#00FF66] transition-colors" style={{ fontFamily: 'var(--nx-font-body)' }}>
                    {t.insights.readMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-10 text-center">
          <span className="text-sm text-[#C5C6C7] hover:text-[#00FF66] transition-colors cursor-pointer flex items-center gap-2 mx-auto" style={{ fontFamily: 'var(--nx-font-body)' }}>
            {t.insights.viewAll} <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
