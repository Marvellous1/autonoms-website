"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const faqs = [
  {
    question: "What exactly is Autonoms?",
    answer:
      "Autonoms is a platform that lets you assemble teams of AI agents for any business workflow. Instead of one general-purpose chatbot, you get a coordinated team of specialists — a prospector, an outreach agent, a qualifier — each with a clear role, working together toward your goal.",
  },
  {
    question: "Do I need engineering resources to get started?",
    answer:
      "No. The Team Builder walks you through setup with plain-English questions. You tell us your goal, describe your business, and we configure the agents for you. Most teams are live in under 2 minutes.",
  },
  {
    question: "What happens when an agent makes a mistake?",
    answer:
      "Every action is logged in real time, so nothing happens without a trail. For high-stakes moments, your dedicated Human Operator monitors activity, steps in when needed, and communicates directly with your team. You always have a human in the loop.",
  },
  {
    question: "Can I use Autonoms if I'm not an SDR team?",
    answer:
      "Yes. We launched with SDR because it's the most common use case, but Autonoms is built for any repeatable, multi-step workflow. Support teams, research teams, marketing, and operations are already on the roadmap — and you can always build a custom team.",
  },
  {
    question: "What tools and platforms does Autonoms integrate with?",
    answer:
      "We connect with Gmail, LinkedIn, Apollo, HubSpot, Salesforce, Slack, Calendly, Google Sheets, and more out of the box. Anything else can be connected via API or Zapier.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Your data stays yours. We don't use your business data to train models, and all information is encrypted in transit and at rest. Enterprise-grade security is built in from the start.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm md:text-base font-medium text-t1 group-hover:text-t1 transition-colors leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-surface border border-line flex items-center justify-center transition-colors group-hover:border-line-strong">
          {open ? (
            <Minus size={14} className="text-accent-text" />
          ) : (
            <Plus size={14} className="text-t3" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-t3 leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
            FAQ
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-t1">
            Questions we get asked a lot.
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface border border-line rounded-2xl px-6 divide-y divide-line"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
