/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onDiscoverClick: () => void;
  price: number;
}

export default function Hero({ onDiscoverClick, price }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden flex items-end bg-black"
    >
      {/* Cinematic loop background video from Google Flow */}
      <motion.div
        id="hero-bg-container"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          src="https://labs.google/fx/api/og-video/shared/6f3b969e-069b-4fd3-a633-ba9e7c5d4916"
          poster="https://labs.google/fx/api/og-video/thumbnail/shared/6f3b969e-069b-4fd3-a633-ba9e7c5d4916"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.7]"
        />
        {/* Soft elegant gradient overlays for perfect typographic readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10" />
      </motion.div>

      {/* Main typographic body content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        
        {/* Left main texts */}
        <div className="md:col-span-8 space-y-4 text-left" id="hero-left-text">
          <motion.p
            id="hero-category-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] md:text-xs font-mono tracking-[0.55em] text-neutral-300 uppercase"
          >
            NEURON 1 × AURA
          </motion.p>

          <motion.h1
            id="hero-display-headline"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight max-w-2xl text-balance"
          >
            Build your team with Aura.
            <br />
            Synchronize global nodes natively.
          </motion.h1>
        </div>

        {/* Right contextual shop block */}
        <div className="md:col-span-4 flex flex-col md:items-end justify-between h-full pt-8 md:pt-0" id="hero-right-details">
          <motion.div
            id="hero-buy-action-panel"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-4 md:gap-8 bg-black/60 backdrop-blur-md p-4 rounded-full border border-white/10 md:self-end"
          >
            <span className="font-sans text-sm font-medium tracking-widest text-neutral-200 pl-4 w-max">
              ${price.toLocaleString()}/mo
            </span>
            <button
              id="hero-buy-btn"
              onClick={onDiscoverClick}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wider hover:bg-neutral-200 active:scale-95 transition-all focus:outline-none uppercase"
            >
              Configure
            </button>
          </motion.div>
        </div>

      </div>

      {/* Discrete bottom scroll assistant */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-neutral-400 font-mono tracking-[0.4em] uppercase text-[10px] select-none" id="scroll-discover-hint">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={12} className="text-white" />
        </motion.div>
        <button
          onClick={onDiscoverClick}
          className="hover:text-white transition-colors uppercase outline-none focus:outline-none"
        >
          Scroll to discover
        </button>
      </div>
    </section>
  );
}
