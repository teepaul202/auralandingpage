import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

interface ProductSectionProps {
  isDarkMode: boolean;
}

export default function ProductSection({ isDarkMode }: ProductSectionProps) {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "https://labs.google/fx/api/og-video/shared/2cf84dcc-d4f5-42d5-b185-cd0cc8cb6ea0";
  // Premium fallback network video loop (neural nodes network) in case Google Labs is blocked or slow
  const fallbackVideoUrl = "https://cdn.pixabay.com/video/2021/04/12/70851-537446416_large.mp4";

  const currentSrc = videoError ? fallbackVideoUrl : videoUrl;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("ProductSection background video play failed:", err);
      });
    }
  }, [currentSrc]);

  return (
    <section 
      id="product-customizer-section" 
      className={`py-36 relative select-none overflow-hidden border-b transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#111111] border-stone-850' 
          : 'bg-white border-stone-100'
      }`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src={currentSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isDarkMode ? 'opacity-25 brightness-[0.6] contrast-[1.1]' : 'opacity-15 brightness-[1.02] contrast-[0.9]'
          }`}
        />
        {/* Soft elegant gradient overlays to blend the edges seamlessly */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDarkMode 
            ? 'from-[#111111] via-[#111111]/45 to-[#111111]' 
            : 'from-white via-white/45 to-white'
        }`} />
        {/* Subtle dot overlay */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* Subtle Year Header */}
        <span className={`text-[11px] font-mono tracking-[0.25em] font-medium block mb-4 select-none ${
          isDarkMode ? 'text-stone-500' : 'text-stone-400'
        }`}>
          2024
        </span>

        {/* LIFE THREAD Badge */}
        <div className="mb-8">
          <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase font-bold border transition-colors duration-300 select-none ${
            isDarkMode 
              ? 'bg-stone-900/40 text-stone-300 border-stone-800' 
              : 'bg-stone-50 text-stone-600 border-stone-200'
          }`}>
            LIFE THREAD
          </span>
        </div>

        {/* Display Typography Header */}
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.15] tracking-tight max-w-3xl mx-auto select-none font-sans ${
          isDarkMode ? 'text-white' : 'text-stone-900'
        }`}>
          <span className="block font-light">Lets help you build</span>
          <span className="block mt-1 sm:mt-2 text-stone-400 dark:text-stone-500 font-mono text-2xl sm:text-3xl md:text-4xl leading-none">
            .......
          </span>
          <span className={`block mt-1 sm:mt-2 font-bold ${
            isDarkMode ? 'text-white' : 'text-stone-900'
          }`}>
            Better !!!
          </span>
        </h2>

      </motion.div>
    </section>
  );
}
