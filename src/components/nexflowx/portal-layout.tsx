'use client';

import React from 'react';
import Image from 'next/image';
import {
  LayoutDashboard,
  UserPlus,
  FileText,
  Key,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react';
import { useAppStore, type PageRoute } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems: {
  label: string;
  page: PageRoute;
  icon: React.ReactNode;
}[] = [
  { label: 'Dashboard', page: 'portal-dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
  { label: 'Onboarding', page: 'portal-onboarding', icon: <UserPlus className="w-4 h-4" /> },
  { label: 'Documents', page: 'portal-documents', icon: <FileText className="w-4 h-4" /> },
  { label: 'API Access', page: 'portal-api-access', icon: <Key className="w-4 h-4" /> },
];

export function PortalLayout({ children }: { children: React.ReactNode }) {
  const { currentPage, navigate, portalSidebarOpen, setPortalSidebarOpen } = useAppStore();

  const isActive = (page: PageRoute) => currentPage === page;

  return (
    <div className="min-h-screen pt-16">
      {/* Mobile hamburger */}
      <button
        onClick={() => setPortalSidebarOpen(!portalSidebarOpen)}
        className="fixed top-20 left-4 z-50 lg:hidden flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg bg-[var(--card)] border border-[var(--border)] shadow-md text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle sidebar"
      >
        {portalSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar overlay on mobile */}
      <AnimatePresence>
        {portalSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setPortalSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 z-40 w-64 bg-[var(--card)] border-r border-[var(--border)] flex flex-col transition-transform duration-200 ${
          portalSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Logo & Portal label */}
        <div className="flex items-center gap-2.5 px-5 pt-5 pb-2">
          <Image
            src="/nexflowx-logo-nav.png"
            alt="NeXFlowX"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            NeXFlowX
          </span>
        </div>
        <p className="px-5 pb-4 text-xs font-medium text-muted-foreground/70 tracking-wide uppercase">
          Partner Portal
        </p>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                navigate(item.page);
                if (window.innerWidth < 1024) setPortalSidebarOpen(false);
              }}
              className={`nx-sidebar-item w-full ${isActive(item.page) ? 'active' : ''}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}

          {/* Divider */}
          <div className="nx-divider my-3" />

          {/* Back to Website */}
          <button
            onClick={() => navigate('home')}
            className="nx-sidebar-item w-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </button>
        </nav>

        {/* User info at bottom */}
        <div className="border-t border-[var(--border)] px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[rgba(47,107,255,0.08)] flex items-center justify-center text-xs font-semibold text-[#2F6BFF]">
              DC
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Demo Company
              </p>
              <p className="text-xs text-muted-foreground/70 truncate">
                demo@nexflowx.tech
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="lg:ml-64 min-h-[calc(100vh-4rem)] nx-safe-bottom">
        <div className="p-6 lg:p-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
