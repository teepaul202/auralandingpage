import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";

interface LogoSectionProps {
  isDarkMode: boolean;
}

export default function LogoSection({ isDarkMode }: LogoSectionProps) {
  const textColor = isDarkMode 
    ? "text-stone-500 hover:text-stone-300" 
    : "text-stone-400 hover:text-stone-800";

  return (
    <section 
      id="logos-infinite-banners"
      className={`py-8 select-none transition-colors duration-500 border-b border-t ${
        isDarkMode 
          ? 'bg-[#111111]/60 border-stone-850' 
          : 'bg-stone-50/50 border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle, elegant uppercase header */}
        <p className={`text-[10px] sm:text-[11px] font-mono tracking-[0.2em] font-semibold uppercase ${
          isDarkMode ? 'text-stone-400' : 'text-stone-505'
        }`}>
          Accelerated & trusted within active schemas by global engineering cohorts
        </p>

        {/* Real Logo Cloud marquee */}
        <div className="mt-6 md:mt-8 overflow-hidden py-4">
          <InfiniteSlider gap={64} reverse speed={40}>
            {/* Stripe */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <text x="5" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5">stripe</text>
              </svg>
            </div>

            {/* Vercel */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <polygon points="6,6 18,24 0,24" />
                <text x="26" y="21" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="4">VERCEL</text>
              </svg>
            </div>

            {/* Supabase */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <path d="M10 2L2 16h8l-2 12 10-14h-8l2-12z" />
                <text x="30" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" letterSpacing="0.5">supabase</text>
              </svg>
            </div>

            {/* Linear */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <circle cx="12" cy="15" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="12" y1="8" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                <text x="28" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" letterSpacing="1">Linear</text>
              </svg>
            </div>

            {/* Figma */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <circle cx="8" cy="10" r="4" />
                <circle cx="16" cy="10" r="4" />
                <circle cx="8" cy="18" r="4" />
                <circle cx="16" cy="18" r="4" />
                <text x="28" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" letterSpacing="0.5">Figma</text>
              </svg>
            </div>

            {/* Airbnb */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <text x="5" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.5">airbnb</text>
              </svg>
            </div>

            {/* GitHub */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                <text x="30" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="17" letterSpacing="0.5">GitHub</text>
              </svg>
            </div>

            {/* Shopify */}
            <div className={`transition-colors duration-300 flex items-center shrink-0 ${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 30" fill="currentColor" className="h-5 sm:h-5.5 w-auto shrink-0 select-none">
                <text x="5" y="21" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="1">shopify</text>
              </svg>
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
