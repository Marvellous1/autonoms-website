"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Play, LayoutList } from "lucide-react";
import { staggerContainer, fadeUp, cardItem, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Tell us your goal",
    description:
      "Answer a few questions about your workflow, your targets, and your business. No technical knowledge needed.",
    iconBg: "bg-accent-sub",
    iconColor: "text-accent-text",
    connector: "bg-accent/20",
  },
  {
    step: "02",
    icon: Users,
    title: "We build your team",
    description:
      "Autonoms recommends the exact agents, tools, and playbook to get you to your goal. Tweak it until it's right.",
    iconBg: "bg-purple-sub",
    iconColor: "text-purple",
    connector: "bg-purple/20",
  },
  {
    step: "03",
    icon: Play,
    title: "Your agents get to work",
    description:
      "They run 24/7 — prospecting, outreaching, qualifying, and booking — logging every action in real time.",
    iconBg: "bg-teal-sub",
    iconColor: "text-teal",
    connector: "bg-teal/20",
  },
  {
    step: "04",
    icon: LayoutList,
    title: "Review and act",
    description:
      "All results land in one clean table. Export, follow up, or let your agents keep running while you focus on closing.",
    iconBg: "bg-success-sub",
    iconColor: "text-success",
    connector: null,
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
          How it works
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-t1 mb-4">
          From goal to results in minutes.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-t2 text-lg max-w-lg mx-auto leading-relaxed">
          No engineers. No long onboarding. Just tell us what you want to achieve.
        </motion.p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              variants={cardItem}
              className="relative flex flex-col gap-5"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-5 left-[calc(100%+0.75rem)] w-[calc(100%-1.5rem-2.5rem)] h-px ${s.connector} -translate-x-3`}
                  style={{ width: "calc(100% - 2.5rem)", left: "calc(2.5rem + 1.5rem)" }}
                />
              )}

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={s.iconColor} />
                </div>
                <span className="text-xs font-semibold text-t4 tracking-widest">{s.step}</span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-t1 mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-t3 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
