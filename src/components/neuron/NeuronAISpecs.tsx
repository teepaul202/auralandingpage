import { motion } from "motion/react";
import { Cpu, Zap, Database, CheckCircle2, ShieldAlert, GitBranch } from "lucide-react";
import { Product } from "../../types";

interface NeuronAISpecsProps {
  product: Product;
}

export default function NeuronAISpecs({ product }: NeuronAISpecsProps) {
  const iconMap: Record<number, any> = {
    0: Cpu,
    1: Zap,
    2: Database,
  };

  // Take the first 3 specification categories and present them as spec cards
  const specsForCards = product.specifications.slice(0, 3).map((spec, idx) => ({
    icon: iconMap[idx] || Cpu,
    title: spec.category,
    metric: spec.details[0]?.value || "Advanced Architecture",
    description: product.features[idx]?.description || spec.details[1]?.value || "",
    subMetrics: spec.details.slice(1, 3).map((d) => ({
      label: d.label,
      value: d.value,
    })),
  }));

  return (
    <section
      id="neuron-ai-specs-section"
      className="bg-[#0c0c0e] text-white py-20 md:py-28 px-6 md:px-12 border-t border-b border-neutral-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] font-mono tracking-[0.45em] text-neutral-500 uppercase block">
            AI OPERATIONS DEEP-DIVE
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-white uppercase">
            {product.name} Specifications
          </h2>
          <p className="text-sm text-neutral-400 font-sans leading-relaxed">
            {product.longDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specsForCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="bg-[#121215] border border-white/5 p-8 rounded-sm hover:border-white/10 transition-all flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
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

        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase block flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-emerald-500" /> Fully Compliant Orchestration Layer
            </span>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Every operation evaluated by the {product.name} model adheres strictly to enterprise access boundaries, localized compliance regulations, and zero-retention transit paths.
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
