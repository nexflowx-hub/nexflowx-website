'use client';

import { ArrowLeft, Shield, Clock, Activity, AlertTriangle, Headphones, CreditCard, Monitor, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface SLAPageProps {
  onClose: () => void;
}

export function SLAPage({ onClose }: SLAPageProps) {
  const { t } = useLanguage();

  const incidentRows = [
    { severity: t.sla.s4P1, response: t.sla.s4P1R, resolution: t.sla.s4P1Res, color: '#FF4444' },
    { severity: t.sla.s4P2, response: t.sla.s4P2R, resolution: t.sla.s4P2Res, color: '#FF8C00' },
    { severity: t.sla.s4P3, response: t.sla.s4P3R, resolution: t.sla.s4P3Res, color: '#FFD700' },
    { severity: t.sla.s4P4, response: t.sla.s4P4R, resolution: t.sla.s4P4Res, color: '#00FF66' },
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
          {t.sla.title}
        </h1>

        {/* Last Updated */}
        <p
          className="text-sm text-[#C5C6C7]/60 mb-8"
          style={{ fontFamily: 'var(--nx-font-mono)' }}
        >
          {t.sla.lastUpdated}
        </p>

        {/* Introduction */}
        <p
          className="text-base text-[#C5C6C7] leading-relaxed mb-12"
          style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}
        >
          {t.sla.intro}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#333F4D] to-transparent mb-12" />

        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
          {/* Uptime Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl border border-[#333F4D] bg-[#151A22] text-center overflow-hidden">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent" />
            <Shield className="w-6 h-6 text-[#00FF66] mx-auto mb-3" style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,102,0.3))' }} />
            <p
              className="text-4xl sm:text-5xl font-bold text-[#00FF66] mb-1"
              style={{ fontFamily: 'var(--nx-font-heading)' }}
            >
              {t.sla.s1Metric}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#C5C6C7]/70" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              {t.sla.s1Label}
            </p>
          </div>

          {/* Latency Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl border border-[#333F4D] bg-[#151A22] text-center overflow-hidden">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent" />
            <Clock className="w-6 h-6 text-[#00FF66] mx-auto mb-3" style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,102,0.3))' }} />
            <p
              className="text-4xl sm:text-5xl font-bold text-[#00FF66] mb-1"
              style={{ fontFamily: 'var(--nx-font-heading)' }}
            >
              {t.sla.s2Metric}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#C5C6C7]/70" style={{ fontFamily: 'var(--nx-font-mono)' }}>
              {t.sla.s2Label}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* S1: Uptime Guarantee */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>01</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s1Title}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed ml-[2.75rem]" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
              {t.sla.s1Desc}
            </p>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S2: API Latency */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>02</span>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s2Title}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed ml-[2.75rem]" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
              {t.sla.s2Desc}
            </p>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S3: Planned Maintenance */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>03</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s3Title}
                </h2>
              </div>
            </div>
            <div className="ml-[2.75rem] space-y-2">
              <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
                {t.sla.s3Desc1}
              </p>
              <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
                {t.sla.s3Desc2}
              </p>
            </div>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S4: Incident Response */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>04</span>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s4Title}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed ml-[2.75rem] mb-5" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
              {t.sla.s4P1 && (
                <span>Resolved incidents follow structured escalation:</span>
              )}
            </p>

            {/* Incident Response Table */}
            <div className="ml-[2.75rem] rounded-xl border border-[#333F4D] overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-[#00FF66]/10 border-b border-[#333F4D]">
                <div className="px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                    {t.sla.s4Severity}
                  </span>
                </div>
                <div className="px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                    {t.sla.s4Response}
                  </span>
                </div>
                <div className="px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF66]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                    {t.sla.s4Resolution}
                  </span>
                </div>
              </div>
              {/* Table Rows */}
              {incidentRows.map((row, i) => (
                <div
                  key={row.severity}
                  className={`grid grid-cols-3 ${i < incidentRows.length - 1 ? 'border-b border-[#333F4D]/60' : ''} ${i % 2 === 0 ? 'bg-[#0B0C10]' : 'bg-[#151A22]'}`}
                >
                  <div className="px-4 py-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: row.color, boxShadow: `0 0 6px ${row.color}60` }} />
                    <span className="text-xs sm:text-sm text-white font-medium" style={{ fontFamily: 'var(--nx-font-body)' }}>
                      {row.severity}
                    </span>
                  </div>
                  <div className="px-4 py-3 flex items-center">
                    <span className="text-xs sm:text-sm text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                      {row.response}
                    </span>
                  </div>
                  <div className="px-4 py-3 flex items-center">
                    <span className="text-xs sm:text-sm text-[#C5C6C7]" style={{ fontFamily: 'var(--nx-font-mono)' }}>
                      {row.resolution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S5: Support */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>05</span>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s5Title}
                </h2>
              </div>
            </div>
            <div className="ml-[2.75rem] space-y-2">
              <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
                {t.sla.s5Desc1}
              </p>
              <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
                {t.sla.s5Desc2}
              </p>
            </div>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S6: Compensation */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>06</span>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s6Title}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed ml-[2.75rem]" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
              {t.sla.s6Desc}
            </p>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S7: Monitoring */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>07</span>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s7Title}
                </h2>
              </div>
            </div>
            <div className="ml-[2.75rem] space-y-2">
              <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
                {t.sla.s7Desc1}
              </p>
              <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed" style={{ fontFamily: 'var(--nx-font-body)', lineHeight: 1.8 }}>
                {t.sla.s7Desc2}
              </p>
            </div>
          </div>

          <div className="h-px bg-[#333F4D]/50 ml-[2.75rem]" />

          {/* S8: Contact */}
          <div>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[#00FF66] font-bold text-lg mt-0.5 shrink-0" style={{ fontFamily: 'var(--nx-font-mono)' }}>08</span>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00FF66]/70" />
                <h2 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                  {t.sla.s8Title}
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#C5C6C7]/90 leading-relaxed ml-[2.75rem]" style={{ fontFamily: 'var(--nx-font-mono)', lineHeight: 1.8 }}>
              {t.sla.s8Desc}
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent mt-12" />
      </div>
    </div>
  );
}
