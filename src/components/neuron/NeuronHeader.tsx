import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, User, MapPin, ShoppingBag, X, Plus, Minus, Check, ShieldCheck, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NeuronHeaderProps {
  cartCount: number;
  cartItems: { color: string; quantity: number; price: number }[];
  onRemoveFromCart: (colorIndex: number) => void;
  onUpdateQuantity: (colorIndex: number, delta: number) => void;
  onCheckout: () => void;
  neuronName: string;
}

export default function NeuronHeader({
  cartCount,
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
  onCheckout,
  neuronName,
}: NeuronHeaderProps) {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <header
        id="neuron-navbar-container"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between text-white">
          
          {/* Left Block: Back + Menu + Search */}
          <div className="flex items-center gap-4 sm:gap-6" id="neuron-nav-left">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs font-mono tracking-wider hover:text-neutral-300 transition-colors uppercase group focus:outline-none"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <button
              id="neuron-menu-toggle-btn"
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 text-xs font-mono tracking-wider hover:text-neutral-300 transition-colors uppercase group focus:outline-none"
            >
              <Menu size={16} className="group-hover:rotate-6 transition-transform" />
              <span className="hidden sm:inline">Menu</span>
            </button>
            <button
              id="neuron-search-toggle-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-2 text-xs font-mono tracking-wider hover:text-neutral-300 transition-colors uppercase group focus:outline-none"
            >
              <Search size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Center: Brand */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center" id="neuron-brand-logo">
            <Link to="/" className="group focus:outline-none select-none">
              <span className="font-sans text-lg font-semibold tracking-[0.35em] text-white uppercase transition-colors">
                NEURON
              </span>
              <span className="block text-[8px] font-mono tracking-[0.6em] text-neutral-400 mt-0.5 uppercase">
                SYSTEMS
              </span>
            </Link>
          </div>

          {/* Right Block */}
          <div className="flex items-center gap-6" id="neuron-nav-right">
            <button
              className="hover:text-neutral-300 transition-colors focus:outline-none hidden md:inline-block"
              title="Corporate Console"
            >
              <User size={18} />
            </button>
            <button
              id="neuron-shopping-bag-btn"
              onClick={() => setIsBagOpen(true)}
              className="relative flex items-center gap-2 hover:text-neutral-300 transition-colors focus:outline-none"
              title="Your Provisioning Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-white text-black font-sans font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              id="neuron-search-bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-black/95 border-b border-white/10 overflow-hidden"
            >
              <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
                <Search size={18} className="text-neutral-400 shrink-0" />
                <input
                  id="neuron-search-input"
                  type="text"
                  placeholder="SEARCH COGNITIVE MODELS, PLUGINS, SECURED INSTANCES..."
                  className="w-full bg-transparent border-none text-white placeholder-neutral-500 font-mono text-sm tracking-widest uppercase focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Slide-out Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="absolute top-0 bottom-0 left-0 w-full max-w-md bg-[#121212] border-r border-white/10 text-white p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase">NEURON SYSTEMS</span>
                  <button onClick={() => setIsMenuOpen(false)} className="hover:text-neutral-400">
                    <X size={20} />
                  </button>
                </div>
                <nav className="space-y-6">
                  {[
                    { label: "HOME", path: "/" },
                    { label: "NEURON 1 — TEAM ORCHESTRATOR", path: "/neuron/1" },
                    { label: "NEURON 2 — FLUID GENERATION", path: "/neuron/2" },
                    { label: "NEURON 3 — DESIGN SYNTHESIZER", path: "/neuron/3" },
                    { label: "NEURON 4 — DYNAMIC SHIELDING", path: "/neuron/4" },
                  ].map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: index * 0.08 } }}
                      onClick={() => { setIsMenuOpen(false); navigate(item.path); }}
                      className="block text-lg font-sans font-medium tracking-widest hover:text-neutral-400 transition-colors uppercase text-left w-full"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase mb-2">Enterprise Support Access</div>
                <div className="space-y-2 text-xs font-mono text-neutral-300">
                  <a href="#" className="block hover:underline">Connect with Dedicated Solutions Engineers</a>
                  <a href="#" className="block hover:underline">SLA Premium Performance Support Policy</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-out Cart Drawer */}
      <AnimatePresence>
        {isBagOpen && (
          <div className="fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBagOpen(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="absolute top-0 bottom-0 right-0 w-full max-w-md bg-[#0e0e0e] border-l border-white/10 text-white p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase">PROVISIONING LEDGER</span>
                  <button onClick={() => setIsBagOpen(false)} className="hover:text-neutral-400 transition-colors">
                    <X size={20} />
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <div className="py-20 text-center">
                    <ShoppingBag size={48} className="mx-auto text-neutral-600 mb-4 animate-bounce" />
                    <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">Your ledger is empty.</p>
                  </div>
                ) : (
                  <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                    {cartItems.map((item, index) => (
                      <div key={item.color} className="flex gap-4 p-4 rounded-lg bg-neutral-900/60 border border-white/5 relative group">
                        <div className="w-20 h-20 bg-neutral-800 rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center shadow-lg bg-slate-800">
                            <ShieldCheck size={20} className="text-neutral-200" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-sans text-xs font-semibold tracking-wider uppercase">{neuronName} Enterprise Node</h4>
                            <p className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase mt-0.5">{item.color}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-white/10 rounded-sm">
                              <button className="px-2 py-0.5 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors" onClick={() => onUpdateQuantity(index, -1)}>
                                <Minus size={10} />
                              </button>
                              <span className="px-3 py-0.5 text-xs font-mono">{item.quantity}</span>
                              <button className="px-2 py-0.5 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors" onClick={() => onUpdateQuantity(index, 1)}>
                                <Plus size={10} />
                              </button>
                            </div>
                            <span className="font-sans text-xs tracking-wider">${(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        </div>
                        <button onClick={() => onRemoveFromCart(index)} className="absolute top-2 right-2 p-1 text-neutral-500 hover:text-white transition-colors">
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">Est. Total</span>
                    <span className="font-sans text-xl font-medium tracking-wider text-white">${totalAmount.toLocaleString()}/mo</span>
                  </div>
                  <button
                    onClick={() => { setIsBagOpen(false); onCheckout(); }}
                    className="w-full py-4 bg-white text-black font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Check size={14} /> Process Node Order
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
