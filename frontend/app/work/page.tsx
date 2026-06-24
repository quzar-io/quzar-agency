'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { projects, type Project } from '@/data/projects';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!projects || projects.length === 0) return null;

  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-sm tracking-widest text-brand-primary mb-6 uppercase">
          Work // Shipped Products
        </h1>
        <h2 className="text-[36px] md:text-[56px] font-extralight text-white leading-[1.1] mb-16 tracking-[-0.04em]">
          Selected case studies.<br/><span className="text-brand-smoke">Built for scale.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="w-full relative mb-8 md:mb-16 group cursor-pointer"
        onClick={() => setSelectedProject(featuredProject)}
      >
        <SpotlightCard className="w-full relative rounded-sm overflow-hidden border border-white/10">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold text-white uppercase tracking-wider mb-4">
                  Featured Product
                </div>
                <h3 className="text-3xl md:text-6xl font-extralight text-white mb-4 tracking-tight">{featuredProject.title}</h3>
                <p className="text-brand-ash text-md md:text-lg line-clamp-4 md:line-clamp-none">{featuredProject.description}</p>
              </div>
              
              <div className="flex-shrink-0">
                <span className="inline-block border-b border-white text-white uppercase tracking-widest text-xs font-semibold pb-1 group-hover:text-brand-primary group-hover:border-brand-primary transition-colors">
                  VIEW CASE STUDY
                </span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>

      {/* Asymmetrical Grid for Remaining Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {remainingProjects.map((project, idx) => {
          // Create an asymmetrical layout: 
          // alternating between taking 7 columns vs 5 columns.
          const isWide = idx % 2 === 0;
          const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';
          const heightClass = isWide ? 'h-[320px] sm:h-[400px] md:h-[500px]' : 'h-[320px] sm:h-[400px] md:h-[500px]';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group cursor-pointer rounded-sm ${colSpan}`}
              onClick={() => setSelectedProject(project)}
            >
              <SpotlightCard className={`w-full h-full rounded-sm overflow-hidden border border-white/10 bg-[#0c0c0e] relative flex flex-col`}>
                <div className={`${heightClass} w-full relative overflow-hidden bg-black`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-brand-text text-sm md:text-base mb-0 line-clamp-2 md:line-clamp-3">{project.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
