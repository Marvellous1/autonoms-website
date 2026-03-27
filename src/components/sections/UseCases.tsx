"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  Headphones,
  FlaskConical,
  Megaphone,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { staggerContainer, cardItem, fadeUp, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";

const useCases = [
  {
    icon: BarChart2,
    team: "SDR Team",
    description: "Prospect, outreach, qualify, book. Your full sales pipeline on autopilot.",
    available: true,
    iconBg: "bg-accent-sub",
    iconColor: "text-accent-text",
    glow: "hover:shadow-[0_0_28px_rgba(74,143,224,0.1)] hover:border-accent/30",
  },
  {
    icon: Headphones,
    team: "Support Team",
    description: "First-line responses, ticket triage, escalation routing.",
    available: false,
    iconBg: "bg-teal-sub",
    iconColor: "text-teal",
    glow: "hover:shadow-[0_0_28px_rgba(45,212,191,0.08)] hover:border-teal/20",
  },
  {
    icon: FlaskConical,
    team: "Research Team",
    description: "Deep research, data gathering, report generation.",
    available: false,
    iconBg: "bg-purple-sub",
    iconColor: "text-purple",
    glow: "hover:shadow-[0_0_28px_rgba(167,139,250,0.08)] hover:border-purple/20",
  },
  {
    icon: Megaphone,
    team: "Marketing Team",
    description: "Content research, campaign drafting, performance monitoring.",
    available: false,
    iconBg: "bg-orange-sub",
    iconColor: "text-orange",
    glow: "hover:shadow-[0_0_28px_rgba(251,146,60,0.08)] hover:border-orange/20",
  },
  {
    icon: Briefcase,
    team: "Operations Team",
    description: "Process automation, data enrichment, workflow coordination.",
    available: false,
    iconBg: "bg-warning-sub",
    iconColor: "text-warning",
    glow: "hover:shadow-[0_0_28px_rgba(251,191,36,0.08)] hover:border-warning/20",
  },
  {
    icon: Sparkles,
    team: "Custom",
    description: "Define your own team from the agent store.",
    available: true,
    iconBg: "bg-success-sub",
    iconColor: "text-success",
    glow: "hover:shadow-[0_0_28px_rgba(52,211,153,0.1)] hover:border-success/30",
  },
];

export function UseCases() {
  return (
    <SectionWrapper id="use-cases">
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-14"
      >
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
          Use Cases
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-[1.75rem] md:text-3xl font-semibold text-t1 mb-4">
          Any team. Any workflow.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-t2 text-lg max-w-xl mx-auto leading-relaxed">
          We start with SDR. But Autonoms is built for any team that runs on
          repeatable, multi-step work.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {useCases.map((uc) => {
          const Icon = uc.icon;
          return (
            <motion.div
              key={uc.team}
              variants={cardItem}
              className={`group relative bg-surface border border-line rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${uc.glow} cursor-default`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl ${uc.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={uc.iconColor} />
                </div>
                <Badge variant={uc.available ? "success" : "muted"}>
                  {uc.available ? "Available now" : "Coming soon"}
                </Badge>
              </div>
              <div>
                <h3 className="text-base font-semibold text-t1 mb-1.5">{uc.team}</h3>
                <p className="text-sm text-t3 leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
