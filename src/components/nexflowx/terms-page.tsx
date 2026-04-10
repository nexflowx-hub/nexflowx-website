'use client';

import { useLanguage } from '@/lib/language-context';
import { ArrowLeft, Shield, Scale, FileText, Mail } from 'lucide-react';

interface TermsContentProps {
  onClose: () => void;
}

const sectionIcons = [Shield, Shield, Scale, Scale, FileText, FileText, FileText, Mail];

export function TermsContent({ onClose }: TermsContentProps) {
  const { t } = useLanguage();

  const sections = [
    { num: '01', title: t.terms.s1Title, content: t.terms.s1Content },
    { num: '02', title: t.terms.s2Title, content: t.terms.s2Content },
    { num: '03', title: t.terms.s3Title, content: t.terms.s3Content },
    { num: '04', title: t.terms.s4Title, content: t.terms.s4Content },
    { num: '05', title: t.terms.s5Title, content: t.terms.s5Content },
    { num: '06', title: t.terms.s6Title, content: t.terms.s6Content },
    { num: '07', title: t.terms.s7Title, content: t.terms.s7Content },
    { num: '08', title: t.terms.s8Title, content: t.terms.s8Content },
  ];

  return (
    <div className="px-6 sm:px-10 py-16">
      <div className="max-w-[72ch] mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-4">
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--nx-font-heading, inherit)' }}
          >
            {t.terms.title}
          </h1>
          <div
            className="w-24 h-[2px] mx-auto bg-[#00FF66]"
            style={{ boxShadow: '0 0 12px rgba(0,255,102,0.5)' }}
          />
        </div>

        {/* Last updated */}
        <p className="text-center text-[#66FCF1] text-sm mb-12 tracking-wide">
          {t.terms.lastUpdated}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-12" />

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((section, index) => {
            const Icon = sectionIcons[index];
            const isLast = index === sections.length - 1;

            return (
              <div key={section.num}>
                <section className={`py-8 ${isLast ? '' : ''}`}>
                  {/* Section number + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-[#00FF66] shrink-0" />
                    <h2
                      className="text-[#00FF66] text-lg font-semibold tracking-wide"
                      style={{ fontFamily: 'var(--nx-font-heading, inherit)' }}
                    >
                      <span className="text-[#00FF66]/50 mr-2">{section.num}.</span>
                      {section.title}
                    </h2>
                  </div>

                  {/* Section content - last section gets green-tinted box */}
                  {isLast ? (
                    <div
                      className="ml-8 p-5 rounded-xl border border-[#00FF66]/15"
                      style={{ backgroundColor: 'rgba(0,255,102,0.04)' }}
                    >
                      <p className="text-[#C5C6C7] leading-relaxed text-base">
                        {section.content}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[#C5C6C7] leading-relaxed text-base ml-8">
                      {section.content}
                    </p>
                  )}
                </section>

                {/* Separator between sections (not after last) */}
                {!isLast && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF66]/20 to-transparent mt-4 mb-12" />

        {/* Back button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-[#C5C6C7] hover:text-white hover:bg-[#1A1D23] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.terms.back}
          </button>
        </div>
      </div>
    </div>
  );
}
