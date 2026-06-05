/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Cpu, Zap, Database, CheckCircle2, ShieldAlert, GitBranch } from "lucide-react";

export default function AIModelSpecifications() {
  const specs = [
    {
      icon: Cpu,
      title: "Model Aura Cognitive Core",
      metric: "320B Mixture-of-Experts",
      description: "Optimized for continuous, massive team timeline consolidation and multi-agent workload allocation. Aura utilizes specialized, sparse expert routes to coordinate schedules and personnel without computational overhead.",
      subMetrics: [
        { label: "Grounded Precision", value: "99.8%" },
        { label: "Fine-Tuning Loop", value: "RLHF Dynamic Adapters" }
      ]
    },
    {
      icon: Zap,
      title: "Sub-80ms Low-Latency Eval Engine",
      metric: "72ms Real-Time Eval",
      description: "Operational updates, scheduled stands, and cross-border calendars synchronize in real-time. Aura evaluates schedule alignments dynamically, giving distributed teams unified feedback with zero baseline lag.",
      subMetrics: [
        { label: "Time-to-First-Token", value: "12ms" },
        { label: "Regional Stand Sync", value: "Sub-second broadcast" }
      ]
    },
    {
      icon: Database,
      title: "High-Context Operational Frame",
      metric: "2.1M Token Memory Window",
      description: "Holds entire corporate structural configurations, historic roster schedules, cross-timezone availability rules, and compliance boundaries concurrently in dense working memory.",
      subMetrics: [
        { label: "Needle-in-Haystack accuracy", value: "100.0%" },
        { label: "RAG Connector Integrations", value: "GraphQL & REST Hooks" }
      ]
    }
  ];

  return (
    <section
      id="ai-model-specifications-section"
      className="bg-[#0c0c0e] text-white py-20 md:py-28 px-6 md:px-12 border-t border-b border-neutral-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Typographic Header Block */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] font-mono tracking-[0.45em] text-neutral-500 uppercase block">
            AI OPERATIONS DEEP-DIVE
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-white uppercase">
            Model Specifications
          </h2>
          <p className="text-sm text-neutral-400 font-sans leading-relaxed">
            Neuron 1 is powered by Aura—our high-density, multi-modal orchestration intelligence. Built to resolve the overhead of human resource allocation and timezone clashes natively, Aura establishes seamless synchronization across your entire organizational network.
          </p>
        </div>

        {/* Dynamic Bento Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="ai-specs-grid">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                id={`ai-spec-card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="bg-[#121215] border border-white/5 p-8 rounded-sm hover:border-white/10 transition-all flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  {/* Decorative Icon Wrapper */}
                  <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-neutral-300">
                    <Icon size={20} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-medium text-neutral-100 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <div className="text-2xl font-mono text-white font-semibold">
                      {item.metric}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Sub-metrics Dashboard */}
                <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4 bg-white/[0.01] p-3 rounded-sm">
                  {item.subMetrics.map((sm, smIdx) => (
                    <div key={smIdx} className="space-y-1">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase block tracking-wider">
                        {sm.label}
                      </span>
                      <span className="text-xs font-sans font-bold text-neutral-200 uppercase">
                        {sm.value}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust banner detailing alignment security */}
        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6" id="alignment-trust-badge">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase block flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-emerald-500" /> Fully Compliant Orchestration Layer
            </span>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Every synchronization sequence evaluated by the Aura model adheres strictly to enterprise access boundaries, localized labor compliance regulations, and zero-retention transit paths.
            </p>
          </div>
          <div className="flex gap-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest shrink-0">
            <div className="flex items-center gap-2">
              <GitBranch size={12} className="text-neutral-400" />
              <span>TLS 1.3 SECURED</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert size={12} className="text-neutral-400" />
              <span>GDPR AUDITED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
