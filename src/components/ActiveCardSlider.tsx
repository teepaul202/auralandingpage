import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Snowflake, Trees, Droplet, Sun, Settings, Check, RefreshCw } from 'lucide-react';

// Dynamic icon map to render Lucide icons from card configuration
const iconMap: Record<string, any> = {
  Compass: Compass,
  Snowflake: Snowflake,
  Trees: Trees,
  Droplet: Droplet,
  Sun: Sun,
};

// Beautiful predefined premium high-fidelity video/image generator presets for rapid customizability
const PRESET_IMAGES = [
  { name: 'Neuro 1', url: 'https://labs.google/fx/tools/flow/shared/video/2cf84dcc-d4f5-42d5-b185-cd0cc8cb6ea0' },
  { name: 'Neuro 2', url: 'https://labs.google/fx/tools/flow/shared/video/799b27b4-3218-48c5-9c73-c0622ce96d93' },
  { name: 'Neuro 3', url: 'https://labs.google/fx/tools/flow/shared/image/6bc18630-3be3-4f7a-b4b7-73f1d38d262d' },
  { name: 'Neuro 4', url: 'https://labs.google/fx/tools/flow/shared/image/d5b56ccf-a719-471e-a62d-42067a311676' },
];

interface ActiveCardSliderProps {
  isDarkMode: boolean;
}

const getMediaUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('labs.google/fx/tools/flow/shared/video/')) {
    const id = url.split('/shared/video/')[1];
    return `https://labs.google/fx/api/og-video/shared/${id}`;
  }
  if (url.includes('labs.google/fx/tools/flow/shared/image/')) {
    const id = url.split('/shared/image/')[1];
    return `https://labs.google/fx/api/og-image/shared/${id}`;
  }
  return url;
};

const isVideoUrl = (url: string) => {
  if (!url) return false;
  return (url.endsWith('.mp4') || url.endsWith('.webm')) && !url.includes('labs.google');
};

// Error-resilient, beautiful high-fidelity rendering agent matching user requirements and ensuring 100% preview uptime
const MediaElement = ({ 
  card, 
  isActive, 
  isPreview = false 
}: { 
  card: { title: string; image: string }; 
  isActive: boolean; 
  isPreview?: boolean 
}) => {
  const [hasError, setHasError] = useState(false);
  const mediaUrl = getMediaUrl(card.image);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isVideo = isVideoUrl(card.image) || 
    card.image.includes('/video/') || 
    card.title === 'Neuro 2';

  const fallbackUrlMap: Record<string, string> = {
    'Neuro 1': 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=1200&q=80', // Premium high fashion cyber side profile
    'Neuro 2': 'https://cdn.pixabay.com/video/2019/10/08/27595-364718014_large.mp4',       // Wireframe grid loop video
    'Neuro 3': 'https://cdn.pixabay.com/video/2021/04/12/70851-537446416_large.mp4',       // Connected neural nodes line network video
    'Neuro 4': 'https://cdn.pixabay.com/video/2022/10/16/135118-761184310_large.mp4',       // Orange tinted cybersecurity data shield loop video
  };

  const fallback = fallbackUrlMap[card.title] || 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80';
  const finalSrc = hasError ? fallback : mediaUrl;
  const finalIsVideo = hasError ? fallback.endsWith('.mp4') : isVideo;

  useEffect(() => {
    if (finalIsVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("MediaElement video play failed:", err);
      });
    }
  }, [finalSrc, finalIsVideo]);

  if (finalIsVideo) {
    return (
      <video
        ref={videoRef}
        src={finalSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={() => setHasError(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isPreview
            ? 'w-full h-full object-cover'
            : isActive
              ? 'scale-100 opacity-100 grayscale-0'
              : 'scale-100 opacity-75 sm:opacity-85 grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100'
        }`}
      />
    );
  }

  return (
    <img
      src={finalSrc}
      alt={card.title}
      referrerPolicy="no-referrer"
      onError={() => {
        if (!hasError) setHasError(true);
      }}
      className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isPreview
          ? 'w-full h-full object-cover'
          : isActive
            ? 'scale-100 opacity-100 grayscale-0'
            : 'scale-100 opacity-75 sm:opacity-85 grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100'
      }`}
    />
  );
};

export default function ActiveCardSlider({ isDarkMode }: ActiveCardSliderProps) {
  const [cards, setCards] = useState([
    {
      id: 'card-1',
      title: 'Neuro 1',
      subtitle: 'Instant compilation pipeline. Zero deployment state.',
      image: 'https://labs.google/fx/tools/flow/shared/video/2cf84dcc-d4f5-42d5-b185-cd0cc8cb6ea0',
      icon: 'Compass',
      color: '#3b82f6', // Light Blue
    },
    {
      id: 'card-2',
      title: 'Neuro 2',
      subtitle: 'High-speed fluid matrix generation at record timelines.',
      image: 'https://labs.google/fx/tools/flow/shared/video/799b27b4-3218-48c5-9c73-c0622ce96d93',
      icon: 'Snowflake',
      color: '#059669', // Emerald
    },
    {
      id: 'card-3',
      title: 'Neuro 3',
      subtitle: 'Neural design synthesizers adapting to active schemas.',
      image: 'https://labs.google/fx/tools/flow/shared/image/6bc18630-3be3-4f7a-b4b7-73f1d38d262d',
      icon: 'Trees',
      color: '#eab308', // Gold
    },
    {
      id: 'card-4',
      title: 'Neuro 4',
      subtitle: 'Stunning dynamic shielding, auto-hardened for secure runtime.',
      image: 'https://labs.google/fx/tools/flow/shared/image/d5b56ccf-a719-471e-a62d-42067a311676',
      icon: 'Droplet',
      color: '#ea580c', // Orange
    },
  ]);

  const [activeId, setActiveId] = useState('card-1');
  const [editingCardId, setEditingCardId] = useState('card-1');
  const [showCustomizer, setShowCustomizer] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<any>(null);

  // Trigger programmatic scroll centering on click/tap
  const triggerProgrammaticScroll = (cardId: string) => {
    isProgrammaticScroll.current = true;
    setActiveId(cardId);
    setEditingCardId(cardId);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const cardElement = containerRef.current?.querySelector(`[data-card-id="${cardId}"]`) as HTMLElement;
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }

    // Reset programmatic scroll flag after scroll transition completes (approx 850ms)
    scrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 850);
  };

  // Active card detection during swipe on mobile
  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    const container = containerRef.current;
    if (!container || window.innerWidth >= 768) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestId = activeId;
    let minDistance = Infinity;

    const children = container.querySelectorAll('[data-card-id]');
    children.forEach((child) => {
      const childEl = child as HTMLElement;
      const childCenter = childEl.offsetLeft + childEl.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestId = childEl.getAttribute('data-card-id') || closestId;
      }
    });

    if (closestId !== activeId) {
      setActiveId(closestId);
      setEditingCardId(closestId);
    }
  };

  // Handle live form field editing
  const updateCardField = (cardId: string, field: string, value: string) => {
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, [field]: value } : c))
    );
  };

  const currentEditingCard = cards.find((c) => c.id === editingCardId) || cards[0];

  // Helper to handle swapping dynamic items randomly
  const handleRandomizeImages = () => {
    const shuffledPresets = [...PRESET_IMAGES].sort(() => Math.random() - 0.5);
    setCards((prev) =>
      prev.map((card, idx) => ({
        ...card,
        image: shuffledPresets[idx % shuffledPresets.length].url,
        title: `Neuro ${idx + 1}`,
      }))
    );
  };

  return (
    <section 
      id="how-it-works" 
      className={`py-20 border-t relative overflow-hidden transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-stone-950/20 border-stone-850' 
          : 'bg-stone-50/50 border-stone-100'
      }`}
    >
      <style>{`
        #how-it-works, 
        #how-it-works h2, 
        #how-it-works h3, 
        #how-it-works p, 
        #how-it-works button, 
        #how-it-works span,
        #how-it-works input,
        #how-it-works label {
          font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
        }
        button#randomize-images-btn {
          font-size: 0px !important;
          line-height: 0px !important;
        }
        button#randomize-images-btn > svg > path:nth-of-type(4) {
          border-color: #000000 !important;
          color: #000000 !important;
        }
      `}</style>
      
      {/* Background soft geometric detail */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
        isDarkMode ? 'bg-[#3b82f6]/4' : 'bg-stone-200/20'
      }`} />
      <div className={`absolute bottom-0 left-10 w-80 h-80 rounded-full blur-2xl pointer-events-none transition-all duration-500 ${
        isDarkMode ? 'bg-[#eab308]/3' : 'bg-stone-100/45'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className={`font-mono text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-500 ${
            isDarkMode ? 'text-stone-300' : 'text-stone-500'
          } select-none`}>
            aura generations
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-semibold mt-3 tracking-tight transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-stone-900'
          }`}>
            AI generation units 1 to 4.
          </h2>
          <p className={`font-sans text-[14px] mt-3 max-w-md mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-stone-400' : 'text-stone-500'
          }`}>
            Harness extreme speeds with our customized AI models. Experience absolute rendering speed with robust physical security guards.
          </p>
        </div>

        {/* The Slider Row Container */}
        <div className="relative flex flex-col justify-center items-center w-full min-h-[420px] md:min-h-[500px]">
          
          <div 
            ref={containerRef}
            id="interactive-cards-row" 
            onScroll={handleScroll}
            className="flex items-center md:justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-5xl h-[380px] sm:h-[430px] md:h-[470px] overflow-x-auto md:overflow-visible px-4 sm:px-6 md:px-0 scroll-smooth snap-x snap-mandatory scrollbar-none scroll-px-6"
          >
            {cards.map((card, i) => {
              const isActive = card.id === activeId;
              const IconComponent = iconMap[card.icon] || Trees;
              const mediaUrl = getMediaUrl(card.image);
              const isVideo = isVideoUrl(card.image);

              return (
                <motion.div
                  key={card.id}
                  layoutID={card.id}
                  layout="position"
                  data-card-id={card.id}
                  transition={{
                    type: 'tween',
                    ease: [0.25, 1, 0.5, 1],
                    duration: 0.6
                  }}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      setActiveId(card.id);
                      setEditingCardId(card.id);
                    }
                  }}
                  onClick={() => {
                    triggerProgrammaticScroll(card.id);
                  }}
                  className={`relative h-full rounded-[2.2rem] md:rounded-[2.6rem] border-2 cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm snap-center ${
                    isActive
                      ? `w-[80vw] max-w-[320px] md:w-auto md:max-w-[620px] md:flex-grow md:min-w-[420px] shrink-0 md:shrink scale-100 opacity-100 bg-stone-950 shadow-md ring-4 ${
                          isDarkMode 
                            ? 'border-stone-800 ring-stone-900/10' 
                            : 'border-stone-900/10 ring-stone-950/[0.02]'
                        }`
                      : `w-[80vw] max-w-[320px] md:w-[74px] lg:w-[84px] shrink-0 scale-[0.93] opacity-60 md:scale-100 md:opacity-100 group hover:shadow ${
                          isDarkMode 
                            ? 'border-stone-850 hover:border-stone-750 bg-stone-900/55' 
                            : 'border-stone-200/50 hover:border-stone-400 bg-stone-100'
                        }`
                  }`}
                >
                  {/* Background Image / Autoplay Video with reliable high-fidelity fallbacks */}
                  <MediaElement card={card} isActive={isActive} />

                  {/* Dark elegant overlay for absolute text readability strictly inside the active one */}
                  <div 
                    className={`absolute inset-0 z-10 transition-opacity duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent' 
                        : 'bg-black/30 group-hover:bg-black/25'
                    }`} 
                  />

                  {/* Inner Elements layout */}
                  {isActive ? (
                    // Expanded Card Layout
                    <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 md:p-8 flex items-end justify-between text-left gap-4">
                      <div className="flex items-center gap-4">
                        {/* Circular white symbol housing */}
                        <motion.div
                          initial={{ scale: 0.85, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.35, delay: 0.15 }}
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 border border-stone-100/10"
                        >
                          <IconComponent className="w-5 h-5 pointer-events-none" style={{ color: card.color }} />
                        </motion.div>

                        {/* Title and descriptions */}
                        <div className="flex flex-col gap-0.5 select-none text-white max-w-xs md:max-w-md">
                          <motion.h3 
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.35, delay: 0.2 }}
                            className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white"
                          >
                            {card.title}
                          </motion.h3>
                          <motion.p 
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.35, delay: 0.25 }}
                            className="text-[11px] sm:text-xs md:text-[13px] text-stone-250/90 leading-tight block truncate font-sans"
                          >
                            {card.subtitle}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Narrow Capsule layout - show centered circular icon only at the bottom
                    <div className="absolute inset-x-0 bottom-5 sm:bottom-7 z-20 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-stone-150 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-4.5 h-4.5 opacity-80" style={{ color: card.color }} />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4 z-20 relative">
          {cards.map((card, idx) => {
            const isActive = card.id === activeId;
            return (
              <button
                key={`dot-${card.id}`}
                onClick={() => {
                  triggerProgrammaticScroll(card.id);
                }}
                className={`h-2.5 rounded-full transition-all duration-[400ms] ease-out ${
                  isActive 
                    ? 'w-6 bg-stone-900 dark:bg-white' 
                    : 'w-2.5 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
