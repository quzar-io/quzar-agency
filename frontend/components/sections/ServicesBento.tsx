'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceModal } from '@/components/ui/ServiceModal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import GlareHover from '@/components/ui/GlareHover';

interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  features: string[];
  spanClasses: string;
}

const services: ServiceData[] = [
  {
    id: 'ai-ml',
    title: 'AI & ML Integration',
    shortDesc: 'Embed intelligent models directly into your product to automate tasks and delight users.',
    fullDesc: 'We build custom AI solutions that perfectly align with your business goals. From natural language processing to predictive analytics, we help you leverage the power of modern machine learning models (like OpenAI, Anthropic, or custom fine-tuned local models).',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    features: ['Custom LLM integrations', 'Automated workflows & agents', 'Data pipeline engineering', 'AI-first product design'],
    spanClasses: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'mvp',
    title: 'Rapid MVPs',
    shortDesc: 'From zero to production-ready demo in 2 weeks.',
    fullDesc: 'Stop waiting months to test your ideas. We use modern, scalable tech stacks to rapidly build and deploy your Minimum Viable Product so you can get user feedback and secure funding faster.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    features: ['Go-to-market strategy', 'Rapid prototyping', 'Scalable architecture', 'Continuous deployment setup'],
    spanClasses: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'enterprise',
    title: 'Cloud Architecture',
    shortDesc: 'Secure, resilient, and globally distributed systems.',
    fullDesc: 'We design and implement robust cloud architectures that scale with your users. Whether it’s AWS, GCP, or modern edge networks, we ensure your infrastructure is secure, performant, and cost-effective.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    features: ['Microservices design', 'Database optimization', 'Security & Compliance audits', 'Performance monitoring'],
    spanClasses: 'md:col-span-1 md:row-span-1'
  }
];

export function ServicesBento() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <>
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[48px] font-extralight text-white leading-[1.1] mb-4 tracking-[-0.04em]"
          >
            Everything you need to <span className="text-brand-primary">scale</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-ash text-[15px] md:text-[18px] max-w-[60ch] leading-[1.5] tracking-[0.025em] mx-auto md:mx-0"
          >
            We provide end-to-end development services tailored for modern startups and forward-thinking enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedService(service)}
              className={`relative group cursor-pointer rounded-sm ${service.spanClasses}`}
            >
              <GlareHover
                borderRadius="0.125rem"
                glareColor="#ffffff"
                glareOpacity={0.15}
                className="w-full h-full"
              >
                <SpotlightCard className="w-full h-full rounded-sm overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col hover:border-brand-primary/50 transition-colors duration-300">
                  {/* Image Section - Takes up the majority of the card */}
                  <div className="relative flex-grow overflow-hidden bg-black/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />
                  </div>

                  {/* Label / Info Section - Below the image */}
                  <div className="relative z-10 p-6 flex flex-col justify-end bg-[#0c0c0e]/80">
                    <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-brand-text text-sm mb-4 line-clamp-2">{service.shortDesc}</p>
                    
                    <div className="flex items-center text-brand-primary text-xs font-semibold uppercase tracking-wider">
                      VIEW DETAILS +
                    </div>
                  </div>
                </SpotlightCard>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </section>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
        description={selectedService?.fullDesc || ''}
        features={selectedService?.features || []}
        serviceId={selectedService?.id || ''}
      />
    </>
  );
}
