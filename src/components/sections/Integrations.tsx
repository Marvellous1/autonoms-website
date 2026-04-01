"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Database,
  BarChart2,
  MessageSquare,
  Phone,
  FileSpreadsheet,
  Globe,
  Calendar,
  Search,
  Webhook,
  Layers,
} from "lucide-react";
import { staggerContainer, fadeUp, cardItem, viewportOnce } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const integrations = [
  { name: "Gmail", icon: Mail, color: "text-orange", bg: "bg-orange-sub" },
  { name: "LinkedIn", icon: Linkedin, color: "text-accent-text", bg: "bg-accent-sub" },
  { name: "Apollo", icon: Search, color: "text-purple", bg: "bg-purple-sub" },
  { name: "HubSpot", icon: BarChart2, color: "text-orange", bg: "bg-orange-sub" },
  { name: "Salesforce", icon: Database, color: "text-accent-text", bg: "bg-accent-sub" },
  { name: "Slack", icon: MessageSquare, color: "text-purple", bg: "bg-purple-sub" },
  { name: "Twilio", icon: Phone, color: "text-teal", bg: "bg-teal-sub" },
  { name: "Google Sheets", icon: FileSpreadsheet, color: "text-success", bg: "bg-success-sub" },
  { name: "Calendly", icon: Calendar, color: "text-teal", bg: "bg-teal-sub" },
  { name: "Zapier", icon: Webhook, color: "text-warning", bg: "bg-warning-sub" },
  { name: "Airtable", icon: Layers, color: "text-purple", bg: "bg-purple-sub" },
  { name: "Any website", icon: Globe, color: "text-t3", bg: "bg-overlay" },
];

export function Integrations() {
  return (
    <SectionWrapper>
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-14"
      >
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
          Integrations
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-t1 mb-4">
          Connects to the tools your team already uses.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-t2 text-lg max-w-md mx-auto leading-relaxed">
          No ripping out your stack. Autonoms plugs into your existing workflow from day one.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
      >
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <motion.div
              key={integration.name}
              variants={cardItem}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface border border-line hover:border-line-strong transition-colors duration-200 cursor-default"
            >
              <div className={`w-9 h-9 rounded-lg ${integration.bg} flex items-center justify-center`}>
                <Icon size={16} className={integration.color} />
              </div>
              <span className="text-xs font-medium text-t3 text-center leading-snug">{integration.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* More integrations callout */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center text-sm text-t4 mt-8"
      >
        And 800 other tools
      </motion.p>
    </SectionWrapper>
  );
}
