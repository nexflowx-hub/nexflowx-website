'use client';

import { useAppStore, type PageRoute } from '@/lib/store';
import { useTheme } from 'next-themes';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
  Shield,
  Building2,
  Code2,
  LayoutDashboard,
  BookOpen,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks: { label: string; page: PageRoute; icon?: React.ReactNode; children?: { label: string; page: PageRoute }[] }[] = [
  { label: 'Home', page: 'home' },
  { label: 'How It Works', page: 'how-it-works' },
  { label: 'Solutions', page: 'solutions' },
  { label: 'API & Technology', page: 'api-technology', icon: <Code2 className="w-4 h-4" /> },
  {
    label: 'Compliance',
    page: 'compliance',
    icon: <Shield className="w-4 h-4" />,
    children: [
      { label: 'Regulatory', page: 'compliance-regulatory' as PageRoute },
      { label: 'AML & KYC', page: 'compliance-aml-kyc' as PageRoute },
      { label: 'Program', page: 'compliance-program' as PageRoute },
      { label: 'Risk & Controls', page: 'compliance-risk' as PageRoute },
      { label: 'Data Protection', page: 'compliance-data-protection' as PageRoute },
    ],
  },
  { label: 'Partner Portal', page: 'portal-dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
];

export function Navbar() {
  const { currentPage, navigate } = useAppStore();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isCompliancePage = currentPage.startsWith('compliance');
  const isPortalPage = currentPage.startsWith('portal');
  const showFullNav = !isPortalPage;

  const handleNav = (page: PageRoute) => {
    navigate(page);
    setMobileOpen(false);
    setComplianceOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 shrink-0">
              <Image src="/nexflowx-logo-nav.png" alt="NexFlowX" width={28} height={28} className="w-7 h-7" />
              <span className="text-base font-semibold tracking-tight font-[family-name:var(--font-sora)]">
                NexFlowX
              </span>
            </button>

            {/* Desktop Nav */}
            {showFullNav && (
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  if (link.children) {
                    const isActive = isCompliancePage;
                    return (
                      <div key={link.page} className="relative">
                        <button
                          onClick={() => setComplianceOpen(!complianceOpen)}
                          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? 'text-[#2F6BFF] bg-[rgba(47,107,255,0.08)]'
                              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                          }`}
                        >
                          {link.icon}
                          {link.label}
                          <ChevronRight className="w-3.5 h-3.5 opacity-40 rotate-90" />
                        </button>
                        <AnimatePresence>
                          {complianceOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 mt-1 w-52 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-lg p-1.5"
                              onMouseLeave={() => setComplianceOpen(false)}
                            >
                              {link.children.map((child) => (
                                <button
                                  key={child.page}
                                  onClick={() => handleNav(child.page)}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                    currentPage === child.page
                                      ? 'text-[#2F6BFF] bg-[rgba(47,107,255,0.08)]'
                                      : 'text-[var(--muted-foreground)] hover:bg-[rgba(47,107,255,0.04)]'
                                  }`}
                                >
                                  {child.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  const isActive = currentPage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleNav(link.page)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#2F6BFF] bg-[rgba(47,107,255,0.08)]'
                          : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </button>
                  );
                })}
              </nav>
            )}

            {/* Right side */}
            <div className="flex items-center gap-2">
              {showFullNav && (
                <>
                  <button
                    onClick={() => handleNav('compliance-statement')}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Legal
                  </button>
                  <button
                    onClick={() => handleNav('portal-dashboard')}
                    className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold bg-[#2F6BFF] text-white rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Building2 className="w-4 h-4" />
                    Portal
                  </button>
                </>
              )}

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 z-40 bg-[var(--card)] border-b border-[var(--border)] shadow-lg lg:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.page}>
                  <button
                    onClick={() => (link.children ? setComplianceOpen(!complianceOpen) : handleNav(link.page))}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      (currentPage === link.page || (link.children && isCompliancePage))
                        ? 'text-[#2F6BFF] bg-[rgba(47,107,255,0.08)]'
                        : 'text-[var(--muted-foreground)]'
                    }`}
                  >
                    {link.label}
                  </button>
                  {link.children && complianceOpen && (
                    <div className="pl-6 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <button
                          key={child.page}
                          onClick={() => handleNav(child.page)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            currentPage === child.page
                              ? 'text-[#2F6BFF] bg-[rgba(47,107,255,0.08)]'
                              : 'text-[var(--muted-foreground)]'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-[var(--border)] space-y-1">
                <button
                  onClick={() => handleNav('compliance-statement')}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--muted-foreground)]"
                >
                  Legal Pages
                </button>
                <button
                  onClick={() => handleNav('portal-dashboard')}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#2F6BFF]"
                >
                  Partner Portal →
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
