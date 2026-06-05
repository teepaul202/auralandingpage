/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function Footer() {
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
      id="brand-clean-footer"
      className="bg-[#0e0e10] text-[#8e8e93] text-xs py-16 md:py-20 px-6 md:px-12 border-t border-white/5 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
        
        {/* Box 1: Newsletter */}
        <div className="md:col-span-5 space-y-6" id="footer-newsletter">
          <span className="font-sans text-xs font-semibold tracking-[0.35em] text-white uppercase block">
            NEURON DISPATCHES
          </span>
          <p className="leading-relaxed text-neutral-400 max-w-sm">
            Subscribe to receive technical research briefs, direct model updates, and invitations to exclusive enterprise operational forums.
          </p>

          {isSubscribed ? (
            <div className="text-emerald-400 flex items-center gap-2 font-mono uppercase text-[10px] tracking-widest py-2 bg-emerald-500/10 px-4 max-w-sm border border-emerald-500/20" id="newsletter-success">
              <Check size={14} /> Subscription Activated Successfully
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-2 max-w-md items-center gap-2" id="newsletter-form">
              <input
                id="newsletter-email-input"
                type="email"
                placeholder="YOUR EMAIL ADRESS"
                className="bg-transparent border-none w-full text-white placeholder-neutral-600 focus:outline-none focus:ring-0 uppercase font-mono text-[11px] tracking-widest"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                required
              />
              <button
                id="newsletter-subscribe-btn"
                type="submit"
                className="text-white hover:text-neutral-400 p-1 cursor-pointer"
                title="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Box 2: Column products */}
        <div className="md:col-span-3 space-y-4" id="footer-menu-prods">
          <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-white uppercase block">
            LAB PRODUCTS
          </span>
          <ul className="space-y-2 font-mono uppercase text-[10px] tracking-widest text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Neuron 1 Core Node</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Aura Cloud Orchestrator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Distributed Stand Synchronizer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">VPC Security Infrastructure</a></li>
          </ul>
        </div>

        {/* Box 3: Column values */}
        <div className="md:col-span-4 space-y-4" id="footer-menu-experience">
          <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-white uppercase block">
            EXPERIENCES & CARE
          </span>
          <ul className="space-y-2 font-mono uppercase text-[10px] tracking-widest text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Book Architecture Workshop</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise Uptime Service SLA</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Global Data Center Map</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Solutions Engineering Gateway</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-neutral-600 uppercase" id="footer-bottom-bar">
        <div>
          © 2026 NEURON SYSTEMS S.A. ALL COGNITIVE RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Directive</a>
          <a href="#" className="hover:text-white transition-colors">Intellectual Codecs</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Calibration</a>
        </div>
      </div>
    </footer>
  );
}
