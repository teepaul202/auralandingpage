import { motion } from 'motion/react';
import { Play, Sun, Moon } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Hero({ isDarkMode, toggleDarkMode }: HeroProps) {

  return (
    <div 
      id="hero-section" 
      className={`relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden transition-colors duration-500 py-16 md:py-24 rounded-none border-none ${
        isDarkMode ? 'bg-[#111111]' : 'bg-white'
      }`}
    >
      <style>{`
        #hero-section, 
        #hero-section p, 
        #hero-section button, 
        #hero-section span,
        #hero-section div,
        #hero-section a {
          font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
        }
        #headline, #headline * {
          font-family: "Playfair Display", Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
      `}</style>
      
      {/* Absolute Full-Cover Background Image with fade and blur gradient filters */}
      <div id="hero-image-bg" className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex justify-end">
        <img
          id="aura-background-image"
          src={
            isDarkMode 
              ? "https://labs.google/fx/api/og-image/shared/d5b56ccf-a719-471e-a62d-42067a311676" 
              : "https://labs.google/fx/api/og-image/shared/d1943fdc-bbf1-4df4-9c93-ae45844c2564"
          }
          className="w-full h-full md:w-[65%] object-cover object-center md:object-right block opacity-100 mix-blend-normal transition-all duration-700"
          alt="Aura Background"
          referrerPolicy="no-referrer"
        />
        
        {/* Soft layout blend fades to blend standard high-res image edges perfectly into clean base background */}
        <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#111111] via-[#111111]/80 md:via-[#111111]/20 to-transparent' 
            : 'bg-gradient-to-r from-white via-white/80 md:via-white/20 to-transparent'
        }`} />
        <div className={`absolute inset-y-0 left-0 w-full md:w-[50%] pointer-events-none transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#111111] via-[#111111]/95 to-transparent' 
            : 'bg-gradient-to-r from-white via-white/95 to-transparent'
        }`} />
        <div className={`absolute inset-x-0 bottom-0 h-40 pointer-events-none transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent' 
            : 'bg-gradient-to-t from-white via-white/80 to-transparent'
        }`} />
        <div className={`absolute inset-x-0 top-0 h-32 pointer-events-none transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-[#111111] via-[#111111]/50 to-transparent' 
            : 'bg-gradient-to-b from-white via-white/50 to-transparent'
        }`} />
        
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative z-10 flex flex-col items-start">
        <div id="hero-content" className="relative flex flex-col items-start gap-6 max-w-xl">
          
          {/* Minimalism Category Header - lowercase single word */}
          <motion.div
            id="brand-header-mini"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-sans text-sm font-medium tracking-[0.2em] leading-none transition-colors duration-500 ${
              isDarkMode ? 'text-stone-300' : 'text-stone-900'
            }`}
          >
            aura
          </motion.div>

          {/* Heading - Styled like Reference style with elegant title elements */}
          <motion.div
            id="heading-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h1 
              id="headline" 
              className={`font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.08] tracking-tight transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-stone-950'
              }`}
            >
              Build teams <br className="hidden sm:inline" />
              anywhere. <br />
              <span className={`font-serif italic text-4xl sm:text-5xl md:text-6xl font-light transition-colors duration-500 ${
                isDarkMode ? 'text-stone-400' : 'text-stone-500'
              }`}>
                Yes, even there.
              </span>
            </h1>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            id="paragraph-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`font-sans text-left text-[14px] max-w-sm leading-relaxed mt-1 transition-colors duration-500 ${
              isDarkMode ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Aura’s AI-powered EOR platform lets you scale your global workforce fast, 
            with built-in compliance guidance across 185+ countries.
          </motion.p>

          {/* Button Pair - Watch demo on the left, Request a quote on the far right */}
          <motion.div
            id="cta-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-between w-full max-w-sm mt-6"
          >
            {/* Watch demo on the left */}
            <button
              id="btn-watch-demo"
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-2 font-sans text-xs uppercase tracking-wider active:scale-[0.97] border ${
                isDarkMode 
                  ? 'text-stone-200 border-stone-850 bg-[#111111]/40 hover:bg-stone-900 hover:border-stone-700' 
                  : 'text-stone-600 border-stone-300 bg-white hover:border-stone-800 hover:bg-stone-50'
              }`}
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              Watch Demo
            </button>

            {/* Request a quote on the far right */}
            <button
              id="btn-request-quote"
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-2 font-sans text-xs uppercase tracking-wider active:scale-[0.97] shadow-sm border ${
                isDarkMode 
                  ? 'bg-white text-stone-950 border-white hover:bg-stone-100 font-medium' 
                  : 'bg-[#111111] text-white border-stone-950 hover:bg-stone-900'
              }`}
            >
              Request a Quote
            </button>
          </motion.div>

          {/* Theme Toggle Button underneath CTA buttons */}
          <motion.div
            id="hero-toggle-container"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className={`w-full max-w-sm mt-4 flex justify-between items-center rounded-2xl p-3 border transition-colors duration-500 ${
              isDarkMode 
                ? 'bg-stone-900/40 border-stone-800' 
                : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="flex flex-col text-left">
              <span className={`font-mono text-[9px] tracking-widest uppercase opacity-75 ${
                isDarkMode ? 'text-stone-400' : 'text-stone-500'
              }`}>
                Interface Theme
              </span>
              <span className={`font-sans text-xs font-semibold ${
                isDarkMode ? 'text-stone-100' : 'text-stone-900'
              }`}>
                {isDarkMode ? 'Cosmic Dark' : 'Elegant Light'}
              </span>
            </div>

            {/* Custom Interactive Pill Toggle */}
            <button
              id="hero-theme-toggle"
              onClick={toggleDarkMode}
              className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 focus:outline-none ${
                isDarkMode 
                  ? 'bg-stone-950 border border-stone-850' 
                  : 'bg-white border border-stone-250 hover:border-stone-400'
              }`}
            >
              <div
                className={`h-6 w-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'translate-x-[22px] bg-stone-900 text-stone-200' 
                    : 'translate-x-[3px] bg-white text-stone-850'
                }`}
              >
                {isDarkMode ? (
                  <Moon className="w-3 h-3 text-stone-200" />
                ) : (
                  <Sun className="w-3 h-3 text-stone-900 fill-stone-100" />
                )}
              </div>
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
