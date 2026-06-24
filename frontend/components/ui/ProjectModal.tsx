'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/data/projects';
import { useEffect } from 'react';
import { OutlineButton } from '@/components/ui/OutlineButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-bg/90 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-3xl h-full md:h-auto md:max-h-[90vh] z-50 bg-brand-card border-0 md:border border-brand-border overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-brand-bg/50 border border-brand-border text-brand-heading hover:text-brand-primary transition-colors block backdrop-blur-md text-xs font-semibold tracking-widest uppercase"
              >
                [ CLOSE ]
              </button>
              
              <div className="h-64 md:h-80 w-full relative border-b border-brand-border overflow-hidden bg-brand-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-brand-heading mb-2">{project.title}</h2>
                  <p className="text-brand-primary text-sm uppercase tracking-widest">{project.category}</p>
                </div>

                <div className="mb-8 text-brand-text">
                  <p className="text-lg leading-relaxed">{project.fullDescription}</p>
                </div>

                <div className="mb-12">
                  <h3 className="text-xl text-brand-heading mb-4 font-medium">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex flex-row items-start gap-3 text-brand-text">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-brand-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <OutlineButton
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8"
                >
                  View Live ↗
                </OutlineButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
