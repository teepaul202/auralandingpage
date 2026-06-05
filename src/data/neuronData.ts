import { Product } from "../types";

export const neuronProducts: Record<string, Product> = {
  "1": {
    id: "neuron-1",
    name: "Neuron 1",
    subtitle: "Cognitive Operations & AI Team Orchestrator",
    tagline: "Build your team with Aura. Synchronize natively.",
    description:
      "Establish seamless global alignment across multi-agent networks and international human personnel blockades. Powered by Aura, Neuron 1 automatically synchronizes regional team stands, integrates complex operational calendars, and evaluates shift synchronization flawlessly in absolute real-time.",
    longDescription:
      "Power your modern workforce with Neuron 1. Engineered to host Aura—our highly sophisticated, zero-latency cognitive coordination model. It synchronizes global team stands natively, keeping everyone perfectly aligned throughout complex operational schedules and managing international personnel with absolute precision.",
    price: 4999,
    sku: "N1-AI-AURA-2026",
    heroVideo: "https://labs.google/fx/api/og-video/shared/6f3b969e-069b-4fd3-a633-ba9e7c5d4916",
    variants: [
      {
        id: "aura-dedicated",
        name: "Dedicated Cloud TPU Node",
        hex: "#1E293B",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=1200&q=80",
        caseImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=1200&q=80",
      },
    ],
    features: [
      {
        title: "Model Aura Integration",
        description: "Direct connection with Aura, evaluating operational timezone delays and team synchronicity with zero baseline lag.",
        icon: "Sparkles",
      },
      {
        title: "Native Global Stand Sync",
        description: "Collects, unifies, and translates cross-border team stands from multiple internal communication tools into structured action records.",
        icon: "Globe",
      },
      {
        title: "Complex Schedule Alignment",
        description: "Dynamically calculates and adjusts complex international schedules, resolving calendar blocks and coverage gaps on the fly.",
        icon: "Clock",
      },
      {
        title: "International Roster Control",
        description: "Manage, track, and assign globally distributed personnel based on real-time task priorities and jurisdictional availability.",
        icon: "Users",
      },
    ],
    specifications: [
      {
        category: "Aura AI Model Architecture",
        details: [
          { label: "Core Model Engine", value: "Aura v1.2 Mixture-of-Experts (MoE) Orchestrator" },
          { label: "Token Context Window", value: "2,048,000 Tokens (Fully dense attention)" },
          { label: "Evaluation Latency", value: "<72ms Token Time-to-First-Feedback" },
          { label: "Supported Languages", value: "118 dialects translated dynamically" },
          { label: "Grounding Accuracy", value: "99.8% precision with Enterprise RAG Connectors" },
        ],
      },
      {
        category: "Orchestration & Sync",
        details: [
          { label: "Active Team Nodes", value: "Unlimited concurrent global users & workspaces" },
          { label: "Schedule Adaptability", value: "Continuous calendar validation via GraphQL & REST hooks" },
          { label: "HR Systems Support", value: "Native sync with Workday, Deel, Rippling, and custom systems" },
          { label: "Agent Coordination", value: "Up to 5,000 sub-agent worker threads" },
          { label: "Communication Connectors", value: "Slack, Microsoft Teams, Discord, Google Chat" },
        ],
      },
      {
        category: "Security & Infrastructure",
        details: [
          { label: "Deployment Targets", value: "VPC Protected Dedicated Google Cloud TPU Cluster" },
          { label: "Encryption Mode", value: "AES-256-GCM hardware layer encryption" },
          { label: "Regulatory Compliance", value: "SOC 2 Type II, ISO 27001, GDPR, and HIPAA validated" },
          { label: "SLA Guarantee", value: "99.99% high-availability active-active multi-region failover" },
          { label: "Federated Audits", value: "Continuous cryptographic event auditing logs available" },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Marcus Vance",
        rating: 5,
        date: "May 18, 2026",
        title: "Perfect alignment across three continents",
        comment: "We deployed Neuron 1 to synchronize our engineering teams across London, Tokyo, and San Francisco. Aura has eliminated scheduling misalignment and status-tracking overhead. Unbelievable performance.",
      },
      {
        id: "rev-2",
        author: "Evelyn Sterling",
        rating: 5,
        date: "June 2, 2026",
        title: "Flawless international personnel roster control",
        comment: "The multi-lingual operational coordination is exceptionally fluent. Aura manages our international personnel rosters with zero friction. Highly recommended for complex enterprises.",
      },
    ],
  },

  "2": {
    id: "neuron-2",
    name: "Neuron 2",
    subtitle: "High-Speed Fluid Matrix Generation Engine",
    tagline: "Accelerate creation. Generate at lightspeed.",
    description:
      "Neuron 2 delivers record-breaking fluid matrix generation powered by advanced parallelized rendering pipelines. Transform raw data into stunning visual compositions, 3D environments, and dynamic simulations with unmatched speed and fidelity.",
    longDescription:
      "Unlock creative potential with Neuron 2's groundbreaking fluid matrix generation engine. Purpose-built for high-throughput media pipelines, real-time 3D asset creation, and dynamic simulation rendering. Powered by custom TPU accelerators optimized for continuous generative workflows.",
    price: 7499,
    sku: "N2-FLUID-GEN-2026",
    heroVideo: "https://labs.google/fx/api/og-video/shared/799b27b4-3218-48c5-9c73-c0622ce96d93",
    variants: [
      {
        id: "fluid-cluster",
        name: "Parallel Render Cluster",
        hex: "#065F46",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&h=1200&q=80",
        caseImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&h=1200&q=80",
      },
    ],
    features: [
      {
        title: "Fluid Matrix Pipeline",
        description: "Parallelized rendering engine that generates complex fluid simulations, volumetric effects, and dynamic compositions in real-time.",
        icon: "Sparkles",
      },
      {
        title: "Real-Time 3D Asset Forge",
        description: "Instantly create production-ready 3D models, textures, and environments from text or image prompts with photorealistic fidelity.",
        icon: "Globe",
      },
      {
        title: "Multi-Modal Generation",
        description: "Seamlessly generate across video, image, audio, and 3D modalities from unified prompts with consistent style transfer.",
        icon: "Clock",
      },
      {
        title: "Adaptive Resolution Scaling",
        description: "Dynamic resolution upscaling from 720p to 8K using neural super-resolution without quality loss or artifact introduction.",
        icon: "Users",
      },
    ],
    specifications: [
      {
        category: "Generation Engine Architecture",
        details: [
          { label: "Core Model", value: "FluidGen v2.0 Diffusion Transformer (DiT)" },
          { label: "Generation Speed", value: "4K image in <1.2s, 30s video in <8s" },
          { label: "Parallel Streams", value: "Up to 256 concurrent generation threads" },
          { label: "Output Formats", value: "PNG, EXR, MP4, GLTF, USD, USDZ" },
          { label: "Style Transfer", value: "Zero-shot cross-domain style adaptation" },
        ],
      },
      {
        category: "Rendering & Processing",
        details: [
          { label: "Max Resolution", value: "8192 × 8192 native generation" },
          { label: "Video Length", value: "Up to 120s continuous generation at 60fps" },
          { label: "3D Generation", value: "Full mesh + PBR textures in <15s" },
          { label: "Batch Processing", value: "10,000+ assets per hour throughput" },
          { label: "Physics Simulation", value: "Real-time fluid, cloth, and particle dynamics" },
        ],
      },
      {
        category: "Security & Compliance",
        details: [
          { label: "Content Safety", value: "Multi-layer content filtering with human-in-the-loop" },
          { label: "IP Protection", value: "Automated copyright and trademark detection" },
          { label: "Data Residency", value: "Regional isolation with zero-retention options" },
          { label: "Audit Trail", value: "Complete provenance tracking for all generated assets" },
          { label: "Compliance", value: "SOC 2 Type II, GDPR, CCPA validated" },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-3",
        author: "Liam Chen",
        rating: 5,
        date: "May 25, 2026",
        title: "Revolutionary speed for our VFX pipeline",
        comment: "Neuron 2 cut our asset generation time by 90%. What used to take our team days now happens in minutes. The quality is indistinguishable from manually crafted assets.",
      },
      {
        id: "rev-4",
        author: "Sofia Alvarez",
        rating: 5,
        date: "June 1, 2026",
        title: "Game-changing for real-time content creation",
        comment: "We're generating entire virtual environments on the fly for our live broadcasts. The fluid matrix pipeline handles everything from particle effects to full scene composition seamlessly.",
      },
    ],
  },

  "3": {
    id: "neuron-3",
    name: "Neuron 3",
    subtitle: "Neural Design Synthesizer & Adaptive Schema Engine",
    tagline: "Design intelligently. Adapt dynamically.",
    description:
      "Neuron 3 adapts to active design schemas in real-time, synthesizing layout systems, component architectures, and interaction patterns that evolve with user behavior. Build design systems that think and respond autonomously.",
    longDescription:
      "Transform your design workflow with Neuron 3's neural design synthesizer. It continuously analyzes user interactions, accessibility metrics, and conversion patterns to autonomously evolve your design systems. From component libraries to full application interfaces, Neuron 3 ensures every pixel serves a purpose.",
    price: 5999,
    sku: "N3-DESIGN-SYN-2026",
    heroVideo: "https://labs.google/fx/api/og-video/shared/6f3b969e-069b-4fd3-a633-ba9e7c5d4916",
    variants: [
      {
        id: "design-core",
        name: "Design Intelligence Core",
        hex: "#854D0E",
        image: "https://images.unsplash.com/photo-1634017839464-5c339afa60f0?auto=format&fit=crop&w=1200&h=1200&q=80",
        caseImage: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&h=1200&q=80",
      },
    ],
    features: [
      {
        title: "Adaptive Schema Engine",
        description: "Continuously learns from user interaction patterns and autonomously evolves design systems to maximize engagement and accessibility compliance.",
        icon: "Sparkles",
      },
      {
        title: "Component Synthesis",
        description: "Generates production-ready UI components with proper semantics, ARIA labels, and responsive behavior from natural language specifications.",
        icon: "Globe",
      },
      {
        title: "Design Token Intelligence",
        description: "Manages and optimizes design tokens across platforms—automatically adjusting color, spacing, typography for brand consistency and accessibility.",
        icon: "Clock",
      },
      {
        title: "A/B Test Automation",
        description: "Autonomously generates, deploys, and analyzes design variants to identify highest-performing layouts without manual configuration.",
        icon: "Users",
      },
    ],
    specifications: [
      {
        category: "Design AI Architecture",
        details: [
          { label: "Core Model", value: "SynthDesign v3.1 Vision-Language Transformer" },
          { label: "Component Generation", value: "Full React/Vue/Swift component in <3s" },
          { label: "Accessibility Score", value: "WCAG 2.2 AAA auto-compliance" },
          { label: "Design Systems", value: "Supports Figma, Sketch, Adobe XD sync" },
          { label: "Multi-Platform", value: "Web, iOS, Android, Desktop simultaneous output" },
        ],
      },
      {
        category: "Intelligence & Learning",
        details: [
          { label: "Behavior Analysis", value: "Real-time heatmap and interaction flow tracking" },
          { label: "Conversion Optimization", value: "Autonomous layout optimization for KPI targets" },
          { label: "Brand Consistency", value: "99.7% design token compliance across platforms" },
          { label: "Pattern Library", value: "50,000+ validated interaction patterns" },
          { label: "Feedback Loop", value: "Continuous RLHF from user testing sessions" },
        ],
      },
      {
        category: "Integration & Security",
        details: [
          { label: "Version Control", value: "Full Git integration with semantic versioning" },
          { label: "CI/CD Pipeline", value: "Auto-deploy design updates with rollback" },
          { label: "Access Control", value: "Role-based design system permissions" },
          { label: "Audit Log", value: "Complete change history with visual diffs" },
          { label: "Compliance", value: "SOC 2 Type II, ISO 27001 validated" },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-5",
        author: "Aisha Patel",
        rating: 5,
        date: "May 20, 2026",
        title: "Our design system finally evolves on its own",
        comment: "Neuron 3 watches how users interact with our platform and suggests design improvements we never thought of. Our conversion rates jumped 34% in the first month.",
      },
      {
        id: "rev-6",
        author: "Tobias Richter",
        rating: 5,
        date: "May 30, 2026",
        title: "Accessibility compliance without the overhead",
        comment: "Every component Neuron 3 generates meets WCAG AAA standards out of the box. What used to require weeks of auditing now happens automatically during generation.",
      },
    ],
  },

  "4": {
    id: "neuron-4",
    name: "Neuron 4",
    subtitle: "Dynamic Shielding & Auto-Hardened Runtime Security",
    tagline: "Shield dynamically. Harden autonomously.",
    description:
      "Neuron 4 provides stunning dynamic shielding capabilities, auto-hardening your runtime environment against evolving threats. Advanced threat intelligence, zero-trust architecture, and autonomous incident response keep your infrastructure impenetrable.",
    longDescription:
      "Fortify your digital infrastructure with Neuron 4's autonomous security engine. It continuously monitors, adapts, and hardens your runtime environment using advanced threat intelligence, behavioral analysis, and zero-trust networking. From DDoS mitigation to insider threat detection, Neuron 4 ensures your systems remain impenetrable.",
    price: 8999,
    sku: "N4-SHIELD-SEC-2026",
    heroVideo: "https://labs.google/fx/api/og-video/shared/6f3b969e-069b-4fd3-a633-ba9e7c5d4916",
    variants: [
      {
        id: "shield-fortress",
        name: "Fortress Security Cluster",
        hex: "#9A3412",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=1200&h=1200&q=80",
        caseImage: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&h=1200&q=80",
      },
    ],
    features: [
      {
        title: "Dynamic Threat Shielding",
        description: "Real-time threat detection and mitigation using behavioral AI that adapts to new attack vectors within milliseconds of discovery.",
        icon: "Sparkles",
      },
      {
        title: "Auto-Hardening Runtime",
        description: "Continuously scans and patches your runtime environment, automatically closing vulnerabilities before they can be exploited.",
        icon: "Globe",
      },
      {
        title: "Zero-Trust Mesh Network",
        description: "Every connection verified, every packet inspected. Microsegmentation ensures lateral movement is impossible even in compromised environments.",
        icon: "Clock",
      },
      {
        title: "Autonomous Incident Response",
        description: "AI-driven incident response that isolates threats, preserves forensics, and restores services without human intervention.",
        icon: "Users",
      },
    ],
    specifications: [
      {
        category: "Security AI Architecture",
        details: [
          { label: "Core Model", value: "ShieldAI v4.0 Threat Intelligence Transformer" },
          { label: "Detection Latency", value: "<5ms threat identification and classification" },
          { label: "Threat Database", value: "Real-time feed from 2.3B+ threat signatures" },
          { label: "False Positive Rate", value: "<0.001% with contextual analysis" },
          { label: "Attack Surface Reduction", value: "97.3% autonomous surface minimization" },
        ],
      },
      {
        category: "Protection & Response",
        details: [
          { label: "DDoS Mitigation", value: "Up to 15 Tbps volumetric attack absorption" },
          { label: "Incident Response", value: "Mean time to containment <30 seconds" },
          { label: "Vulnerability Scanning", value: "Continuous CVE monitoring with auto-patching" },
          { label: "Encryption", value: "Post-quantum cryptographic algorithms (CRYSTALS-Kyber)" },
          { label: "Forensics", value: "Full packet capture and timeline reconstruction" },
        ],
      },
      {
        category: "Compliance & Governance",
        details: [
          { label: "Certifications", value: "SOC 2 Type II, ISO 27001, FedRAMP High, PCI DSS" },
          { label: "Zero Trust", value: "NIST SP 800-207 compliant architecture" },
          { label: "Data Sovereignty", value: "40+ regional data residency zones" },
          { label: "Audit Capability", value: "Real-time compliance dashboards and automated reports" },
          { label: "Insider Threat", value: "UEBA behavioral analysis with anomaly detection" },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-7",
        author: "James Okafor",
        rating: 5,
        date: "May 22, 2026",
        title: "Stopped a sophisticated attack in real-time",
        comment: "Neuron 4 detected and contained a multi-vector attack on our infrastructure within 8 seconds. Our SOC team was amazed—the system had already isolated the threat before they even saw the alert.",
      },
      {
        id: "rev-8",
        author: "Helena Strauss",
        rating: 5,
        date: "June 3, 2026",
        title: "Compliance automation that actually works",
        comment: "We went from spending 3 months on compliance audits to having real-time dashboards showing our exact posture. Neuron 4's auto-hardening keeps us continuously compliant.",
      },
    ],
  },
};

export const getNeuronProduct = (id: string): Product | undefined => {
  return neuronProducts[id];
};

export const getAllNeuronIds = (): string[] => {
  return Object.keys(neuronProducts);
};
