'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { FoldButton } from '@/components/ui/FoldButton';
import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  serviceId: string;
}

export function ServiceModal({ isOpen, onClose, title, description, features, serviceId }: ServiceModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full h-full sm:h-auto max-w-2xl sm:max-h-[85vh] bg-[#0c0c0e] border-0 sm:border border-white/10 rounded-none sm:rounded-sm shadow-2xl flex flex-col overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-brand-text hover:text-white transition-colors text-xs font-semibold tracking-widest uppercase"
                aria-label="Close modal"
              >
                [ CLOSE ]
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-10 custom-scrollbar">
              <div className="mb-4 inline-block px-3 py-1 rounded-sm bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wider uppercase">
                Service Detail
              </div>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-white mb-4">
                {title}
              </h2>
              <p className="text-brand-text text-lg leading-relaxed mb-8">
                {description}
              </p>

              <h3 className="text-white font-semibold text-xl mb-4">What's included</h3>
              <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-brand-ash">
                    <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Extra spacing so content isn't hidden behind sticky footer on mobile if needed */}
              <div className="h-4"></div>
            </div>

            {/* Sticky Footer CTA */}
            <div className="p-6 border-t border-white/10 bg-[#0c0c0e]/95 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-brand-text hidden sm:block">
                Ready to accelerate your growth?
              </div>
              <FoldButton
                href={`/contact?service=${serviceId}`}
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                Start This Project
              </FoldButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
