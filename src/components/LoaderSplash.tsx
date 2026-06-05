import { motion } from 'motion/react';

interface LoaderSplashProps {
  isDarkMode: boolean;
}

export default function LoaderSplash({ isDarkMode }: LoaderSplashProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#111111]' : 'bg-white'
      }`}
    >
      {/* Background glow flares during load */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-[0.14] transition-colors duration-500 ${
          isDarkMode ? 'bg-stone-500' : 'bg-stone-300'
        }`} />
      </div>

      <div className="relative flex flex-col items-center gap-6 z-10">
        
        {/* Sleek Orbiting/Aura Spinner Layer */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Inner pulse */}
          <motion.div 
            animate={{ 
              scale: [0.85, 1.15, 0.85],
              opacity: [0.35, 0.75, 0.35]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`w-4 h-4 rounded-full ${isDarkMode ? 'bg-white' : 'bg-stone-900'}`}
          />

          {/* Core spinning halo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 border-[2px] border-transparent rounded-full"
            style={{
              borderTopColor: isDarkMode ? '#ffffff' : '#1c1917',
              borderRightColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(28,25,23,0.1)',
            }}
          />

          {/* Outer elegant slow glow circle */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-2 border border-dashed rounded-full opacity-35"
            style={{
              borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(28,25,23,0.2)'
            }}
          />
        </div>

        {/* Brand Text & Status */}
        <div className="text-center flex flex-col items-center gap-2">
          {/* Staggered text entrance simulation */}
          <motion.div
            initial={{ letterSpacing: '0.1em' }}
            animate={{ letterSpacing: '0.45em' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className={`font-mono text-xs font-bold uppercase select-none ${
              isDarkMode ? 'text-white/90 drop-shadow-sm' : 'text-stone-900/95'
            }`}
          >
            AURA
          </motion.div>

          {/* Elegant loading progress line */}
          <div className={`relative w-28 h-[2px] rounded-full overflow-hidden ${
            isDarkMode ? 'bg-stone-800' : 'bg-stone-100'
          }`}>
            <motion.div 
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className={`absolute top-0 bottom-0 w-1/2 rounded-full ${
                isDarkMode ? 'bg-stone-400' : 'bg-stone-600'
              }`}
            />
          </div>

          {/* Subtle status label */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className={`text-[9px] font-sans tracking-[0.1em] uppercase ${
              isDarkMode ? 'text-stone-500' : 'text-stone-400'
            }`}
          >
            synchronizing workspace
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
