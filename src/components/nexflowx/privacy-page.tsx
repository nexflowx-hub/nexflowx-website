'use client';

import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface PrivacyPageProps {
  onClose: () => void;
}

export function PrivacyPage({ onClose }: PrivacyPageProps) {
  const { t } = useLanguage();

  const sections = [
    { num: 1, title: t.privacy.s1Title, desc: t.privacy.s1Desc },
    { num: 2, title: t.privacy.s2Title, desc: t.privacy.s2Desc },
    { num: 3, title: t.privacy.s3Title, desc: t.privacy.s3Desc },
    { num: 4, title: t.privacy.s4Title, desc: t.privacy.s4Desc },
    { num: 5, title: t.privacy.s5Title, desc: t.privacy.s5Desc },
    { num: 6, title: t.privacy.s6Title, desc: t.privacy.s6Desc },
    { num: 7, title: t.privacy.s7Title, desc: t.privacy.s7Desc },
    { num: 8, title: t.privacy.s8Title, desc: t.privacy.s8Desc },
    { num: 9, title: t.privacy.s9Title, desc: t.privacy.s9Desc },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[72ch] mx-auto">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm text-[#C5C6C7] hover:text-[#00FF66] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span style={{ fontFamily: 'var(--nx-font-body)' }}>Back</span>
        </button>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--nx-font-heading)', letterSpacing: '-0.03em' }}
        >
          {t.privacy.title}
        </h1>

        {/* Last Updated */}
        <p
          className="text-sm text-[#C5C6C7]/60 mb-8"
          style={{ fontFamily: 'var(--nx-font-mono)' }}
        >
          {t.privacy.lastUpdated}
        </p>

        {/* Introduction */}
        <p
          className="text-base text-[#C5C6C7] leading-relaxed mb-12"
          style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}
        >
          {t.privacy.intro}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-12" />

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={section.num}>
              <div className="flex items-start gap-4 mb-3">
                <span
                  className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0"
                  style={{ fontFamily: 'var(--nx-font-mono)' }}
                >
                  {String(section.num).padStart(2, '0')}
                </span>
                <h2
                  className="text-lg sm:text-xl font-semibold text-white"
                  style={{ fontFamily: 'var(--nx-font-heading)' }}
                >
                  {section.title}
                </h2>
              </div>
              <p
                className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed ml-[2.75rem]"
                style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}
              >
                {section.desc}
              </p>
              {i < sections.length - 1 && (
                <div className="h-px bg-[#333F4D]/50 ml-[2.75rem] mt-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent mt-12" />
      </div>
    </div>
  );
}
