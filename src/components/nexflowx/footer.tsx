'use client';

import { useAppStore, type PageRoute } from '@/lib/store';
import { Shield, FileCheck, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const { navigate } = useAppStore();

  const handleNav = (page: PageRoute) => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      {/* Compliance banner */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-[#2F6BFF] mt-0.5 shrink-0" />
            <p className="text-xs leading-relaxed text-[var(--muted-foreground)]">
              <strong className="text-[var(--foreground)]">NexFlowX</strong> operates strictly as a{' '}
              <strong>Technology Service Provider</strong> and does not engage in regulated financial activities.
              The platform does not hold client funds, execute transactions, or provide payment services.
              All financial operations are performed by licensed third-party institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <span className="nx-badge nx-badge-info text-xs font-medium gap-2">
              <Shield className="w-3.5 h-3.5" />
              Non-Custodial Architecture
            </span>
            <span className="nx-badge nx-badge-info text-xs font-medium gap-2">
              <FileCheck className="w-3.5 h-3.5" />
              ISO 20022 Ready
            </span>
            <span className="nx-badge nx-badge-success text-xs font-medium gap-2">
              <span className="nx-dot nx-dot-success" />
              UK GDPR Compliant
            </span>
            <span className="nx-badge nx-badge-success text-xs font-medium gap-2">
              <span className="nx-dot nx-dot-success" />
              EU GDPR Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/nexflowx-logo-nav.png" alt="NexFlowX" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-tight font-[family-name:var(--font-sora)]">
                NexFlowX
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
              Financial infrastructure for cross-border commerce.
              API-driven technology connecting global businesses to local payment systems.
            </p>
            <p className="text-xs text-[var(--muted-foreground)] opacity-70">
              A product by <span className="text-[var(--foreground)] font-medium">IAHUB360 LTD</span>
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {([
                { label: 'How It Works', page: 'how-it-works' as PageRoute },
                { label: 'Solutions', page: 'solutions' as PageRoute },
                { label: 'API & Technology', page: 'api-technology' as PageRoute },
                { label: 'Partner Portal', page: 'portal-dashboard' as PageRoute },
              ] as const).map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[#2F6BFF] transition-colors group min-h-[44px]"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">
              Compliance & Legal
            </h4>
            <ul className="space-y-2.5">
              {([
                { label: 'Regulatory Positioning', page: 'compliance-regulatory' as PageRoute },
                { label: 'AML & KYC Framework', page: 'compliance-aml-kyc' as PageRoute },
                { label: 'Data Protection (GDPR)', page: 'compliance-data-protection' as PageRoute },
              ] as const).map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[#2F6BFF] transition-colors group min-h-[44px]"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {([
                { label: 'Terms of Service', page: 'terms-of-service' as PageRoute },
                { label: 'Privacy Policy', page: 'privacy-policy' as PageRoute },
                { label: 'Compliance Statement', page: 'compliance-statement' as PageRoute },
              ] as const).map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[#2F6BFF] transition-colors group min-h-[44px]"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="nx-safe-bottom mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-[var(--muted-foreground)] opacity-70">
            <span>© 2026 NexFlowX. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>A product by IAHUB360 LTD</span>
          </div>
          <div className="text-xs text-[var(--muted-foreground)] opacity-70 text-center sm:text-right">
            <p>Registered in England and Wales: 16626733</p>
            <p>124–128 City Road, EC1V 2NX, London, United Kingdom</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
