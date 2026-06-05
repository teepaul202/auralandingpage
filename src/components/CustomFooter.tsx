import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Linkedin, Check, AlertCircle } from 'lucide-react';

interface CustomFooterProps {
  isDarkMode: boolean;
  socialsData?: any;
}

export default function CustomFooter({ isDarkMode, socialsData }: CustomFooterProps) {
  const [email, setEmail] = useState('');
  const [signupStatus, setSignupStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSignupStatus('error');
      setStatusMessage('Please supply a valid corporate email string.');
      setTimeout(() => setSignupStatus('idle'), 4000);
      return;
    }
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSignupStatus('success');
        setStatusMessage(data.message || 'Subscribed to structural regulatory alerts!');
        setEmail('');
      } else {
        setSignupStatus('error');
        setStatusMessage(data.error || 'Failed to subscribe.');
      }
    } catch (err) {
      setSignupStatus('error');
      setStatusMessage('Network error. Please try again.');
    }
    setTimeout(() => setSignupStatus('idle'), 5000);
  };

  const headerColor = isDarkMode ? 'text-stone-300' : 'text-stone-800';
  const hoverLinkColor = 'transition-colors duration-300 dark:hover:text-white hover:text-stone-900';

  return (
    <footer 
      id="custom-site-footer" 
      className={`border-t transition-colors duration-500 relative select-none z-10 ${
        isDarkMode 
          ? 'border-stone-850 bg-[#111111] text-stone-100' 
          : 'border-stone-100 bg-white text-stone-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Corporate Summary */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4 text-left">
            <span className={`font-sans font-bold text-lg tracking-[0.35em] uppercase leading-none ${
              isDarkMode ? 'text-stone-100' : 'text-stone-950'
            }`}>
              AURA
            </span>
            <p className={`text-xs leading-relaxed max-w-sm ${
              isDarkMode ? 'text-stone-400' : 'text-stone-600'
            }`}>
              The global employment schema network. We bind complex territorial tax, payment, statutory compliance, and benefits parameters into clean digital APIs for worldwide teams.
            </p>

            {/* Simulated Live System Cluster Health status */}
            <div className={`flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full border text-[10px] font-mono ${
              isDarkMode 
                ? 'bg-stone-950/40 border-stone-850 text-stone-400' 
                : 'bg-stone-50 border-stone-200 text-stone-600'
            }`}>
              <span className="w-2 h-2 rounded-full bg-stone-900 dark:bg-white animate-pulse shrink-0" />
              <span>Schema Sync: Live (Aura-V6)</span>
            </div>
          </div>

          {/* Quick link sections */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            
            {/* Products Column */}
            <div className="flex flex-col gap-3">
              <p className={`text-[10px] font-mono tracking-widest uppercase font-bold ${headerColor}`}>
                Ecosystem
              </p>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><a href="#product-customizer-section" className={`text-stone-500 ${hoverLinkColor}`}>Neuro Integrator</a></li>
                <li><a href="#product-customizer-section" className={`text-stone-500 ${hoverLinkColor}`}>EOR Console</a></li>
                <li><a href="#product-customizer-section" className={`text-stone-500 ${hoverLinkColor}`}>Compliance Sentry</a></li>
                <li><a href="#pricing-plans-section" className={`text-stone-500 ${hoverLinkColor}`}>Pricing Structure</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <p className={`text-[10px] font-mono tracking-widest uppercase font-bold ${headerColor}`}>
                Company
              </p>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><a href="#about-us-section" className={`text-stone-500 ${hoverLinkColor}`}>About Ethos</a></li>
                <li><a href="#about-us-section" className={`text-stone-500 ${hoverLinkColor}`}>Statutory Guard</a></li>
                <li><a href="#faqs-accordion-section" className={`text-stone-500 font-semibold ${hoverLinkColor}`}>FAQs Layer</a></li>
                <li><a href="#landing-root" className={`text-stone-500 flex items-center gap-0.5 ${hoverLinkColor}`}>Retainers <ArrowUpRight className="w-2.5 h-2.5" /></a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-3">
              <p className={`text-[10px] font-mono tracking-widest uppercase font-bold ${headerColor}`}>
                Compliance
              </p>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><span className={`text-stone-500 cursor-help ${hoverLinkColor}`}>Liability Shield</span></li>
                <li><span className={`text-stone-500 cursor-help ${hoverLinkColor}`}>L3 Audit Sentry</span></li>
                <li><span className={`text-stone-500 cursor-help ${hoverLinkColor}`}>EEO Statutes</span></li>
                <li><span className={`text-stone-500 cursor-help ${hoverLinkColor}`}>Legal Disclosures</span></li>
              </ul>
            </div>

          </div>

          {/* Interactive Newsletter Sign-up */}
          <div className="lg:col-span-3 flex flex-col items-start text-left gap-3.5">
            <p className={`text-[10px] font-mono tracking-widest uppercase font-bold ${headerColor}`}>
              Compliance Bulletin
            </p>
            <p className={`text-xs leading-relaxed ${
              isDarkMode ? 'text-stone-400' : 'text-stone-500'
            }`}>
              Receive a monthly summary of localized labor modifications and compliance revisions.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2 mt-1">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 pr-10 py-2.5 rounded-xl text-xs font-semibold outline-none border transition-all ${
                    isDarkMode
                      ? 'bg-stone-950 border-stone-800 focus:border-stone-600 text-stone-200'
                      : 'bg-stone-50 border-stone-200 focus:border-stone-400 text-stone-800'
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute inset-y-1 right-1 px-3 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors duration-250 cursor-pointer ${
                    isDarkMode
                      ? 'bg-white hover:bg-stone-200 text-stone-950'
                      : 'bg-stone-950 hover:bg-stone-800 text-white'
                  }`}
                >
                  Join
                </button>
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {signupStatus === 'success' && (
                  <div className={`text-[10px] font-medium flex items-center gap-1 mt-1 transition-all ${
                    isDarkMode ? 'text-white' : 'text-stone-900'
                  }`}>
                    <Check className="w-3 h-3 stroke-[2.5]" /> {statusMessage}
                  </div>
                )}
                {signupStatus === 'error' && (
                  <div className="text-[10px] text-rose-500 font-medium flex items-center gap-1 mt-1 transition-all">
                    <AlertCircle className="w-3 h-3" /> {statusMessage}
                  </div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        <hr className={`mb-8 ${isDarkMode ? 'border-stone-850' : 'border-stone-100'}`} />

        {/* Legal Disclaimer and Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-stone-500 font-mono tracking-wide">
            © {new Date().getFullYear()} Aura Ltd. Active shielding provided by global entities. All corporate frameworks intact.
          </p>

          {/* Socials Group */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase select-none mr-2">
              Connect cohort:
            </span>
            <a 
              href={socialsData?.twitter?.url || 'https://twitter.com/taiwopa70551204'} 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border rounded-full transition-all text-stone-500 ${
                isDarkMode 
                  ? 'border-stone-800 hover:border-stone-600 hover:text-white' 
                  : 'border-stone-205 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a 
              href={socialsData?.github?.url || 'https://github.com/teepaul202'} 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border rounded-full transition-all text-stone-500 ${
                isDarkMode 
                  ? 'border-stone-800 hover:border-stone-600 hover:text-white' 
                  : 'border-stone-205 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
