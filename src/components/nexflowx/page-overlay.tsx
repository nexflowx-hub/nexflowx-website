'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function PageOverlay({ isOpen, onClose, children }: PageOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          {/* Content Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-full overflow-y-auto"
          >
            <div className="min-h-full bg-[#0B0C10]">
              {/* Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-4 border-b border-[#333F4D] bg-[#0B0C10]/95 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/nexflowx-logo-nav.png"
                    alt="NeXFlowX"
                    className="h-7 w-7 object-contain"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,102,0.3))' }}
                  />
                  <span className="text-sm font-bold text-white" style={{ fontFamily: 'var(--nx-font-heading)' }}>
                    NeXFlow<span className="text-[#00FF66]">X</span>
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-[#C5C6C7] hover:bg-[#333F4D] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Page Content */}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
