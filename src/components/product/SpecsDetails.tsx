/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown, ListCollapse, ListStart } from "lucide-react";
import { ProductSpecification } from "./types";
import { motion, AnimatePresence } from "motion/react";

interface SpecsDetailsProps {
  specifications: ProductSpecification[];
}

export default function SpecsDetails({ specifications }: SpecsDetailsProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(specifications[0]?.category || null);

  const toggleCategory = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  return (
    <section
      id="technical-specifications"
      className="bg-[#fafafa] text-black py-16 md:py-24 px-6 md:px-12 border-b border-neutral-150"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Editorial Headers */}
        <div className="lg:col-span-4 space-y-4" id="specs-editorial-headers">
          <span className="text-[10px] font-mono tracking-[0.45em] text-neutral-400 uppercase">
            THE ENGINE ROOM
          </span>
          <h3 className="text-3xl font-sans font-medium tracking-tight uppercase text-neutral-900">
            Technical
            <br />
            Architectures
          </h3>
          <p className="text-xs text-neutral-500 font-sans leading-relaxed max-w-sm">
            Meticulously engineered from custom silicon layers up. Review the raw physical and electrical boundaries that shape the high-definition acoustics of Neuron 1.
          </p>
        </div>

        {/* Right Side: Interactive specifications accordion rows */}
        <div className="lg:col-span-8 space-y-4" id="specs-accordion-lists">
          {specifications.map((cat, idx) => {
            const isSelected = expandedCategory === cat.category;
            return (
              <div
                key={cat.category}
                id={`specs-category-${idx}`}
                className="bg-white rounded-none border border-neutral-200/80 overflow-hidden shadow-sm hover:border-black/15 transition-colors"
              >
                {/* Trigger button */}
                <button
                  id={`specs-trigger-${idx}`}
                  onClick={() => toggleCategory(cat.category)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-neutral-800 focus:outline-none uppercase font-mono text-xs tracking-wider font-semibold group cursor-pointer"
                >
                  <span>{cat.category}</span>
                  <ChevronDown
                    size={16}
                    className={`text-neutral-400 group-hover:text-black transition-transform duration-300 ${
                      isSelected ? "rotate-180 text-black" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      id={`specs-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 border-t border-neutral-100 pt-4 space-y-4">
                        {cat.details.map((detail, dIdx) => (
                          <div
                            key={detail.label}
                            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-2 border-b border-neutral-50 last:border-b-0 text-xs"
                          >
                            <span className="md:col-span-4 font-mono text-neutral-400 uppercase tracking-wider">
                              {detail.label}
                            </span>
                            <span className="md:col-span-8 font-sans font-medium text-neutral-800 leading-relaxed">
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
