'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Terminal,
  Cpu,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  Search,
  GitBranch,
  Globe,
} from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { FoldButton } from '@/components/ui/FoldButton';
import { OutlineButton } from '@/components/ui/OutlineButton';
import { founderProfile } from '@/data/team';
import { projects } from '@/data/projects';

type ActionState = 'idle' | 'loading' | 'success' | 'error';

const domainIcons: Record<string, typeof Terminal> = {
  'ai-rag': Cpu,
  fullstack: Terminal,
  'cloud-sec': ShieldCheck,
  'ui-seo': Layers,
};

const gridOverlayStyle = {
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
  backgroundSize: '20px 20px',
};

export default function TeamPage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeDomainId, setActiveDomainId] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copyState, setCopyState] = useState<ActionState>('idle');

  const springTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 260, damping: 26 };

  const fadeTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45 };

  const filteredDomains = founderProfile.domains.filter((item) => {
    const matchesTab = activeDomainId === 'ALL' || item.id === activeDomainId;
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return matchesTab;

    const searchableText = [
      item.code,
      item.domain,
      item.roleTitle,
      item.summary,
      ...item.stack,
      ...item.standards,
    ]
      .join(' ')
      .toLowerCase();

    return matchesTab && searchableText.includes(normalizedQuery);
  });

  const handleCopyProfile = async () => {
    if (copyState === 'loading') return;
    setCopyState('loading');

    await new Promise((resolve) => setTimeout(resolve, 450));

    try {
      const profileJson = JSON.stringify(
        {
          name: founderProfile.name,
          role: founderProfile.role,
          organization: 'Quzar',
          headcount: 1,
          url: founderProfile.canonicalUrl,
          email: founderProfile.email,
        },
        null,
        2
      );
      await navigator.clipboard.writeText(profileJson);
      setCopyState('success');
      setTimeout(() => setCopyState('idle'), 2500);
    } catch {
      setCopyState('error');
      setTimeout(() => setCopyState('idle'), 2500);
    }
  };

  const localProofProjects = projects.filter((p) =>
    p.image.startsWith('/assets/')
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* 1. Header & Founder Profile */}
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={fadeTransition}
        className="mb-24"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          <div className="w-full lg:w-7/12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary mb-4">
              TEAM // LEADERSHIP &amp; ENGINEERING
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight text-white leading-[1.02] tracking-[-0.04em] mb-6">
              One engineer.{' '}
              <span className="font-black text-white block sm:inline">
                Full accountability.
              </span>
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-brand-text leading-relaxed max-w-2xl">
              {founderProfile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 4-Cell Key Metrics Grid */}
          <div className="w-full lg:w-5/12 grid grid-cols-2 gap-3">
            {founderProfile.metrics.map((metric) => (
              <SpotlightCard
                key={metric.code}
                className="relative rounded-none border border-white/15 bg-brand-void p-5 flex flex-col justify-between min-h-[140px]"
              >
                {/* 20px Technical Coordinate Grid Underlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-15 select-none"
                  aria-hidden="true"
                  style={gridOverlayStyle}
                />
                {/* 4 Optical Corner L-Brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-brand-primary z-20 pointer-events-none" aria-hidden="true" />

                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke tabular-nums">
                    {metric.code}
                  </span>
                  <span className="w-1.5 h-1.5 bg-brand-lichen rounded-none" />
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums leading-none mb-1.5">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white font-semibold">
                    {metric.label}
                  </div>
                  <p className="text-xs text-brand-smoke mt-1">
                    {metric.detail}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Founder Master Card (Container Query + Viewfinder Geometry) */}
        <div className="operator-card-container">
          <SpotlightCard className="relative w-full rounded-none border border-white/20 bg-brand-void p-6 sm:p-8">
            {/* 20px Technical Coordinate Grid Underlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15 select-none"
              aria-hidden="true"
              style={gridOverlayStyle}
            />
            {/* 4 Optical Corner L-Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-primary z-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-primary z-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-primary z-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-primary z-30 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 operator-card-grid">
              {/* Left Column: Architectural Schematic & Single-Word Status Badge */}
              <div className="w-full sm:w-64 flex-shrink-0 flex flex-col justify-between border border-white/15 bg-brand-void p-4 rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke tabular-nums">
                    HEADCOUNT: {founderProfile.teamSize}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none" />
                    {founderProfile.status}
                  </span>
                </div>

                {/* Custom SVG System Architecture Diagram (No Stock Assets) */}
                <div className="relative aspect-square w-full flex items-center justify-center my-2 border border-white/10 bg-brand-void overflow-hidden rounded-none">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full p-4 text-white/25"
                    fill="none"
                    aria-label="Single-Principal Engineering Architecture Diagram"
                  >
                    <rect
                      x="12"
                      y="12"
                      width="176"
                      height="176"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="12"
                      y1="100"
                      x2="188"
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="100"
                      y1="12"
                      x2="100"
                      y2="188"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="68"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="44"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="6 4"
                    />
                    <rect
                      x="26"
                      y="26"
                      width="12"
                      height="12"
                      className="stroke-brand-lichen"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="162"
                      y="26"
                      width="12"
                      height="12"
                      className="stroke-brand-primary"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="26"
                      y="162"
                      width="12"
                      height="12"
                      className="stroke-brand-primary"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="162"
                      y="162"
                      width="12"
                      height="12"
                      className="stroke-brand-lichen"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="38"
                      y1="38"
                      x2="78"
                      y2="78"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="162"
                      y1="38"
                      x2="122"
                      y2="78"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="38"
                      y1="162"
                      x2="78"
                      y2="122"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="162"
                      y1="162"
                      x2="122"
                      y2="122"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <rect
                      x="76"
                      y="76"
                      width="48"
                      height="48"
                      className="fill-brand-void stroke-white"
                      strokeWidth="1.5"
                    />
                    <text
                      x="100"
                      y="105"
                      textAnchor="middle"
                      className="fill-white font-mono text-[16px] font-bold tracking-widest"
                    >
                      PR
                    </text>
                  </svg>
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between font-mono text-[9px] uppercase tracking-widest text-brand-smoke">
                    <span>ARCHITECT: PR</span>
                    <span>DOMAINS: 04</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke">
                    ORGANIZATION STRUCTURE
                  </span>
                  <span className="font-mono text-xs text-white font-semibold">
                    Single-Principal Studio
                  </span>
                </div>
              </div>

              {/* Right Column: Identity, Specifications & Bracketed Actions */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary mb-1">
                        {founderProfile.role}
                      </p>
                      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.04em]">
                        {founderProfile.name}
                      </h2>
                    </div>
                    <a
                      href={founderProfile.canonicalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-transparent hover:bg-white hover:text-black active:translate-y-[1px] transition-colors font-mono text-xs uppercase tracking-[0.2em] text-white rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      OPEN PIYUSHRATAN.IN
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Metadata Specification Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                    <div className="border border-white/10 p-3 bg-brand-void rounded-none">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke block mb-1">
                        LOCATION
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {founderProfile.location}
                      </span>
                    </div>
                    <div className="border border-white/10 p-3 bg-brand-void rounded-none">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke block mb-1">
                        TIMEZONE
                      </span>
                      <span className="text-sm font-semibold text-white tabular-nums">
                        {founderProfile.timezone}
                      </span>
                    </div>
                    <div className="border border-white/10 p-3 bg-brand-void rounded-none">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke block mb-1">
                        CONTACT EMAIL
                      </span>
                      <a
                        href={`mailto:${founderProfile.email}`}
                        className="text-sm font-semibold text-brand-primary hover:underline"
                      >
                        {founderProfile.email}
                      </a>
                    </div>
                  </div>

                  {/* Engineering Principle */}
                  <div className="border-l-2 border-brand-lichen bg-white/[0.02] p-4 mb-6 rounded-none">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke block mb-1">
                      ENGINEERING PRINCIPLE
                    </span>
                    <p className="text-sm sm:text-base text-white font-medium">
                      &ldquo;{founderProfile.principle}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Verifiable Profiles & JSON Copy Trigger */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {founderProfile.links.map((item) => (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 border border-white/15 bg-brand-void hover:border-white/40 active:translate-y-[1px] text-xs font-mono uppercase tracking-wider text-white transition-all rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <span className="text-brand-smoke">{item.label}:</span>
                        <span>{item.handle}</span>
                        <ArrowUpRight className="w-3 h-3 text-brand-primary" />
                      </a>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyProfile}
                    disabled={copyState === 'loading'}
                    className="min-w-[210px] inline-flex items-center justify-center px-5 py-2.5 border border-white/20 bg-white text-black hover:bg-brand-primary hover:text-white hover:border-brand-primary active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 font-mono text-xs font-semibold uppercase tracking-[0.2em] rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {copyState === 'idle' && 'COPY PROFILE JSON'}
                    {copyState === 'loading' && 'COPYING...'}
                    {copyState === 'success' && 'PROFILE COPIED'}
                    {copyState === 'error' && 'COPY FAILED'}
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </motion.section>

      {/* 2. Interactive Engineering Responsibilities Matrix */}
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={fadeTransition}
        className="mb-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary mb-2">
              ENGINEERING ARCHITECTURE // RESPONSIBILITIES
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight text-white tracking-[-0.04em]">
              Four engineering domains.{' '}
              <span className="font-bold text-brand-smoke">
                One builder.
              </span>
            </h2>
          </div>

          {/* Accessible Form Filter Control */}
          <div className="w-full md:w-80 space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="domainFilter"
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary"
              >
                FILTER BY STACK OR DOMAIN
              </label>
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-smoke tabular-nums">
                {filteredDomains.length} / {founderProfile.domains.length}
              </span>
            </div>
            <div className="relative flex items-center border border-white/20 hover:border-white/40 focus-within:border-brand-primary bg-brand-void px-3 py-2 rounded-none transition-colors">
              <Search className="w-3.5 h-3.5 text-brand-smoke mr-2 flex-shrink-0" />
              <input
                id="domainFilter"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Next.js, Python, RAG"
                className="w-full text-xs font-mono text-white placeholder:text-brand-smoke bg-transparent rounded-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-brand-smoke hover:text-white active:translate-y-[1px] ml-2 font-mono text-[10px] uppercase tracking-widest cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sharp 0px Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeDomainId === 'ALL'}
            onClick={() => setActiveDomainId('ALL')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] border transition-colors rounded-none active:translate-y-[1px] cursor-pointer tabular-nums ${
              activeDomainId === 'ALL'
                ? 'bg-white text-black border-white font-semibold'
                : 'bg-brand-void text-brand-smoke border-white/15 hover:border-white/40 hover:text-white'
            }`}
          >
            ALL DOMAINS ({founderProfile.domains.length})
          </button>
          {founderProfile.domains.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeDomainId === item.id}
              onClick={() => setActiveDomainId(item.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] border transition-colors rounded-none active:translate-y-[1px] cursor-pointer ${
                activeDomainId === item.id
                  ? 'bg-white text-black border-white font-semibold'
                  : 'bg-brand-void text-brand-smoke border-white/15 hover:border-white/40 hover:text-white'
              }`}
            >
              {item.code} // {item.domain.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Domain Cards or Actionable Empty State */}
        {filteredDomains.length === 0 ? (
          <div className="relative border border-white/15 bg-brand-void p-12 text-center rounded-none">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-smoke mb-2">
              FILTER RESULT // 0 MATCHES
            </p>
            <p className="text-base text-white mb-6">
              No engineering domain matched &ldquo;{searchQuery}&rdquo;. Clear the search filter to view all responsibilities.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveDomainId('ALL');
                setSearchQuery('');
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 border border-white/20 bg-white text-black hover:bg-brand-primary hover:text-white hover:border-brand-primary active:translate-y-[1px] transition-colors font-mono text-xs font-semibold uppercase tracking-[0.2em] rounded-none cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDomains.map((item) => {
              const IconComponent = domainIcons[item.id] || Terminal;
              return (
                <motion.div
                  key={item.id}
                  layout={!prefersReducedMotion}
                  transition={springTransition}
                >
                  <SpotlightCard className="relative h-full rounded-none border border-white/15 hover:border-white/35 bg-brand-void p-6 flex flex-col justify-between transition-colors duration-300 group">
                    {/* 20px Technical Coordinate Grid Underlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-15 select-none"
                      aria-hidden="true"
                      style={gridOverlayStyle}
                    />
                    {/* 4 Corner L-Brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
                    {/* Left-Edge Hover Indicator Bar */}
                    <div className="w-1 h-full bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top absolute top-0 left-0 z-20 pointer-events-none" aria-hidden="true" />

                    <div className="relative z-10">
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 border border-white/15 bg-white/[0.03] flex items-center justify-center rounded-none">
                            <IconComponent className="w-5 h-5 text-brand-primary" />
                          </div>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary block">
                              {item.code} // {item.roleTitle}
                            </span>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {item.domain}
                            </h3>
                          </div>
                        </div>

                        {/* Single-Word Status Badge per Directive 20 Section 8.1 */}
                        <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-white/20 bg-white/5 text-white rounded-none flex-shrink-0">
                          {item.status}
                        </span>
                      </div>

                      {/* Lead Attribution & Summary */}
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-brand-smoke mb-3">
                        <span>ENGINEERING LEAD: {item.lead}</span>
                        <span>DIRECT EXECUTION</span>
                      </div>
                      <p className="text-sm text-brand-text leading-relaxed mb-5">
                        {item.summary}
                      </p>

                      {/* Implementation Standards */}
                      <div className="mb-5">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke block mb-2">
                          IMPLEMENTATION STANDARDS
                        </span>
                        <ul className="space-y-1.5">
                          {item.standards.map((standard, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-white flex items-start gap-2"
                            >
                              <span className="font-mono text-brand-primary tabular-nums mt-0.5">
                                0{idx + 1}.
                              </span>
                              <span>{standard}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Stack & Shipped Systems Footer */}
                    <div className="relative z-10 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 border border-white/15 bg-white/[0.02] font-mono text-[10px] uppercase tracking-wider text-brand-ash rounded-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-smoke">
                          PRODUCTION PROOF
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {item.shippedSystems.map((sys) => (
                            <a
                              key={sys.name}
                              href={sys.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs text-white hover:text-brand-primary transition-colors"
                            >
                              <GitBranch className="w-3 h-3 text-brand-lichen" />
                              {sys.name}
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.section>

      {/* 3. Studio Execution Comparison Table */}
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={fadeTransition}
        className="mb-24"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary mb-2">
          EXECUTION MODEL // STUDIO COMPARISON
        </p>
        <h2 className="text-3xl sm:text-5xl font-extralight text-white tracking-[-0.04em] mb-8">
          Direct engineering vs.{' '}
          <span className="font-bold text-brand-smoke">
            multi-layer agencies.
          </span>
        </h2>

        <div className="relative border border-white/15 bg-brand-void overflow-x-auto rounded-none">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-primary z-20 pointer-events-none" aria-hidden="true" />

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/15 bg-white/[0.02]">
                <th className="p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-smoke">
                  OPERATIONAL DIMENSION
                </th>
                <th className="p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-smoke">
                  TRADITIONAL AGENCY (10-50 STAFF)
                </th>
                <th className="p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary">
                  QUZAR STUDIO (PIYUSH RATAN)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {founderProfile.comparison.map((row) => (
                <tr key={row.metric} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-mono text-xs uppercase tracking-wider text-white font-semibold">
                    {row.metric}
                  </td>
                  <td className="p-4 text-brand-smoke">
                    {row.traditionalAgency}
                  </td>
                  <td className="p-4 text-white font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-lichen mr-2 align-middle rounded-none" />
                    {row.quzarStudioModel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 4. Shipped Production Systems */}
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={fadeTransition}
        className="mb-24"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary mb-2">
              PRODUCTION RECORD // SHIPPED SYSTEMS
            </p>
            <h2 className="text-3xl sm:text-5xl font-extralight text-white tracking-[-0.04em]">
              Built and deployed by Piyush Ratan.
            </h2>
          </div>
          <OutlineButton href="/work">
            VIEW CASE STUDIES
          </OutlineButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {localProofProjects.map((project) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="relative group block border border-white/15 bg-brand-void hover:border-white/40 active:translate-y-[1px] transition-all p-4 rounded-none proof-node-card has-image"
            >
              <div className="w-1 h-full bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top absolute top-0 left-0 z-20 pointer-events-none" aria-hidden="true" />
              <div className="w-24 h-16 overflow-hidden border border-white/15 bg-brand-void flex-shrink-0 rounded-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary truncate">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-smoke group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white truncate mt-0.5">
                  {project.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand-smoke truncate mt-1">
                  LEAD: PIYUSH RATAN
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* 5. Direct Collaboration CTA */}
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={fadeTransition}
      >
        <SpotlightCard className="relative rounded-none border border-white/20 bg-brand-void p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* 20px Technical Coordinate Grid Underlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15 select-none"
            aria-hidden="true"
            style={gridOverlayStyle}
          />
          {/* 4 Corner L-Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-primary z-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-primary z-20 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">
              PROJECT INQUIRY // DIRECT COLLABORATION
            </p>
            <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-[-0.04em] mb-3">
              Work directly with{' '}
              <span className="font-black text-white">Piyush Ratan.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-text">
              Share your product requirements, AI workflow goals, or web application timeline. Every inquiry goes directly to the founder and principal engineer.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
            <FoldButton href="/contact">
              START YOUR MVP
            </FoldButton>
            <OutlineButton
              href="https://piyushratan.in"
              target="_blank"
              rel="noreferrer"
            >
              VISIT PIYUSHRATAN.IN
            </OutlineButton>
          </div>
        </SpotlightCard>
      </motion.section>
    </div>
  );
}
