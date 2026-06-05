/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import AIModelSpecifications from "./components/AIModelSpecifications";
import SpecsDetails from "./components/SpecsDetails";
import Footer from "./components/Footer";
import { neuronProduct } from "./data";
import { ColorVariant } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { Check, CreditCard, ShoppingBag, Terminal, Server, ShieldAlert, Cpu } from "lucide-react";

export default function App() {
  // State 1: Active cart shopping basket items
  const [cartItems, setCartItems] = useState<{ color: string; quantity: number; price: number }[]>([]);
  
  // State 2: Simulated checkout modal overlay
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"details" | "success">("details");
  
  // Simulated form inputs for checkout
  const [shippingName, setShippingName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const productViewerRef = useRef<HTMLDivElement | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Scroll smooth anchor jump
  const scrollToProductView = () => {
    if (productViewerRef.current) {
      productViewerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Cart logic triggers
  const handleAddToBag = (variant: ColorVariant) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.color === variant.name);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { color: variant.name, quantity: 1, price: neuronProduct.price }];
      }
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = Math.max(1, updated[index].quantity + delta);
      return updated;
    });
  };

  const handleExecuteCheckoutReceipt = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("success");
    // Clear cart after a small time trigger for success state
    setTimeout(() => {
      setCartItems([]);
    }, 2000);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutOpen(false);
    setCheckoutStep("details");
    // Flush form inputs
    setShippingName("");
    setShippingAddress("");
    setCardNum("");
    setCardExpiry("");
    setCardCvv("");
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-neutral-800 selection:text-white antialiased">
      
      {/* 1. Transparent Navigation Bar Header node */}
      <Header
        cartCount={totalCartCount}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* 2. Immersive Cinematic Hero Landing Section with new background video */}
      <Hero
        price={neuronProduct.price}
        onDiscoverClick={scrollToProductView}
      />

      {/* 3. Core Product Custom Swatches Viewer (Anchor ref targets physical view block) */}
      <div ref={productViewerRef} className="scroll-mt-18" id="anchored-product-viewer">
        <ProductViewer
          product={neuronProduct}
          onAddToBag={handleAddToBag}
        />
      </div>

      {/* 4. Specifications for our AI Substituting previous physical AcousticModel and StorySection */}
      <AIModelSpecifications />

      {/* 5. High-contrast Technical Accordion specs built around our cloud architecture */}
      <SpecsDetails specifications={neuronProduct.specifications} />

      {/* 6. Extra: Sleek User Review Endorsements Section */}
      <section id="user-endorsements-track" className="bg-white text-black py-16 md:py-20 px-6 md:px-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-left space-y-3">
            <span className="text-[10px] font-mono tracking-[0.45em] text-neutral-400 uppercase">CASE DEPLOYMENTS</span>
            <h3 className="text-2xl font-sans font-medium tracking-tight uppercase">Enterprise Evaluators</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="reviews-grid-cards">
            {neuronProduct.reviews.map((rev) => (
              <div
                key={rev.id}
                id={`review-node-${rev.id}`}
                className="p-8 border border-neutral-200/80 rounded-sm bg-neutral-50/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-black">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-neutral-800">{rev.title}</h4>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">{rev.date}</p>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">{rev.comment}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  <Terminal size={12} className="text-neutral-500" />
                  <span>CALIBRATED TEAM LEADER: <strong>{rev.author}</strong></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Fine Minimal Social and Locator Footer */}
      <Footer />

      {/* Fully Functional Immersive Simulated Checkout / Provisioning Modal Overlay */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Dark Backdrop lock */}
            <motion.div
              id="checkout-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCheckoutModal}
              className="absolute inset-0 bg-black"
            />

            {/* Simulated Provisioning Frame container */}
            <motion.div
              id="checkout-container-modal"
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative max-w-2xl w-full bg-[#121213] text-white p-6 md:p-8 rounded-sm z-50 border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">Secure B2B Transmission Channel</span>
                  <h3 className="text-sm font-sans font-bold uppercase tracking-wider">NEURON SYSTEMS Provisioning</h3>
                </div>
                <button
                  id="checkout-modal-close-btn"
                  onClick={handleCloseCheckoutModal}
                  className="p-1 px-3 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
                >
                  Cancel
                </button>
              </div>

              {checkoutStep === "details" ? (
                <form onSubmit={handleExecuteCheckoutReceipt} className="grid grid-cols-1 md:grid-cols-12 gap-8" id="checkout-form">
                  
                  {/* Left Column: Form Fields */}
                  <div className="md:col-span-7 space-y-4">
                    
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase block">Corporate Gateways</span>
                      <input
                        id="checkout-shipping-name"
                        type="text"
                        placeholder="PRIMARY ARCHITECT NAME (E.G. MARCUS VANCE)"
                        className="w-full bg-white/5 border border-white/10 p-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-white focus:ring-0 text-white placeholder-neutral-600 rounded-sm"
                        value={shippingName}
                        onChange={(e) => setShippingName(e.target.value)}
                        required
                      />
                      <input
                        id="checkout-shipping-address"
                        type="text"
                        placeholder="TARGET VPC NODE GATEWAY ADDRESS"
                        className="w-full bg-white/5 border border-white/10 p-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-white focus:ring-0 text-white placeholder-neutral-600 rounded-sm mt-2"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase block flex items-center gap-1.5">
                        <CreditCard size={12} /> Billing Instrument
                      </span>
                      
                      <input
                        id="checkout-card-num"
                        type="text"
                        placeholder="BILLING CARD NUMBER"
                        pattern="\d{16}"
                        maxLength={16}
                        className="w-full bg-white/5 border border-white/10 p-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-white focus:ring-0 text-white placeholder-neutral-600 rounded-sm"
                        value={cardNum}
                        onChange={(e) => setCardNum(e.target.value.replace(/\D/g, ''))}
                        required
                      />

                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <input
                          id="checkout-card-expiry"
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full bg-white/5 border border-white/10 p-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-white focus:ring-0 text-white placeholder-neutral-600 rounded-sm"
                          value={cardExpiry}
                          onChange={(e) => {
                            let val = e.target.value;
                            if (val.length === 2 && !val.includes('/')) val += '/';
                            setCardExpiry(val);
                          }}
                          required
                        />
                        <input
                          id="checkout-card-cvv"
                          type="password"
                          placeholder="CVV"
                          maxLength={3}
                          pattern="\d{3}"
                          className="w-full bg-white/5 border border-white/10 p-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-white focus:ring-0 text-white placeholder-neutral-600 rounded-sm"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-2 text-[10px] text-neutral-400 font-mono tracking-widest">
                      <div className="flex items-center gap-2">
                        <Server size={12} className="text-neutral-500" />
                        <span>Dedicated warm node space provisioned instantly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldAlert size={12} className="text-neutral-500" />
                        <span>HIPAA and SOC2 compliance validation certificates set</span>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Mini Bill Ledger Overview */}
                  <div className="md:col-span-5 flex flex-col justify-between bg-white/[0.02] border border-white/5 p-4 rounded-sm" id="ledger-column">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase block border-b border-white/5 pb-2">Instance Ledger</span>
                      
                      <div className="space-y-3 max-h-40 overflow-y-auto pr-2" id="checkout-drawer-items">
                        {cartItems.map((item) => (
                          <div key={item.color} className="flex justify-between text-xs font-mono">
                            <span className="text-neutral-400">{item.color} x{item.quantity}</span>
                            <span className="text-neutral-100">${(item.price * item.quantity).toLocaleString()}/mo</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1.5 pt-4 border-t border-white/5">
                        <div className="flex justify-between text-xs font-mono text-neutral-400">
                          <span>Node Configuration Fee</span>
                          <span>Bespoke / Free</span>
                        </div>
                        <div className="flex justify-between text-xs font-mono text-neutral-400">
                          <span>Solutions Onboarding</span>
                          <span>Bespoke / Free</span>
                        </div>
                        <div className="flex justify-between items-end pt-2 border-t border-white/5">
                          <span className="text-[10px] font-mono uppercase text-neutral-400">EST. MONTHLY LICENSING</span>
                          <span className="font-sans text-lg font-bold text-white">${totalCartAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      id="execute-purchase-btn"
                      type="submit"
                      className="w-full mt-6 py-4 bg-white text-black font-sans text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 active:scale-95 transition-all text-center cursor-pointer"
                    >
                      Authorize Core Instance
                    </button>
                  </div>

                </form>
              ) : (
                <div className="py-12 text-center space-y-6" id="checkout-success-log">
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce">
                    <Check size={28} />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-base font-sans font-semibold uppercase tracking-wider text-emerald-400">Aura Core Instance Active</h4>
                    <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Core node transit established securely, <strong>{shippingName || "Architect Paton"}</strong>. Aura is warming up and establishing real-time synchronization routes under target gateway: <code>{shippingAddress || "VPC GATEWAY"}</code>.
                    </p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm max-w-sm mx-auto text-[10px] font-mono text-neutral-500 uppercase tracking-widest space-y-1">
                    <div>Authorized Architect: {shippingName || "Principal Team Leader"}</div>
                    <div>Configuration Target: {shippingAddress || "Sandbox Node Hub"}</div>
                    <div>Est. Monthly Rate: ${totalCartAmount.toLocaleString()} USD</div>
                  </div>

                  <button
                    id="finish-checkout-btn"
                    onClick={handleCloseCheckoutModal}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase border border-white/10 transition-colors"
                  >
                    Return to control console
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
