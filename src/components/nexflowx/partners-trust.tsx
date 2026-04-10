'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const logos = [
  { name: 'Fintech Corp', prominent: true },
  { name: 'GlobalBank', prominent: true },
  { name: 'PayFlow', prominent: false },
  { name: 'SettleNet', prominent: true },
  { name: 'CrossPay', prominent: false },
  { name: 'Meridian Capital', prominent: true },
];

export function PartnersTrust() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}>
            {t.partners.title}
          </h2>
          <div className="w-20 h-1 bg-[#00FF66] rounded-full mx-auto" />
        </motion.div>

        {/* Logos */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {logos.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }} className="flex items-center justify-center rounded-lg border border-[#333F4D]/60 bg-[#151A22] h-20 px-4" style={{ opacity: p.prominent ? 1 : 0.5 }}>
                <span className="text-sm font-medium text-[#C5C6C7] tracking-wide" style={{ fontFamily: 'var(--nx-font-heading)', opacity: p.prominent ? 0.8 : 0.4 }}>{p.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }} className="max-w-3xl mx-auto">
          <div className="relative rounded-xl border border-[#333F4D] bg-[#151A22] p-8 sm:p-10">
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#00FF66] rounded-l-xl" style={{ boxShadow: '0 0 12px rgba(0,255,102,0.3)' }} />
            <Quote className="w-8 h-8 text-[#00FF66]/30 mb-4 ml-2" />
            <blockquote className="text-lg sm:text-xl text-white leading-relaxed italic pl-2" style={{ fontFamily: 'var(--nx-font-body)' }}>
              &ldquo;{t.partners.quote}&rdquo;
            </blockquote>
            <div className="mt-6 pl-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center">
                <span className="text-xs font-bold text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-heading)' }}>{t.partners.initials}</span>
              </div>
              <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>{t.partners.author}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
