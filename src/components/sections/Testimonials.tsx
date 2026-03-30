"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, cardItem, fadeUp, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    quote:
      "We replaced our entire SDR prospecting workflow with Autonoms in a week. Our agents now run 24/7 and we've seen a 3× increase in qualified meetings without adding headcount.",
    name: "Tolu Adeyemi",
    role: "VP of Sales",
    company: "Flutterwave",
    accentColor: "border-accent/30",
    glowColor: "rgba(74,143,224,0.06)",
    dotColor: "bg-accent",
  },
  {
    quote:
      "The Human Operator model is what sold us. We get the speed of AI with a real person watching our back. Our team trusts it because nothing happens in the dark.",
    name: "Amara Osei",
    role: "Head of Operations",
    company: "Paystack",
    accentColor: "border-purple/30",
    glowColor: "rgba(167,139,250,0.06)",
    dotColor: "bg-purple",
  },
  {
    quote:
      "Setting up our outbound motion used to take months. With Autonoms we were live in two days. The Team Builder literally asked us three questions and had agents running.",
    name: "Chisom Eze",
    role: "CEO",
    company: "Moniepoint",
    accentColor: "border-teal/30",
    glowColor: "rgba(45,212,191,0.06)",
    dotColor: "bg-teal",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper className="bg-subtle">
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-14"
      >
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
          Customer stories
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-t1">
          Teams that already made the shift.
        </motion.h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={cardItem}
            className={`group relative flex flex-col gap-5 p-6 rounded-2xl bg-surface border border-line hover:${t.accentColor} transition-all duration-300 cursor-default overflow-hidden`}
            style={{ boxShadow: "none" }}
            whileHover={{ boxShadow: `0 0 32px ${t.glowColor}` }}
          >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-6 right-6 h-px ${t.dotColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

            <Quote size={18} className="text-t4 flex-shrink-0" />

            <p className="text-sm text-t2 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

            <div className="flex items-center gap-3 pt-2 border-t border-line">
              <div className={`w-8 h-8 rounded-full ${t.dotColor} opacity-70 flex items-center justify-center text-xs font-bold text-page`}>
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-t1 leading-none mb-0.5">{t.name}</p>
                <p className="text-xs text-t3">{t.role}, {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
