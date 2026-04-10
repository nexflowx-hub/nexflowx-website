'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedNetwork } from './animated-network';
import { useLanguage } from '@/lib/language-context';
import { Shield, Zap, BarChart3 } from 'lucide-react';

export function HeroEnterprise() {
  const { t } = useLanguage();

  const metrics = [
    { icon: Shield, value: '99.99%', label: t.enterprise.metricUptime },
    { icon: Zap, value: '<100ms', label: t.enterprise.metricLatency },
    { icon: BarChart3, value: '10K+', label: t.enterprise.metricTPS },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(#333F4D 1px, transparent 1px), linear-gradient(90deg, #333F4D 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[#00FF66] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#00FF66] opacity-[0.02] blur-[100px]" />
        {/* Particle network */}
        <AnimatedNetwork />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/nexflowx-logo.png"
            alt="NeXFlowX"
            className="h-16 w-16 object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0,255,102,0.3))' }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#333F4D] bg-[#151A22]/80 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
          <span className="text-xs text-[#C5C6C7] tracking-wide uppercase" style={{ fontFamily: 'var(--nx-font-mono)' }}>
            Enterprise Edition
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
        >
          {t.enterprise.heroTitle.split('Logistics').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-[#00FF66]" style={{ textShadow: '0 0 40px rgba(0,255,102,0.25)' }}>
                  Logistics
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-[#C5C6C7] max-w-2xl mx-auto mb-10"
          style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.7 }}
        >
          {t.enterprise.heroSub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-[#00FF66] text-[#0B0C10] font-bold hover:bg-[#00FF66]/90 rounded-xl h-13 px-8 text-base shadow-[0_0_30px_rgba(0,255,102,0.15)]"
            style={{ fontFamily: 'var(--nx-font-heading)' }}
          >
            {t.enterprise.ctaApi}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#333F4D] text-white hover:bg-[#1F2833] hover:border-[#00FF66]/50 rounded-xl h-13 px-8 text-base"
            style={{ fontFamily: 'var(--nx-font-heading)' }}
          >
            {t.enterprise.ctaDemo}
          </Button>
        </motion.div>

        {/* Metric Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <m.icon className="w-4 h-4 text-[#00FF66]/70" />
              <span className="text-sm font-bold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                {m.value}
              </span>
              <span className="text-xs text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                {m.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-4 h-4 text-[#00FF66]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
