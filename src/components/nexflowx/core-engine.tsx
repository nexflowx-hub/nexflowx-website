'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Brain, Building2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const pillarData = [
  { icon: Server, tags: ['Faster Payments', 'BACS', 'SEPA Instant', 'SWIFT'], tagKey: 'core' },
  { icon: Brain, tags: ['AI-Powered', 'Multi-Acquirer', 'Real-Time'], tagKey: 'routing' },
  { icon: Building2, tags: ['White-Label', 'Dedicated Nodes', 'Custom SLA'], tagKey: 'saas' },
] as const;

export function CoreEngine() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const pillars = [
    { ...pillarData[0], title: t.enterprise.pillar1Title, desc: t.enterprise.pillar1Desc },
    { ...pillarData[1], title: t.enterprise.pillar2Title, desc: t.enterprise.pillar2Desc },
    { ...pillarData[2], title: t.enterprise.pillar3Title, desc: t.enterprise.pillar3Desc },
  ];

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00FF66] mb-4" style={{ fontFamily: 'var(--nx-font-mono)' }}>
            {t.enterprise.coreTag}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}
          >
            {t.enterprise.coreTitle}
          </h2>
          <p className="text-[#C5C6C7] max-w-xl mx-auto" style={{ fontFamily: 'var(--nx-font-body)' }}>
            {t.enterprise.coreSub}
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.tagKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(0,255,102,0.5)' }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#333F4D] bg-[#151A22] flex flex-col transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,255,102,0.1)]"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent group-hover:via-[#00FF66]/60 transition-all" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center mb-5 group-hover:bg-[#00FF66]/15 transition-colors">
                <pillar.icon className="w-6 h-6 text-[#00FF66]" style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,102,0.3))' }} />
              </div>

              {/* Pulse indicator for API card */}
              {i === 0 && (
                <div className="absolute top-7 right-7 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                  <span className="text-[10px] text-[#00FF66] uppercase" style={{ fontFamily: 'var(--nx-font-mono)' }}>Live</span>
                </div>
              )}

              {/* Content */}
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--nx-font-heading)' }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-[#C5C6C7] mb-6 flex-grow" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.7 }}>
                {pillar.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider border bg-[#0B0C10] border-[#333F4D] text-[#C5C6C7]"
                    style={{ fontFamily: 'var(--nx-font-mono)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
