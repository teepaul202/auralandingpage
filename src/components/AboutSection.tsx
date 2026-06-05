import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Compass, Target, Eye, Users, Landmark, Sliders, Globe } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const MISSION_PROFILES = [
  {
    id: 'velocity',
    btnLabel: 'Frictionless Velocity',
    tagline: 'Scale first, automate instantly.',
    description: 'We believe geographic boundaries shouldn’t restrain global software engineering potential. By prioritizing sub-second contract matching, hot-swap contractor payments, and unified database integrations, we help modern startup cohorts onboard crucial engineering leaders overseas within 48 hours without friction.',
    metrics: [
      { label: 'Avg onboarding speed', value: '48 Hrs' },
      { label: 'Time savings on payroll', value: '18d/Yr' },
      { label: 'Country integrations', value: '185+' }
    ],
    motto: 'Build without territory boundaries.'
  },
  {
    id: 'hardening',
    btnLabel: 'Statutory Hardening',
    tagline: 'Our iron-clad legal mandate.',
    description: 'Regulatory compliance is non-negotiable. Our core legal engineering divisions work directly in synchronization with state tax agencies to design self-repairing compliance schemas. We take 100% of the employment liability on papers, completely isolating your core enterprise parent from local statutory risks.',
    metrics: [
      { label: 'Employment liability shield', value: '100%' },
      { label: 'Local attorneys retained', value: '450+' },
      { label: 'Compliance incidents', value: 'Zero' }
    ],
    motto: 'Statutory compliance is mathematical.'
  },
  {
    id: 'scaling',
    btnLabel: 'Autonomous Scaling',
    tagline: 'Infinite workforce automation.',
    description: 'The future of payroll is decentralized, autonomous ledgers. By binding real-time labor law direct feeds, continuous tax-withholding APIs, and cross-border digital financial routings into active node states, we let modern businesses run thousands of global team members with zero hand-cranking.',
    metrics: [
      { label: 'Automated digital steps', value: '98.5%' },
      { label: 'Active employee nodes', value: '25,480' },
      { label: 'Total shield coverage', value: '$85.4M' }
    ],
    motto: 'Declare your workforce state. We align the ledger.'
  }
];

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  const [activeProfile, setActiveProfile] = useState(MISSION_PROFILES[0]);

  return (
    <section 
      id="about-us-section" 
      className={`py-24 relative select-none overflow-hidden border-b transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#111111] border-stone-850' 
          : 'bg-white border-stone-100'
      }`}
    >
      {/* Soft background visual ring */}
      <div className="absolute top-[30%] left-[-10%] w-[45vw] h-[45vw] rounded-full border border-stone-500/5 dark:border-stone-400/[0.02] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold border ${
            isDarkMode 
              ? 'bg-stone-900/40 text-stone-300 border-stone-800' 
              : 'bg-stone-100 text-stone-700 border-stone-200'
          }`}>
            Aura Ethos
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4 ${
            isDarkMode ? 'text-white' : 'text-stone-950'
          }`}>
            What We Are About
          </h2>
          <p className={`text-sm max-w-xl leading-relaxed ${
            isDarkMode ? 'text-stone-400' : 'text-stone-650'
          }`}>
            We bridge code and localized corporate jurisdictions. Learn how we configure global employment ledger states and legal compliance.
          </p>
        </div>

        {/* Customizable About Selector block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
          
          {/* Left Block - Controls */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
              isDarkMode ? 'text-stone-500' : 'text-stone-400'
            }`}>
              Interactive Mission Toggle
            </span>

            {MISSION_PROFILES.map((prof) => {
              const isActive = activeProfile.id === prof.id;
              return (
                <button
                  key={prof.id}
                  onClick={() => setActiveProfile(prof)}
                  id={`btn-about-prof-${prof.id}`}
                  className={`px-6 py-4.5 rounded-2xl text-left border text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? isDarkMode
                        ? 'bg-stone-900 border-stone-700 text-white shadow-md'
                        : 'bg-stone-950 border-stone-950 text-white'
                      : isDarkMode
                        ? 'bg-[#151210]/20 border-stone-850 text-stone-400 hover:text-stone-200 hover:bg-stone-900/10'
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-950 hover:bg-stone-100/50'
                  }`}
                >
                  {prof.btnLabel}
                </button>
              );
            })}

            <div className={`mt-6 p-4.5 rounded-2xl border ${
              isDarkMode ? 'bg-stone-900/40 border-stone-800 text-stone-300' : 'bg-stone-100 border-stone-200 text-stone-700'
            }`}>
              <p className="text-[10px] font-mono leading-relaxed">
                📢 <span className="font-bold">Interact Notice</span>: Click any profile button above to immediately visualize active metric parameters, shield updates, and tailored organizational priorities.
              </p>
            </div>
          </div>

          {/* Right Block - Changing Display */}
          <div className="lg:col-span-8">
            <div className={`rounded-[2.5rem] border p-8 md:p-10 transition-all duration-500 ${
              isDarkMode 
                ? 'bg-stone-900/20 border-stone-850' 
                : 'bg-stone-50/50 border-stone-200/90'
            }`}>
              
              {/* Motto Banner */}
              <div className="flex items-center gap-3 mb-6">
                <Compass className={`w-5 h-5 shrink-0 ${
                  isDarkMode ? 'text-white' : 'text-stone-900'
                }`} />
                <p className={`text-xs font-bold font-mono tracking-wider uppercase ${
                  isDarkMode ? 'text-white' : 'text-stone-900'
                }`}>
                  {activeProfile.tagline}
                </p>
              </div>

              {/* Tagline Paragraph info */}
              <p className={`text-base leading-relaxed font-sans mb-8 ${
                isDarkMode ? 'text-stone-200' : 'text-stone-750'
              }`}>
                {activeProfile.description}
              </p>

              <hr className={`mb-8 ${isDarkMode ? 'border-stone-850' : 'border-stone-200'}`} />

              {/* Dynamic Counters and metrics */}
              <div>
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-6 ${
                  isDarkMode ? 'text-stone-500' : 'text-stone-400'
                }`}>
                  Current Stat Parameters
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeProfile.metrics.map((met, idx) => (
                    <div 
                      key={idx}
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-stone-950 border-stone-850 hover:border-stone-800' 
                          : 'bg-white border-stone-150 hover:border-stone-250 shadow-xs'
                      }`}
                    >
                      <p className={`text-[10px] font-mono tracking-wide uppercase leading-none ${
                        isDarkMode ? 'text-stone-400' : 'text-stone-500'
                      }`}>
                        {met.label}
                      </p>
                      <p className={`text-2xl font-black mt-3 ${
                        isDarkMode ? 'text-white' : 'text-stone-950'
                      }`}>
                        {met.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motto quote */}
              <div className={`mt-8 p-4 rounded-xl flex items-center justify-between text-left border ${
                isDarkMode ? 'bg-[#18181b]/55 border-stone-850' : 'bg-stone-50 border-stone-200'
              }`}>
                <p className="text-[11px] font-mono tracking-wider uppercase text-stone-400 font-semibold pl-2">
                  Aura Schema Manifesto:
                </p>
                <p className="text-[11px] font-medium text-stone-200 bg-black py-1 px-3.5 rounded-lg border border-stone-800 font-sans">
                  "{activeProfile.motto}"
                </p>
              </div>

            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
