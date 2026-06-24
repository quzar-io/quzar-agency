'use client';

import { motion } from 'motion/react';

export function ValueProp() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-start justify-between mt-12 lg:mt-24">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-start"
      >
         {/* 3D Abstract City Building Decoration */}
         <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-2xl border border-brand-border/30 group">
             {/* Glow effect */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.3)_0%,transparent_60%)] pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
             
             {/* Open Source 3D Image Representation */}
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
               alt="3D Futuristic Building Architecture"
               className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-1000"
               referrerPolicy="no-referrer"
             />
         </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 lg:pl-16"
      >
        <h2 className="text-[36px] md:text-[48px] font-extralight text-white leading-[1.1] mb-6 tracking-[-0.04em]">
          Empower your team.<br/>
          <span className="text-brand-smoke">Transform your business.</span>
        </h2>
        <p className="text-brand-ash text-[15px] md:text-[18px] mb-12 max-w-[60ch] leading-[1.5] tracking-[0.025em]">
          MVPs are just the start. Top organizations know that scaling also depends on solid architecture, performance, and user experience. Quzar helps startups put all these pieces together—in one place.
        </p>
        
        {/* Logos grid placeholder matching the 3x2 grid in the image roughly */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center justify-items-start">
           <div className="text-xl md:text-2xl font-bold font-sans tracking-tighter text-white">stripe</div>
           <div className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white flex items-center gap-2">
             <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full"></div>
             </div>
             twilio
           </div>
           <div className="text-xl md:text-2xl font-bold font-sans tracking-tighter text-white flex items-center gap-1">
             <div className="w-6 h-6 border-[3px] border-white rounded-full"></div>
             Spotify
           </div>
           
           <div className="text-2xl md:text-4xl font-extrabold font-serif italic text-white tracking-tighter">3M</div>
           <div className="text-xl md:text-2xl font-bold font-serif text-white tracking-widest">P&G</div>
           <div className="text-sm md:text-base font-semibold font-sans text-white leading-none uppercase">
             American<br/>Airlines
           </div>
        </div>
      </motion.div>
    </section>
  );
}
