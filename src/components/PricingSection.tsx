import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Asterisk, Sparkles, Users, Shield, Award, HelpCircle, ArrowRight, X, MoreHorizontal, ChevronLeft } from 'lucide-react';
import teamStandupImage from '../assets/images/regenerated_image_1780503149427.png';

const MOCKUP_IMAGE_URL = 'https://chatgpt.com/backend-api/estuary/content?id=file_00000000e5e07243b93f8fe3d0aa024e&ts=494583&p=fsns&cid=1&sig=a75f9b1d2df262b6d68aa75e12382df62ec4f58fe89e5a9193b8b185e1386aa0&v=0';

interface PricingSectionProps {
  isDarkMode: boolean;
}

const PLANS_DATA = [
  {
    id: 'starter',
    name: 'Starter Node',
    baseMonthly: 149,
    baseAnnual: 119,
    perPersonMonthly: 12,
    perPersonAnnual: 9,
    description: 'Perfect for startups and engineering teams aiming to scale their initially hired global contractors safely.',
    features: [
      'Universal localized contractor support',
      'Instant AI-powered contract matching',
      'Automated local tax documentation',
      'Basic Liability Shielding',
      '185+ country support built-in',
    ],
    cta: 'Initialize Workspace',
    popular: false,
  },
  {
    id: 'scale',
    name: 'Scale Entity',
    baseMonthly: 429,
    baseAnnual: 349,
    perPersonMonthly: 32,
    perPersonAnnual: 25,
    description: 'Our most comprehensive solution enabling you to hire global full-time employees without local corporate setups.',
    features: [
      'Comprehensive Employer of Record (EoR)',
      '100% active localized legal coverage',
      'Complex local benefits & health layers',
      'Continuous compliance shielding (L3)',
      'Sub-second payout automation api',
      'Dedicated legal console response',
    ],
    cta: 'Scale Global Workforce',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise',
    baseMonthly: 899,
    baseAnnual: 719,
    perPersonMonthly: 55,
    perPersonAnnual: 45,
    description: 'Bespoke custom-orchestrated schema APIs tailored to highly regulated financial conglomerates and massive groups.',
    features: [
      'Custom sub-entity routing & parameters',
      'Dedicated on-demand attorney group',
      'Bespoke multi-layer compliance ledgers',
      'Infinite scale SLA agreements (99.99%)',
      'White-glove custom payroll ledger support',
      'Custom single sign-on (SSO) & integrations',
    ],
    cta: 'Request Bespoke Schema',
    popular: false,
  }
];

export default function PricingSection({ isDarkMode }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [headcount, setHeadcount] = useState<number>(12);
  const [includeShield, setIncludeShield] = useState<boolean>(true);
  const [includeAttorneySLA, setIncludeAttorneySLA] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Add-on costs
  const shieldCost = billingCycle === 'annual' ? 29 : 39;
  const attorneyCost = billingCycle === 'annual' ? 69 : 89;

  // Compute values for cards
  const getCalculatedPrice = (plan: typeof PLANS_DATA[0]) => {
    const base = billingCycle === 'annual' ? plan.baseAnnual : plan.baseMonthly;
    const rate = billingCycle === 'annual' ? plan.perPersonAnnual : plan.perPersonMonthly;
    
    let total = base + (headcount * rate);
    if (includeShield) total += shieldCost;
    if (includeAttorneySLA) total += attorneyCost;
    
    return total;
  };

  // Traditional cost comparison (entity setup ($30,000 setup + average $2,000/mo legal compliance costs + overhead))
  const traditionalCost = 3500 + (headcount * 1200);
  const auraCost = getCalculatedPrice(PLANS_DATA[1]); // using Popular plan for representative comparison
  const calculatedSavings = Math.max(0, traditionalCost - auraCost);

  return (
    <section 
      id="pricing-plans-section" 
      className={`py-24 relative select-none overflow-hidden border-b transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#111111] border-stone-850' 
          : 'bg-white border-stone-100'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-stone-500/5 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Caption Grid replacing Interactive Control Panel and Header */}
        <div className="max-w-6xl mx-auto mb-16 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Massive Stacked Headings inspired by the 'FREE RESOURCES & TOOLS' style */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-8">
              
              <div className="flex flex-col select-none font-sans leading-[0.85] tracking-tighter text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-stone-900 dark:text-white uppercase"
                >
                  BUILD
                </motion.h2>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-stone-900 dark:text-white uppercase mt-1 sm:mt-2"
                >
                  YOUR TEAM
                </motion.h2>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-stone-400 dark:text-stone-550 uppercase mt-1 sm:mt-2"
                >
                  WITH AURA
                </motion.h2>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed max-w-md ${
                isDarkMode ? 'text-stone-400' : 'text-stone-600'
              }`}>
                Synchronize global team stands natively, keep everyone perfectly aligned throughout complex operational schedules, and manage international personnel flawlessly.
              </p>

              {/* Asymmetrical stacked text styling inspired by the 'EVERY DESIGNER NEEDS' layout */}
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800/80 w-full max-w-sm">
                <div className="font-sans text-left tracking-wide leading-tight uppercase select-none flex flex-col gap-1">
                  <span className="text-xs font-light text-stone-400 dark:text-stone-550 tracking-[0.2em]">
                    USED ACROSS
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-stone-850 dark:text-white tracking-[0.05em]">
                    185 COUNTRIES
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-950 dark:text-stone-300 tracking-[0.02em]">
                    GLOBALLY
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, high-fashion poster display representing the girl in the clouds */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px]">
                
                 {/* Decorative glow behind poster */}
                 <div className="absolute -inset-4 bg-gradient-to-tr from-stone-500/5 to-white/5 blur-2xl rounded-[3.5rem] pointer-events-none" />

                 {/* Framed poster display with no complex UI elements except the requested Team Standup label */}
                 <div className={`relative w-full aspect-[4/5] rounded-[2.5rem] border shadow-2xl overflow-hidden transition-colors duration-500 ${
                   isDarkMode 
                     ? 'border-stone-800 bg-stone-950 shadow-black/80' 
                     : 'border-stone-200 bg-stone-50 shadow-stone-300/35'
                 }`}>
                   <img 
                     src={teamStandupImage}
                     alt="Aura visual branding portrait"
                     className="absolute inset-0 w-full h-full object-cover brightness-[0.98] saturate-[1.03]"
                     referrerPolicy="no-referrer"
                   />

                   {/* Soft dark overlay at top for readability of the badge */}
                   <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 via-black/5 to-transparent pointer-events-none" />

                   {/* Centered Team Standup label overlay */}
                   <div className="absolute top-5 inset-x-0 flex justify-center">
                     <span className="text-[10px] font-bold text-white tracking-wider bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm whitespace-nowrap">
                       Team Standup
                     </span>
                   </div>
                 </div>

              </div>
            </div>

          </div>

          {/* Billing Cycle Selector and pricing header separator with state support */}
          <div className="flex flex-col items-center mt-16 pt-8 border-t border-stone-100 dark:border-stone-900/80">
            <span className={`text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-4 ${
              isDarkMode ? 'text-stone-500' : 'text-stone-400'
            }`}>
              Select deployment interval
            </span>
            <div className={`p-1 rounded-full flex items-center border ${
              isDarkMode ? 'bg-stone-950 border-stone-800' : 'bg-stone-100 border-stone-200'
            }`}>
              <button
                id="billing-cycle-switch-monthly"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? isDarkMode ? 'bg-stone-900 text-white shadow-sm' : 'bg-white text-stone-955 shadow-sm'
                    : 'text-stone-500 hover:text-stone-850 dark:hover:text-stone-300'
                }`}
              >
                Pay monthly
              </button>
              <button
                id="billing-cycle-switch-annual"
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual'
                    ? isDarkMode ? 'bg-stone-900 text-white shadow-sm' : 'bg-white text-stone-955 shadow-sm'
                    : 'text-stone-500 hover:text-stone-850 dark:hover:text-stone-300'
                }`}
              >
                Pay yearly
                <span className={`w-1.5 h-1.5 rounded-full ${
                  isDarkMode ? 'bg-white' : 'bg-stone-900'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Interactive Pricing Layout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto mt-12">
          {PLANS_DATA.map((plan, index) => {
            const isPopular = plan.popular;
            const updatedPrice = getCalculatedPrice(plan);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.3 } }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[2rem] border flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-default ${
                  isPopular
                    ? isDarkMode 
                      ? 'bg-stone-950 border-stone-800 shadow-2xl shadow-black/40 z-10 pt-20' 
                      : 'bg-white border-stone-900 shadow-xl scale-102 z-10 pt-20'
                    : isDarkMode
                      ? 'bg-stone-950/40 border-stone-850 hover:border-stone-700 p-8'
                      : 'bg-[#fafafa] border-stone-200 hover:border-stone-350 p-8'
                } ${hoveredCard === index ? 'shadow-xl' : ''}`}
              >
                
                {/* Core animated dynamic border when card is highlighted */}
                <AnimatePresence>
                  {isPopular && hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-stone-400 via-stone-200 to-white"
                    />
                  )}
                </AnimatePresence>

                {/* Curve/Gradient header overlay for Featured Card, matching top bar style */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-stone-850 via-stone-950 to-stone-900 flex items-center justify-between px-8">
                    <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-stone-300 uppercase">
                      Scale Entity
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span className="text-[8px] font-mono tracking-widest text-white font-bold uppercase">Popular</span>
                    </span>
                  </div>
                )}

                <div className={isPopular ? "p-8 pt-4 flex flex-col justify-between h-full w-full" : "flex flex-col justify-between h-full w-full"}>
                  <div>
                    {/* Header elements */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-stone-950'
                      }`}>
                        {plan.name}
                      </h3>
                      {plan.id === 'scale' && (
                        <Award className={`w-4 h-4 ${
                          isDarkMode ? 'text-white' : 'text-stone-904'
                        }`} />
                      )}
                    </div>
                    
                    <p className={`text-xs leading-relaxed mb-6 min-h-12 ${
                      isDarkMode ? 'text-stone-400' : 'text-stone-550'
                    }`}>
                      {plan.description}
                    </p>

                    {/* Integrated Price display box container with active animation triggers */}
                    <div className={`p-6 rounded-[1.5rem] mb-6 border text-left flex flex-col gap-4 transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-stone-900/60 border-stone-800/80 shadow-inner' 
                        : 'bg-stone-100/50 border-stone-200/40 shadow-inner'
                    } ${hoveredCard === index ? 'border-stone-500/20' : ''}`}>
                      <div className="flex items-baseline gap-1.5">
                        <motion.span 
                          key={updatedPrice}
                          initial={{ opacity: 0.6, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={`text-4xl font-extrabold tracking-tight leading-none ${
                            isDarkMode ? 'text-white' : 'text-stone-955'
                          }`}
                        >
                          ${updatedPrice}
                        </motion.span>
                        <div className="flex flex-col text-left">
                          <span className={`text-[9px] font-mono font-bold tracking-wider uppercase leading-none ${
                            isDarkMode ? 'text-stone-400' : 'text-stone-550'
                          }`}>
                            USD
                          </span>
                          <span className={`text-[9px] mt-0.5 ${
                            isDarkMode ? 'text-stone-500' : 'text-stone-450'
                          }`}>
                            / month
                          </span>
                        </div>
                      </div>

                      <button
                        id={`btn-pricing-plan-${index}`}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                          isPopular
                            ? isDarkMode 
                              ? 'bg-white hover:bg-stone-205 text-stone-950 shadow-sm active:scale-[0.98]' 
                              : 'bg-stone-950 hover:bg-stone-850 text-white shadow-sm active:scale-[0.98]'
                            : isDarkMode
                              ? 'bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700/50 active:scale-[0.98]'
                              : 'bg-stone-200 hover:bg-stone-250 text-stone-800 border border-stone-300/45 active:scale-[0.98]'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>

                    {/* Features checklist */}
                    <div className="flex flex-col gap-3 mt-6">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular 
                              ? isDarkMode ? 'text-white' : 'text-stone-950'
                              : isDarkMode ? 'text-stone-400' : 'text-stone-605'
                          }`}>
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className={`text-xs text-left leading-relaxed ${
                            isDarkMode ? 'text-stone-300' : 'text-stone-750'
                          }`}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Disclaimer / Assurance banner */}
        <div className="max-w-3xl mx-auto mt-16 text-center flex items-center justify-center gap-2 relative">
          <Asterisk className={`w-4 h-4 shrink-0 ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`} />
          <p className={`text-[11px] leading-relaxed select-none ${
            isDarkMode ? 'text-stone-400' : 'text-stone-500'
          }`}>
            Annual agreements lock in current seat multiplier rates regardless of mid-term localized labor code developments. Need a localized framework pilot? <span className="underline cursor-pointer hover:text-stone-900 dark:hover:text-white transition-colors">Launch a contractor node trial</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
