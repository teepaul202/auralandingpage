import React, { useState } from "react";
import { Maximize2, Check, Clock, Calendar, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product, ColorVariant } from "../../types";

interface NeuronProductViewerProps {
  product: Product;
  onAddToBag: (variant: ColorVariant) => void;
}

export default function NeuronProductViewer({ product, onAddToBag }: NeuronProductViewerProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [activeImageMode, setActiveImageMode] = useState<"video" | "infra">("video");
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBagAddedToast, setIsBagAddedToast] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState("EU Central (Frankfurt) Enterprise Hub");
  const [bookingDate, setBookingDate] = useState("2026-06-10");
  const [bookingTime, setBookingTime] = useState("14:30");
  const [bookingBooked, setBookingBooked] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex];

  const executeAddToBag = () => {
    onAddToBag(currentVariant);
    setIsBagAddedToast(true);
    setTimeout(() => setIsBagAddedToast(false), 3500);
  };

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingBooked(true);
    setTimeout(() => {
      setBookingBooked(false);
      setIsBookingOpen(false);
    }, 4000);
  };

  return (
    <section
      id="neuron-product-viewer"
      className="bg-white text-[#18181A] py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left: Media Viewer */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          <button
            onClick={() => setIsZoomOpen(true)}
            className="absolute top-2 right-4 z-10 p-3 hover:bg-neutral-100 rounded-full transition-colors text-neutral-500 hover:text-black focus:outline-none"
          >
            <Maximize2 size={18} />
          </button>

          <div className="w-full aspect-video md:aspect-square max-w-[500px] flex items-center justify-center relative bg-neutral-950 rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {activeImageMode === "video" ? (
                <motion.div
                  key="video-preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <video
                    src={product.heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                </motion.div>
              ) : (
                <motion.img
                  key="infra-preview"
                  src={currentVariant.image}
                  alt={`${product.name} Architecture`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              )}
            </AnimatePresence>
          </div>

          <div className="w-full max-w-[500px] flex items-center justify-between mt-8 border-t border-neutral-100 pt-6">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveImageMode("video")}
                className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors px-3 py-1 cursor-pointer focus:outline-none ${
                  activeImageMode === "video" ? "font-bold text-black border-b-2 border-black" : "text-neutral-400 hover:text-black"
                }`}
              >
                Model Evaluation
              </button>
              <button
                onClick={() => setActiveImageMode("infra")}
                className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors px-3 py-1 cursor-pointer focus:outline-none ${
                  activeImageMode === "infra" ? "font-bold text-black border-b-2 border-black" : "text-neutral-400 hover:text-black"
                }`}
              >
                Topology Map
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Sparkles size={12} className="text-neutral-900 animate-pulse" />
              <span>LIVE FEED</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.45em] text-neutral-500 uppercase flex items-center gap-1">
              <Sparkles size={10} className="text-neutral-400" /> MODEL AURA ENGINE
            </span>
            <h2 className="text-3xl font-sans font-medium tracking-tight text-neutral-900 uppercase">
              {product.name}
            </h2>
            <p className="font-sans text-lg text-neutral-700 font-medium tracking-wide">
              {product.subtitle}
            </p>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed font-sans font-normal border-b border-neutral-100 pb-6">
            {product.description}
          </p>

          <div className="space-y-4 pt-4">
            <div className="font-sans text-2xl font-semibold tracking-wider text-neutral-900">
              ${product.price.toLocaleString()} <span className="text-xs text-neutral-400 font-mono font-normal">/ month per workspace seat</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                id="neuron-add-to-bag-btn"
                onClick={executeAddToBag}
                className="flex-1 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              >
                Provision Instance
              </button>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1 py-4 border border-neutral-900 hover:bg-neutral-50 text-neutral-900 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              >
                Request briefing
              </button>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-neutral-100 text-xs font-sans text-neutral-700">
            {[
              "Instant provisioning & model warm-up",
              "14-day fully-featured sandbox pass",
              "99.99% high-availability SLA uptime",
              "SOC 2 Type II securely encrypted pipelines",
              "24/7 Dedicated solutions engineering support",
              "Optional zero-retention data residency",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <Check size={14} className="text-neutral-500 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {isBagAddedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 bg-[#121213] text-white px-8 py-4 shadow-2xl rounded-sm border border-white/10 flex items-center gap-4 text-xs font-sans font-medium tracking-wide uppercase"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Successfully Provisioned {product.name} Instance</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full p-6 text-center"
            >
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-neutral-400 p-2 cursor-pointer"
              >
                Close View (ESC)
              </button>
              {activeImageMode === "video" ? (
                <video src={product.heroVideo} autoPlay loop muted playsInline className="max-h-[80vh] mx-auto object-contain filter drop-shadow-2xl" />
              ) : (
                <img src={currentVariant.image} alt={`${product.name} Topology`} className="max-h-[80vh] mx-auto object-contain filter drop-shadow-2xl" referrerPolicy="no-referrer" />
              )}
              <div className="mt-6 text-white font-sans text-xs tracking-widest uppercase">
                {product.name} — Engine Visualization Stream
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative max-w-md w-full bg-white text-black p-8 rounded-sm z-10 shadow-2xl space-y-6"
            >
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">Enterprise Solutions Briefing</span>
                  <h3 className="text-lg font-sans font-semibold uppercase">Schedule {product.name} Workshop</h3>
                </div>
                <button onClick={() => setIsBookingOpen(false)} className="p-1 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer text-neutral-500">
                  ✕
                </button>
              </div>

              {bookingBooked ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <Check size={20} />
                  </div>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-neutral-800">Briefing Session Scheduled</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Your architecture deep-dive briefing has been booked for <strong>{bookingDate}</strong> at <strong>{bookingTime}</strong> on the <strong>{selectedRegion}</strong> grid.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookSession} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase block">Select Target Hub</label>
                    <select
                      className="w-full border border-neutral-200 rounded-sm p-3 text-xs font-sans uppercase focus:outline-none focus:ring-1 focus:ring-black"
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                      <option value="EU Central (Frankfurt) Enterprise Hub">EU Central (Frankfurt) Enterprise Hub</option>
                      <option value="US East (N. Virginia) High-Core Grid">US East (N. Virginia) High-Core Grid</option>
                      <option value="Asia-East (Tokyo) Multi-Agent Edge Lab">Asia-East (Tokyo) Multi-Agent Edge Lab</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase block">Date</label>
                      <div className="relative">
                        <input type="date" className="w-full border border-neutral-200 rounded-sm p-2 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-black" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} min="2026-06-06" required />
                        <Calendar size={12} className="absolute right-2.5 top-3 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase block">Time</label>
                      <div className="relative">
                        <select className="w-full border border-neutral-200 rounded-sm p-2 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-black" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)} required>
                          <option value="10:00">10:00 AM AST</option>
                          <option value="11:30">11:30 AM AST</option>
                          <option value="13:00">01:00 PM AST</option>
                          <option value="14:30">02:30 PM AST</option>
                          <option value="16:00">04:00 PM AST</option>
                        </select>
                        <Clock size={12} className="absolute right-6 top-3 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-sm text-[10px] font-mono text-neutral-500 flex items-start gap-2 leading-relaxed">
                    <HelpCircle size={14} className="shrink-0 text-neutral-400 mt-0.5" />
                    <span>Includes dynamic model latency evaluations, architecture mapping, and custom compliance frameworks setup assessment. Fully complimentary.</span>
                  </div>

                  <button type="submit" className="w-full py-3.5 bg-black text-white font-sans text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer text-center">
                    Confirm Briefing Space
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
