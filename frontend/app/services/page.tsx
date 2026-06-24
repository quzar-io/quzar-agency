'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceModal } from '@/components/ui/ServiceModal';
import { services } from '@/data/services';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const bentoStyles = [
  { span: 'md:col-span-2 md:row-span-2', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop' },
  { span: 'md:col-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
  { span: 'md:col-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop' },
  { span: 'md:col-span-3 md:row-span-1', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' }
];

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = services.find(s => s.id === selectedServiceId);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-sm tracking-widest text-brand-primary mb-6 uppercase">
          Services // What We Build
        </h1>
        
        <h2 className="text-[36px] md:text-[56px] font-extralight text-white leading-[1.1] mb-16 tracking-[-0.04em]">
          End-to-end expertise for <br/><span className="text-brand-smoke">modern ventures.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => {
            const style = bentoStyles[index % bentoStyles.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setSelectedServiceId(service.id)}
                className={`relative group cursor-pointer rounded-3xl ${style.span}`}
              >
                <SpotlightCard className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col hover:border-brand-primary/50 transition-colors duration-300">
                  {/* Image Section */}
                  <div className="relative flex-grow overflow-hidden bg-black/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={style.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />
                  </div>

                  {/* Info Section */}
                  <div className="relative z-10 p-6 flex flex-col justify-end bg-[#0c0c0e]/80">
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="w-6 h-6 text-brand-primary" />
                      <h3 className="text-2xl font-semibold text-white tracking-tight">{service.title}</h3>
                    </div>
                    <p className="text-brand-text text-sm mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="flex items-center text-brand-primary text-xs font-semibold uppercase tracking-wider">
                      Tap to view more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedServiceId(null)}
        title={selectedService?.title || ''}
        description={selectedService?.description || ''}
        features={['Custom implementation', 'Dedicated support', 'End-to-end delivery']}
        serviceId={selectedService?.id || ''}
      />
    </div>
  );
}
