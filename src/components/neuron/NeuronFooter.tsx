import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function NeuronFooter() {
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmailValue("");
      }, 4000);
    }
  };

  return (
    <footer
      id="neuron-footer"
      className="bg-[#0e0e10] text-[#8e8e93] text-xs py-16 md:py-20 px-6 md:px-12 border-t border-white/5 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
        
        {/* Newsletter */}
        <div className="md:col-span-5 space-y-6">
          <span className="font-sans text-xs font-semibold tracking-[0.35em] text-white uppercase block">
            NEURON DISPATCHES
          </span>
          <p className="leading-relaxed text-neutral-400 max-w-sm">
            Subscribe to receive technical research briefs, direct model updates, and invitations to exclusive enterprise operational forums.
          </p>

          {isSubscribed ? (
            <div className="text-emerald-400 flex items-center gap-2 font-mono uppercase text-[10px] tracking-widest py-2 bg-emerald-500/10 px-4 max-w-sm border border-emerald-500/20">
              <Check size={14} /> Subscription Activated Successfully
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-2 max-w-md items-center gap-2">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent border-none w-full text-white placeholder-neutral-600 focus:outline-none focus:ring-0 uppercase font-mono text-[11px] tracking-widest"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                required
              />
              <button type="submit" className="text-white hover:text-neutral-400 p-1 cursor-pointer">
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Products */}
        <div className="md:col-span-3 space-y-4">
          <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-white uppercase block">
            LAB PRODUCTS
          </span>
          <ul className="space-y-2 font-mono uppercase text-[10px] tracking-widest text-neutral-400">
            <li><Link to="/neuron/1" className="hover:text-white transition-colors">Neuron 1 — Team Orchestrator</Link></li>
            <li><Link to="/neuron/2" className="hover:text-white transition-colors">Neuron 2 — Fluid Generation</Link></li>
            <li><Link to="/neuron/3" className="hover:text-white transition-colors">Neuron 3 — Design Synthesizer</Link></li>
            <li><Link to="/neuron/4" className="hover:text-white transition-colors">Neuron 4 — Dynamic Shielding</Link></li>
          </ul>
        </div>

        {/* Experiences */}
        <div className="md:col-span-4 space-y-4">
          <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-white uppercase block">
            EXPERIENCES & CARE
          </span>
          <ul className="space-y-2 font-mono uppercase text-[10px] tracking-widest text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Book Architecture Workshop</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise Uptime Service SLA</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Global Data Center Map</a></li>
            <li><Link to="/" className="hover:text-white transition-colors">Return to Aura Home</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
        <div>© 2026 NEURON SYSTEMS S.A. ALL COGNITIVE RIGHTS RESERVED.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Directive</a>
          <a href="#" className="hover:text-white transition-colors">Intellectual Codecs</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Calibration</a>
        </div>
      </div>
    </footer>
  );
}
