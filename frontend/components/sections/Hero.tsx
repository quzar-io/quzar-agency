"use client";

import Link from "next/link";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { div } from "motion/react-client";
import { FoldButton } from "@/components/ui/FoldButton";
import { OutlineButton } from "@/components/ui/OutlineButton";

const SideRays = dynamic(() => import("@/components/ui/SideRays"), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Background constrained to Hero section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-100">
        <SideRays
          className="absolute inset-0 w-full h-full mix-blend-screen"
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1.0}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[44px] pb-16 flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] justify-center lg:justify-start">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
        >
          <span className="text-white font-semibold mb-4 tracking-[0.05em] text-[12px] uppercase">
            Quzar for startups
          </span>
          <h1 className="text-[56px] md:text-[78px] lg:text-[113px] leading-[0.81] font-extralight tracking-[-0.04em] mb-8 text-white">
            Build like the best.
          </h1>

          <div className="text-[15px] sm:text-[18px] text-brand-text font-normal space-y-2 mb-10 max-w-[60ch]">
            <p>Increase developer velocity. Secure every step.</p>
            <p>
              Automate entire workflows. From idea to working demo in 2 weeks.
            </p>
            <p>
              Trusted by{" "}
              <span className="text-brand-primary">over 3+ happy clients</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <FoldButton href="/contact">
              Start your MVP
            </FoldButton>
            <OutlineButton href="/work">
              See Our Work
            </OutlineButton>
          </div>
        </motion.div>

        {/* Right Column - Illustration / Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[50%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative z-10 pointer-events-none"
        >
          <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-[800px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.2)_0%,transparent_60%)] pointer-events-none" />
            <img
              src="/globe.png"
              alt="3D Futuristic Globe"
              className="absolute w-[130%] lg:w-[120%] max-w-none left-1/2 top-[30%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 saturate-150 animate-[spin_120s_linear_infinite]"
            />
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-14 bg-transparent backdrop-blur-sm border border-white/10 pointer-events-auto relative z-10 mt-32 sm:mt-48 lg:mt-[320px] p-4 sm:p-[12px] rounded-sm text-[23px] leading-[17px] text-center font-normal italic no-underline font-mono min-h-[101.125px] w-full sm:w-[482.375px] max-w-full mx-auto">
              <div className="flex flex-col items-center">
                <div className="text-[28px] sm:text-[32px] md:text-[44px] font-extralight tracking-[-0.04em] text-white leading-[1.1] mb-1">
                  3+
                </div>
                <div className="text-[7px] sm:text-[8px] tracking-[0.05em] text-brand-text uppercase font-semibold">
                  Years Building
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[28px] sm:text-[32px] md:text-[44px] font-extralight tracking-[-0.04em] text-white leading-[1.1] mb-1">
                  6
                </div>
                <div className="text-[7px] sm:text-[8px] tracking-[0.05em] text-brand-text uppercase font-semibold">
                  Products Shipped
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[28px] sm:text-[32px] md:text-[44px] font-extralight tracking-[-0.04em] text-white leading-[1.1] mb-1">
                  3+
                </div>
                <div className="text-[7px] sm:text-[8px] tracking-[0.05em] text-brand-text uppercase font-semibold">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
