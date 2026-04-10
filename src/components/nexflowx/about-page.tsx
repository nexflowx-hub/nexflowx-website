'use client';

import { useLanguage } from '@/lib/language-context';
import { ArrowLeft, Globe, Building2, Cpu } from 'lucide-react';

interface AboutContentProps {
  onClose: () => void;
}

export function AboutContent({ onClose }: AboutContentProps) {
  const { t } = useLanguage();

  return (
    <div className="px-6 sm:px-10 py-16">
      <div className="max-w-[72ch] mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--nx-font-heading, inherit)' }}
          >
            {t.about.title}
          </h1>
          <div
            className="w-24 h-[2px] mx-auto bg-[#00FF66]"
            style={{ boxShadow: '0 0 12px rgba(0,255,102,0.5)' }}
          />
        </div>

        {/* Subtle divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-12" />

        {/* Introduction */}
        <section className="mb-10">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#00FF66] mt-1.5 shrink-0" />
            <p className="text-[#C5C6C7] leading-relaxed text-base">
              {t.about.intro}
            </p>
          </div>
        </section>

        {/* Green glow separator */}
        <div className="flex items-center gap-3 my-10">
          <div
            className="flex-1 h-px bg-gradient-to-r from-transparent to-[#00FF66]/40"
          />
          <div
            className="w-2 h-2 rounded-full bg-[#00FF66]"
            style={{ boxShadow: '0 0 8px rgba(0,255,102,0.6)' }}
          />
          <div
            className="flex-1 h-px bg-gradient-to-l from-transparent to-[#00FF66]/40"
          />
        </div>

        {/* London-Core */}
        <section className="mb-10">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-[#00FF66] mt-1.5 shrink-0" />
            <p className="text-[#C5C6C7] leading-relaxed text-base">
              {t.about.londonCore}
            </p>
          </div>
        </section>

        {/* Green glow separator */}
        <div className="flex items-center gap-3 my-10">
          <div
            className="flex-1 h-px bg-gradient-to-r from-transparent to-[#00FF66]/40"
          />
          <div
            className="w-2 h-2 rounded-full bg-[#00FF66]"
            style={{ boxShadow: '0 0 8px rgba(0,255,102,0.6)' }}
          />
          <div
            className="flex-1 h-px bg-gradient-to-l from-transparent to-[#00FF66]/40"
          />
        </div>

        {/* Code meets Capital */}
        <section className="mb-12">
          <div className="flex items-start gap-3">
            <Cpu className="w-5 h-5 text-[#00FF66] mt-1.5 shrink-0" />
            <p className="text-[#C5C6C7] leading-relaxed text-base">
              {t.about.codeCapital}
            </p>
          </div>
        </section>

        {/* Final separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF66]/20 to-transparent mb-12" />

        {/* Back button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-[#C5C6C7] hover:text-white hover:bg-[#1A1D23] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.about.back}
          </button>
        </div>
      </div>
    </div>
  );
}
