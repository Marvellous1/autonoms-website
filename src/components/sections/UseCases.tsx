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
    description:
      "Prospect, outreach, qualify, book. Your full sales pipeline on autopilot.",
    available: true,
  },
  {
    icon: Headphones,
    team: "Support Team",
    description:
      "First-line responses, ticket triage, escalation routing.",
    available: false,
  },
  {
    icon: FlaskConical,
    team: "Research Team",
    description:
      "Deep research, data gathering, report generation.",
    available: false,
  },
  {
    icon: Megaphone,
    team: "Marketing Team",
    description:
      "Content research, campaign drafting, performance monitoring.",
    available: false,
  },
  {
    icon: Briefcase,
    team: "Operations Team",
    description:
      "Process automation, data enrichment, workflow coordination.",
    available: false,
  },
  {
    icon: Sparkles,
    team: "Custom",
    description: "Define your own team from the agent store.",
    available: true,
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
        <motion.h2 variants={fadeUp} className="text-[1.625rem] md:text-3xl font-semibold text-t1 mb-4">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {useCases.map((uc) => {
          const Icon = uc.icon;
          return (
            <motion.div
              key={uc.team}
              variants={cardItem}
              className="group relative bg-surface border border-line rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(74,143,224,0.08)] cursor-default"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-accent-sub flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent-text" />
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
