'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/data/projects';
import { useEffect, useState } from 'react';
import { OutlineButton } from '@/components/ui/OutlineButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveImage(project.image);
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
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
            className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] z-50 bg-brand-card border-0 md:border border-brand-border overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-brand-bg/70 border border-brand-border text-brand-heading hover:text-brand-primary transition-colors block backdrop-blur-md text-xs font-semibold tracking-widest uppercase cursor-pointer"
              >
                [ CLOSE ]
              </button>

              <div className="h-64 md:h-96 w-full relative border-b border-brand-border overflow-hidden bg-brand-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeImage || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90"
                />
              </div>

              {project.images && project.images.length > 1 && (
                <div className="flex gap-3 px-8 pt-6 overflow-x-auto">
                  {project.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative h-16 w-28 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                        (activeImage || project.image) === imgUrl
                          ? 'border-brand-primary opacity-100'
                          : 'border-white/15 opacity-50 hover:opacity-80'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgUrl}
                        alt={`${project.title} preview ${idx + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <p className="text-brand-primary text-xs uppercase tracking-widest mb-2 font-semibold">
                    {project.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 text-brand-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 text-brand-text">
                  <p className="text-base md:text-lg leading-relaxed">{project.fullDescription}</p>
                </div>

                {project.caseStudy && project.caseStudy.length > 0 && (
                  <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.caseStudy.map((block, idx) => (
                      <div
                        key={idx}
                        className="p-5 bg-white/[0.03] border border-white/10 flex flex-col"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-primary mb-2">
                          0{idx + 1} // {block.title}
                        </span>
                        <p className="text-sm text-brand-text leading-relaxed">{block.body}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-lg text-brand-heading mb-4 font-semibold uppercase tracking-wider">
                    Key Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex flex-row items-start gap-3 text-sm text-brand-text">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-brand-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <OutlineButton
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8"
                  >
                    View Live Project ↗
                  </OutlineButton>
                  {project.githubLink && project.githubLink !== project.liveLink && (
                    <OutlineButton
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8"
                    >
                      Source / Architecture ↗
                    </OutlineButton>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
