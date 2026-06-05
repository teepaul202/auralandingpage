import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActiveCardSlider from './components/ActiveCardSlider';
import LogoSection from './components/LogoSection';
import ProductSection from './components/ProductSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import CustomFooter from './components/CustomFooter';
import LoaderSplash from './components/LoaderSplash';
import ContactSection from './components/ContactSection';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [socialsData, setSocialsData] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aura-theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch('/api/socials')
      .then((res) => res.json())
      .then((data) => setSocialsData(data))
      .catch((err) => console.error('Error fetching socials:', err));
  }, []);

  useEffect(() => {
    localStorage.setItem('aura-theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoaderSplash isDarkMode={isDarkMode} />}
      </AnimatePresence>

      <div 
        id="landing-root" 
        className={`min-h-screen relative w-full overflow-hidden transition-colors duration-500 selection:text-white ${
          isDarkMode 
            ? 'bg-[#111111] text-stone-100 selection:bg-stone-800' 
            : 'bg-white text-stone-950 selection:bg-stone-900'
        }`}
      >
      
      {/* Absolute Ambient Background Lights to create rich depths & premium look */}
      <div id="ambient-glows" className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Soft Sky-Blue/Indigo Glow top left */}
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full transition-colors duration-500 blur-[130px] animate-pulse ${
          isDarkMode ? 'bg-indigo-500/8' : 'bg-teal-500/5'
        }`}></div>
        {/* Soft Slate/Stone Dusk bottom right */}
        <div className={`absolute bottom-[10%] right-[-15%] w-[60vw] h-[60vw] rounded-full transition-colors duration-500 blur-[150px] ${
          isDarkMode ? 'bg-stone-700/5' : 'bg-stone-200/20'
        }`}></div>
        {/* Subtle grid of radial dots */}
        <div className="absolute inset-0 bg-noise opacity-30"></div>
      </div>

      <div id="app-layout" className="relative z-10 flex flex-col min-h-screen">
        {/* Top-aligned Capsule Header */}
        <header id="app-header" className="w-full">
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>

        {/* Hero Section containing Left Text details and Right space simulation */}
        <main id="app-main" className="flex-grow flex flex-col w-full">
          <Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <ActiveCardSlider isDarkMode={isDarkMode} />
          <LogoSection isDarkMode={isDarkMode} />
          <ProductSection isDarkMode={isDarkMode} />
          <AboutSection isDarkMode={isDarkMode} />
          <PricingSection isDarkMode={isDarkMode} />
          <ContactSection isDarkMode={isDarkMode} />
          <FAQSection isDarkMode={isDarkMode} />
        </main>

        {/* Corporate Trust Banner / Footer section */}
        <CustomFooter isDarkMode={isDarkMode} socialsData={socialsData} />

      </div>
    </div>
    </>
  );
}
