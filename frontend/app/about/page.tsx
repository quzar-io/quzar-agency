'use client';

import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const timeline = [
  { year: '2023', text: 'Started building digital products & MVPs. Validated first ideas with initial startups.' },
  { year: '2024', text: 'Shifted focus entirely onto AI & LLM based applications. Mastered the modern AI stack.' },
  { year: '2025', text: 'Expanded to Full-Stack enterprise solutions for startups requiring scale and security.' },
  { year: '2026', text: 'Launched Quzar — The elite agency for founders who want to build like the best.' },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      
      {/* 1. Split Layout Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-center gap-16 mb-32"
      >
        <div className="w-full lg:w-1/2">
          <h1 className="text-sm tracking-widest text-brand-primary mb-6 uppercase">
            About // The Story
          </h1>
          <h2 className="text-4xl md:text-6xl font-extralight text-white leading-[1.1] mb-8 tracking-[-0.04em]">
            I build things <br/><span className="text-brand-smoke font-bold">that work.</span>
          </h2>
          <p className="text-xl text-brand-text leading-relaxed max-w-2xl">
            Building software since 2023, specializing in shipping high-quality minimum viable products (MVPs) quickly. I help startup founders validate their ideas by turning complex AI models and modern web stacks into working, production-ready applications.
          </p>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-square max-w-md mx-auto relative rounded-full overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(167,139,250,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.2)_0%,transparent_70%)] z-10 pointer-events-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
              alt="Abstract AI Representation"
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
            />
          </div>
        </div>
      </motion.div>

      {/* 2. Stats Bento Grid */}
      <div className="mb-32">
        <h3 className="text-2xl font-semibold text-white tracking-tight mb-8">By the numbers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative group"
          >
            <SpotlightCard className="w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] p-8 flex flex-col justify-end">
               <div className="absolute top-0 right-0 p-8">
                 <svg className="w-12 h-12 text-brand-primary opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <span className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter">5+</span>
               <span className="text-brand-smoke text-sm md:text-base uppercase tracking-widest font-semibold">Shipped Projects</span>
            </SpotlightCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 relative group"
          >
            <SpotlightCard className="w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] p-8 flex flex-col justify-end">
               <span className="text-6xl font-bold text-white mb-2 tracking-tighter">3+</span>
               <span className="text-brand-smoke text-sm uppercase tracking-widest font-semibold">Happy Clients</span>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 relative group"
          >
            <SpotlightCard className="w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] p-8 flex items-center justify-between">
               <div className="flex flex-col">
                 <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">12+</span>
                 <span className="text-brand-smoke text-sm uppercase tracking-widest font-semibold">Working Demos & MVPs built</span>
               </div>
               <div className="hidden md:flex gap-2">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="w-2 h-8 rounded-full bg-brand-primary/40 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                 ))}
               </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      {/* 3. Interactive Vertical Timeline */}
      <div>
        <h3 className="text-2xl font-semibold text-white tracking-tight mb-16 text-center">The Journey</h3>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: 'spring', damping: 20 }}
                className={`relative mb-24 last:mb-0 w-full flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-brand-primary -translate-x-[7px] md:-translate-x-[8px] border-4 border-[#09090b]" />
                
                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <h4 className="text-brand-primary text-2xl font-bold mb-3 tracking-tighter">{item.year}</h4>
                  <p className="text-brand-text text-lg leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
