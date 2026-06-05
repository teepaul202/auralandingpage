import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Users, Compass, Shield, Briefcase, HelpCircle, ArrowRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Submenu items for services
  const servicesList = [
    { name: 'Global Payroll', desc: 'Compliant wages in 185+ countries', icon: Briefcase },
    { name: 'Employer of Record', desc: 'Scale your team without local entities', icon: Users },
    { name: 'Entity Setup', desc: 'Fast, secure local incorporation guidance', icon: Compass },
    { name: 'Compliance Guard', desc: 'Built-in local employment contracts', icon: Shield },
  ];

  return (
    <div id="nav-container" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-50">
      {/* Main Capsule Navbar */}
      <nav 
        id="navbar-capsule" 
        className="bg-black border border-black hover:shadow-lg transition-shadow duration-300 rounded-full px-5 py-2.5 md:px-8 md:py-4 flex items-center justify-between"
      >
        {/* Brand Logo - Styled like HEVA */}
        <div id="brand-logo" className="flex items-center pl-2 cursor-pointer">
          <span className="font-sans font-semibold text-base md:text-lg tracking-[0.35em] text-white leading-none uppercase bg-black">
            AURA
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div id="desktop-links" className="hidden md:flex items-center gap-8">
          {/* Services with dropdown */}
          <div 
            id="services-dropdown" 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              id="btn-services"
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-stone-300 transition-colors py-1 px-3 cursor-pointer bg-[#332e2e] rounded-[2.68435px] border-[0.8px] border-stone-600/50"
            >
              Our Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Card */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  id="services-menu"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-3xl shadow-xl border border-black/5 p-4 z-50"
                  style={{ color: '#000000' }}
                >
                  <div className="grid gap-2">
                    {servicesList.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <div 
                           key={index} 
                           className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#1e251a]/5 transition-all cursor-pointer group"
                        >
                          <div className="p-2 bg-[#1e251a]/5 rounded-xl group-hover:bg-[#1e251a]/10 transition-colors">
                            <Icon className="w-4 h-4 text-[#1e251a]" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#1e251a]">{service.name}</p>
                            <p className="text-[11px] text-[#4e5549]">{service.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            id="link-how-it-works"
            href="#how-it-works" 
            className="text-sm font-medium text-white hover:text-stone-300 transition-colors cursor-pointer"
          >
            How It Works
          </a>
          
          <a 
            id="link-products"
            href="#product-customizer-section" 
            className="text-sm font-medium text-white hover:text-stone-300 transition-colors cursor-pointer"
          >
            Products
          </a>

          <a 
            id="link-about-us"
            href="#about-us-section" 
            className="text-sm font-medium text-white hover:text-stone-300 transition-colors cursor-pointer"
          >
            About Us
          </a>

          <a 
            id="link-pricing"
            href="#pricing-plans-section" 
            className="text-sm font-medium text-white hover:text-stone-300 transition-colors cursor-pointer"
          >
            Pricing
          </a>

          <a 
            id="link-faqs"
            href="#faqs-accordion-section" 
            className="text-sm font-medium text-white hover:text-stone-300 transition-colors cursor-pointer"
          >
            FAQs
          </a>
        </div>

        {/* Desktop Buttons */}
        <div id="desktop-actions" className="hidden md:flex items-center gap-6">
          <a 
            id="link-talk-team"
            className="text-sm font-medium text-white hover:text-stone-300 underline underline-offset-4 decoration-white/35 hover:decoration-white transition-all cursor-pointer"
          >
            Talk to our team
          </a>
          <button 
            id="btn-login"
            className="border border-white/25 text-sm font-medium text-white hover:bg-white/10 rounded-full px-5 py-2.5 transition-all cursor-pointer"
          >
            Member Login
          </button>
          <button 
            id="btn-get-started"
            className="bg-white hover:bg-stone-100 text-black text-sm font-medium rounded-full px-5 py-2.5 shadow-sm transition-all cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Drawer Button */}
        <div id="mobile-toggle" className="flex md:hidden items-center pr-1 gap-2">
          <button
            id="btn-mobile-login"
            className="border border-white/25 text-[11px] font-medium text-white rounded-full px-3 py-1.5 transition-all"
          >
            Login
          </button>
          <button
            id="btn-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-4 right-4 mt-3 rounded-3xl p-6 shadow-2xl border flex flex-col gap-6 z-50 md:hidden transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-stone-900 border-stone-800 text-stone-100 shadow-stone-950/50' 
                : 'bg-[#fbfbf6] border-[#1e251a]/10 text-stone-800'
            }`}
          >
            <div className="flex flex-col gap-4">
              <p className={`text-[10px] font-bold tracking-wider uppercase ${isDarkMode ? 'text-stone-400' : 'text-[#1e251a]/40'}`}>Services</p>
              <div className="grid grid-cols-1 gap-2 pl-1">
                {servicesList.map((service, index) => (
                  <div key={index} className="flex items-center justify-between group py-1 cursor-pointer">
                    <span className={`text-sm font-medium transition-colors ${
                      isDarkMode 
                        ? 'text-stone-300 group-hover:text-white' 
                        : 'text-[#4e5549] group-hover:text-[#1e251a]'
                    }`}>{service.name}</span>
                    <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 ${
                      isDarkMode ? 'text-stone-300' : 'text-[#4e5549]'
                    }`} />
                  </div>
                ))}
              </div>
              <hr className={isDarkMode ? 'border-stone-850' : 'border-[#1e251a]/10'} />

              <a 
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 block transition-colors ${
                  isDarkMode ? 'text-stone-300 hover:text-white' : 'text-[#4e5549] hover:text-[#1e251a]'
                }`}
              >
                How It Works
              </a>
              <a 
                href="#product-customizer-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 block transition-colors ${
                  isDarkMode ? 'text-stone-300 hover:text-white' : 'text-[#4e5549] hover:text-[#1e251a]'
                }`}
              >
                Products
              </a>
              <a 
                href="#about-us-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 block transition-colors ${
                  isDarkMode ? 'text-stone-300 hover:text-white' : 'text-[#4e5549] hover:text-[#1e251a]'
                }`}
              >
                About Us
              </a>
              <a 
                href="#pricing-plans-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 block transition-colors ${
                  isDarkMode ? 'text-stone-300 hover:text-white' : 'text-[#4e5549] hover:text-[#1e251a]'
                }`}
              >
                Pricing
              </a>
              <a 
                href="#faqs-accordion-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 block transition-colors ${
                  isDarkMode ? 'text-stone-300 hover:text-white' : 'text-[#4e5549] hover:text-[#1e251a]'
                }`}
              >
                FAQs
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a className={`text-center text-sm font-medium py-2 cursor-pointer transition-colors ${
                isDarkMode ? 'text-stone-300 hover:text-white' : 'text-[#4e5549] hover:text-[#1e251a]'
              }`}>
                Talk to our team
              </a>
              <button className={`w-full text-sm font-medium rounded-full py-3 shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-white hover:bg-stone-100 text-black shadow-none' 
                  : 'bg-[#2f352a]/95 hover:bg-[#1e251a] text-[#fbfbf6]'
              }`}>
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
