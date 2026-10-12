'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { FoldButton } from '@/components/ui/FoldButton';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'WORK', path: '/work' },
  { name: 'TEAM', path: '/team' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 w-full h-[72px] bg-brand-void/80 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-12 border-b border-white/5">
        <Link href="/" className="text-[18px] font-semibold text-white relative z-[60] flex items-center gap-2" onClick={() => setIsOpen(false)}>
          {/* Minimal line-art icon */}
          <div className="w-5 h-5 border-[1.5px] border-brand-lichen transform rotate-45"></div>
          QUZAR
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-normal tracking-[0.021em] text-brand-smoke">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "transition-colors hover:text-white uppercase",
                pathname === link.path ? "text-white" : "text-brand-smoke"
              )}
            >
              {link.name}
            </Link>
          ))}
          <FoldButton
            href="/contact"
            className="ml-4"
          >
            START YOUR MVP
          </FoldButton>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-[60] flex items-center justify-center p-2 -mr-2 text-white hover:text-brand-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-brand-void flex flex-col items-center justify-center px-6 pt-16"
          >
            <div className="flex flex-col items-center gap-8 text-[18px] font-semibold tracking-[0.021em] text-brand-smoke w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "transition-colors hover:text-white uppercase",
                    pathname === link.path ? "text-white" : "text-brand-smoke"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <FoldButton
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6"
              >
                START YOUR MVP
              </FoldButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
