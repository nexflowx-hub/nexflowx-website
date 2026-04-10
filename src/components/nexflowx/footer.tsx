'use client';

import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const platformLinks = ['FLOX Orchestrator', 'Smart Routing', 'Multi-Acquirer', 'API Reference'];
const coverageLinks = ['Europe', 'Latin America', 'United States', 'Asia-Pacific'];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[#333F4D] bg-[#0B0C10]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div className="flex items-center gap-2.5 mb-4 cursor-pointer" whileHover={{ scale: 1.05 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/nexflowx-logo-footer.png" alt="NeXFlowX" className="h-8 w-8 object-contain" style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,102,0.3))' }} />
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                NeXFlow<span className="text-[#00FF66]">X</span>
              </span>
            </motion.div>
            <p className="text-sm text-[#C5C6C7] max-w-xs mb-4" style={{ fontFamily: 'var(--nx-font-body)' }}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
              <span className="text-xs text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-mono)' }}>{t.footer.systems}</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'var(--nx-font-heading)' }}>{t.footer.platform}</h4>
            <ul className="space-y-2">
              {platformLinks.map((item) => (
                <li key={item}><span className="text-sm text-[#C5C6C7] hover:text-[#00FF66] transition-colors cursor-pointer">{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'var(--nx-font-heading)' }}>{t.footer.coverage}</h4>
            <ul className="space-y-2">
              {coverageLinks.map((item) => (
                <li key={item}><span className="text-sm text-[#C5C6C7] hover:text-[#00FF66] transition-colors cursor-pointer">{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'var(--nx-font-heading)' }}>{t.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-[#C5C6C7]">
                <Mail className="w-4 h-4 text-[#00FF66]" /><span>{t.footer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#C5C6C7]">
                <Globe className="w-4 h-4 text-[#00FF66]" /><span>{t.footer.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Bar */}
        <div className="mt-12 pt-6 border-t border-[#333F4D] space-y-3">
          <p className="text-xs text-[#C5C6C7]/70 text-center" style={{ fontFamily: 'var(--nx-font-mono)' }}>
            {t.footer.copyright}
          </p>
          <p className="text-xs text-[#C5C6C7]/50 text-center" style={{ fontFamily: 'var(--nx-font-mono)' }}>
            {t.footer.registered}
          </p>
          <p className="text-xs text-[#C5C6C7]/50 text-center" style={{ fontFamily: 'var(--nx-font-mono)' }}>
            {t.footer.address}
          </p>
          <div className="flex items-center justify-center gap-6 pt-3">
            <span className="text-xs text-[#C5C6C7] hover:text-[#00FF66] transition-colors cursor-pointer">{t.footer.privacy}</span>
            <span className="text-[#333F4D]">|</span>
            <span className="text-xs text-[#C5C6C7] hover:text-[#00FF66] transition-colors cursor-pointer">{t.footer.terms}</span>
            <span className="text-[#333F4D]">|</span>
            <span className="text-xs text-[#C5C6C7] hover:text-[#00FF66] transition-colors cursor-pointer">{t.footer.sla}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
