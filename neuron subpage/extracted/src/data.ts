/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "./types";

export const neuronProduct: Product = {
  id: "neuron-1",
  name: "Neuron 1",
  subtitle: "Cognitive Operations & AI Team Orchestrator",
  tagline: "Build your team with Aura. Synchronize natively.",
  description: "Establish seamless global alignment across multi-agent networks and international human personnel blockades. Powered by Aura, Neuron 1 automatically synchronizes regional team stands, integrates complex operational calendars, and evaluates shift synchronization flawlessly in absolute real-time.",
  longDescription: "Power your modern workforce with Neuron 1. Engineered to host Aura—our highly sophisticated, zero-latency cognitive coordination model. It synchronizes global team stands natively, keeping everyone perfectly aligned throughout complex operational schedules and managing international personnel with absolute precision.",
  price: 4999,
  sku: "N1-AI-AURA-2026",
  variants: [
    {
      id: "aura-dedicated",
      name: "Dedicated Cloud TPU Node",
      hex: "#1E293B",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=1200&q=80",
      caseImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=1200&q=80"
    }
  ],
  features: [
    {
      title: "Model Aura Integration",
      description: "Direct connection with Aura, evaluating operational timezone delays and team synchronicity with zero baseline lag.",
      icon: "Sparkles"
    },
    {
      title: "Native Global Stand Sync",
      description: "Collects, unifies, and translates cross-border team stands from multiple internal communication tools into structured action records.",
      icon: "Globe"
    },
    {
      title: "Complex Schedule Alignment",
      description: "Dynamically calculates and adjusts complex international schedules, resolving calendar blocks and coverage gaps on the fly.",
      icon: "Clock"
    },
    {
      title: "International Roster Control",
      description: "Manage, track, and assign globally distributed personnel based on real-time task priorities and jurisdictional availability.",
      icon: "Users"
    }
  ],
  specifications: [
    {
      category: "Aura AI Model Architecture",
      details: [
        { label: "Core Model Engine", value: "Aura v1.2 Mixture-of-Experts (MoE) Orchestrator" },
        { label: "Token Context Window", value: "2,048,000 Tokens (Fully dense attention)" },
        { label: "Evaluation Latency", value: "<72ms Token Time-to-First-Feedback" },
        { label: "Supported Languages", value: "118 dialects translated dynamically" },
        { label: "Grounding Accuracy", value: "99.8% precision with Enterprise RAG Connectors" }
      ]
    },
    {
      category: "Orchestration & Sync",
      details: [
        { label: "Active Team Nodes", value: "Unlimited concurrent global users & workspaces" },
        { label: "Schedule Adaptability", value: "Continuous calendar validation via GraphQL & REST hooks" },
        { label: "HR Systems Support", value: "Native sync with Workday, Deel, Rippling, and custom systems" },
        { label: "Agent Coordination", value: "Up to 5,000 sub-agent worker threads" },
        { label: "Communication Connectors", value: "Slack, Microsoft Teams, Discord, Google Chat" }
      ]
    },
    {
      category: "Security & Infrastructure",
      details: [
        { label: "Deployment Targets", value: "VPC Protected Dedicated Google Cloud TPU Cluster" },
        { label: "Encryption Mode", value: "AES-256-GCM hardware layer encryption" },
        { label: "Regulatory Compliance", value: "SOC 2 Type II, ISO 27001, GDPR, and HIPAA validated" },
        { label: "SLA Guarantee", value: "99.99% high-availability active-active multi-region failover" },
        { label: "Federated Audits", value: "Continuous cryptographic event auditing logs available" }
      ]
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Marcus Vance",
      rating: 5,
      date: "May 18, 2026",
      title: "Perfect alignment across three continents",
      comment: "We deployed Neuron 1 to synchronize our engineering teams across London, Tokyo, and San Francisco. Aura has eliminated scheduling misalignment and status-tracking overhead. Unbelievable performance."
    },
    {
      id: "rev-2",
      author: "Evelyn Sterling",
      rating: 5,
      date: "June 2, 2026",
      title: "Flawless international personnel roster control",
      comment: "The multi-lingual operational coordination is exceptionally fluent. Aura manages our international personnel rosters with zero friction. Highly recommended for complex enterprises."
    }
  ]
};
