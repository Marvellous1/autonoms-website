"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const toolLabels: Record<string, string> = {
  apollo: "Apollo",
  clearbit: "Clearbit",
  linkedin: "LinkedIn",
  gmail: "Gmail",
  hubspot: "HubSpot",
  "google-calendar": "Google Calendar",
  calendly: "Calendly",
};

const teams = [
  {
    label: "SDR Team",
    color: "text-accent-text",
    dotColor: "bg-accent",
    tagBg: "bg-accent-sub",
    tagText: "text-accent-text",
    agents: [
      {
        id: "ami",
        name: "Ami",
        role: "Lead Sourcing Specialist",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/Ami.png",
        status: "active",
        description:
          "Sources ICP-matched leads, enriches contact details, deduplicates, and imports prospects into your pipeline.",
        tools: ["apollo", "clearbit", "linkedin"],
      },
      {
        id: "tobi",
        name: "Tobi",
        role: "LinkedIn Outreach Specialist",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/AI+Employee-3.png",
        status: "active",
        description:
          "Finds prospects on LinkedIn, sends compliant connection requests, follows up, and books meetings in DMs.",
        tools: ["linkedin", "apollo", "gmail"],
      },
      {
        id: "chidi",
        name: "Chidi",
        role: "Research & ICP Expert",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/Chidi.png",
        status: "active",
        description:
          "Researches accounts and decision makers, sharpens your ICP, and supplies personalization insights for outreach.",
        tools: ["linkedin", "apollo", "clearbit"],
      },
      {
        id: "queen",
        name: "Queen",
        role: "Qualification Specialist",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/Queen.png",
        status: "idle",
        description:
          "Scores leads against your ICP, routes high-fit prospects to outreach, and filters out low-quality leads.",
        tools: ["gmail", "hubspot"],
      },
      {
        id: "milli",
        name: "Milli",
        role: "Email Outreach Specialist",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/AI+Employee-3.png",
        status: "active",
        description:
          "Runs cold email sequences with smart follow-ups, personalization, and engagement tracking.",
        tools: ["gmail", "apollo", "clearbit"],
      },
      {
        id: "femi",
        name: "Femi",
        role: "Meeting Coordinator",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/Femi.png",
        status: "active",
        description:
          "Confirms bookings, sends reminders, handles reschedules/no-shows, and logs outcomes to your CRM.",
        tools: ["google-calendar", "calendly", "gmail"],
      },
      {
        id: "marcus",
        name: "Marcus",
        role: "CRM Operations",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/Marcus.png",
        status: "active",
        description:
          "Keeps your CRM clean and up to date: syncs records, logs activity, dedupes, and runs hygiene checks.",
        tools: ["google-calendar", "gmail", "hubspot"],
      },
      {
        id: "jane",
        name: "Jane",
        role: "Data Enrichment Specialist",
        imagePath: "https://ai-employee-bucket.s3.us-east-1.amazonaws.com/Jane.png",
        status: "idle",
        description:
          "Finds missing emails/phones, enriches profiles, and verifies data before outreach starts.",
        tools: ["apollo", "clearbit", "linkedin"],
      },
      {
        id: "nia",
        name: "Nia",
        role: "SDR Support",
        imagePath: "https://autonoms-os-spaces.sfo3.cdn.digitaloceanspaces.com/ai-team-avatars/Nia.png",
        status: "idle",
        description:
          "Flexible SDR support for overflow work—list building, enrichment, and outreach assistance when volume spikes.",
        tools: ["apollo", "linkedin", "gmail"],
      },
    ],
  },
  {
    label: "RevOps Team",
    color: "text-purple",
    dotColor: "bg-purple",
    tagBg: "bg-purple-sub",
    tagText: "text-purple",
    agents: [
      {
        id: "piper",
        name: "Piper",
        role: "Pipeline Manager",
        imagePath: "https://autonoms-os-spaces.sfo3.cdn.digitaloceanspaces.com/ai-team-avatars/Piper.png",
        status: "active",
        description:
          "Moves prospects through stages, watches engagement signals, and flags bottlenecks before pipeline stalls.",
        tools: ["hubspot", "gmail"],
      },
      {
        id: "drake",
        name: "Drake",
        role: "Deal Manager",
        imagePath: "https://autonoms-os-spaces.sfo3.cdn.digitaloceanspaces.com/ai-team-avatars/Drake.png",
        status: "active",
        description:
          "Creates and tracks deals end-to-end, forecasts revenue, and flags at-risk opportunities.",
        tools: ["hubspot", "gmail"],
      },
      {
        id: "atlas",
        name: "Atlas",
        role: "Activity Tracker",
        imagePath: "https://autonoms-os-spaces.sfo3.cdn.digitaloceanspaces.com/ai-team-avatars/Atlas.png",
        status: "active",
        description:
          "Logs every touchpoint to the CRM and maintains a clean engagement timeline for attribution and analysis.",
        tools: ["hubspot", "gmail", "linkedin"],
      },
      {
        id: "raven",
        name: "Raven",
        role: "Report Analyst",
        imagePath: "https://autonoms-os-spaces.sfo3.cdn.digitaloceanspaces.com/ai-team-avatars/Raven.png",
        status: "idle",
        description:
          "Produces daily/weekly pipeline reports, highlights bottlenecks, and keeps the team aligned on forecasts.",
        tools: ["hubspot", "gmail"],
      },
    ],
  },
];

const CARD_W = 240;
const GAP = 24;
const STEP = CARD_W + GAP;

function AgentCard({
  agent,
  tagBg,
  tagText,
}: {
  agent: (typeof teams)[0]["agents"][0];
  tagBg: string;
  tagText: string;
}) {
  return (
    <div className="flex flex-col gap-3 cursor-default group" style={{ width: CARD_W, flexShrink: 0 }}>
      {/* Portrait photo */}
      <div className="relative rounded-2xl overflow-hidden bg-surface border border-line aspect-3/4 w-full">
        <img
          src={agent.imagePath}
          alt={agent.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-page/80 backdrop-blur-sm border border-line text-xs font-medium">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${agent.status === "active" ? "bg-success animate-pulse-dot" : "bg-t4"}`} />
          <span className={agent.status === "active" ? "text-success" : "text-t4"}>
            {agent.status === "active" ? "Active" : "Idle"}
          </span>
        </span>
      </div>

      {/* Name + role + description */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-t1 leading-snug">{agent.name}</p>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full inline-block w-fit ${tagBg} ${tagText}`}>
          {agent.role}
        </span>
        <p className="text-sm text-t2 leading-relaxed">{agent.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {agent.tools.map((t) => (
            <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-overlay text-t4 border border-line-sub">
              {toolLabels[t] ?? t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgentsCarousel({ team }: { team: typeof teams[0] }) {
  const n = team.agents.length;
  // Triple the array so we can always scroll left and right without hitting an edge
  const items = [...team.agents, ...team.agents, ...team.agents];

  // idx: which item index is at the left of the visible area. Start at n (middle copy).
  const [idx, setIdx] = useState(n);
  const [animated, setAnimated] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovered = useRef(false);

  const goNext = useCallback(() => { setAnimated(true); setIdx(i => i + 1); }, []);
  const goPrev = useCallback(() => { setAnimated(true); setIdx(i => i - 1); }, []);

  // After CSS transition ends, silently reset to equivalent position in middle copy
  // Guard against child element transitions bubbling up
  const onTransitionEnd = useCallback((e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setIdx(i => {
      if (i >= n * 2) { setAnimated(false); return i - n; }
      if (i < n)     { setAnimated(false); return i + n; }
      return i;
    });
  }, [n]);

  // Re-enable animation on next frame after a silent reset
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Reset to middle copy when team changes
  useEffect(() => {
    setAnimated(false);
    setIdx(n);
  }, [n]);

  // Auto-advance — pause on hover
  useEffect(() => {
    autoRef.current = setInterval(() => {
      if (!hovered.current) goNext();
    }, 3500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [goNext]);

  const translateX = -(idx * STEP);

  return (
    <div
      className="relative"
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; }}
    >
      {/* Left gradient overlay + button */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-subtle to-transparent pointer-events-none" />
      <button
        onClick={goPrev}
        className="absolute left-5 top-[30%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-surface/90 border border-line flex items-center justify-center hover:border-line-strong hover:bg-overlay transition-all duration-200"
      >
        <ChevronLeft size={18} className="text-t2" />
      </button>

      {/* Right gradient overlay + button */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-subtle to-transparent pointer-events-none" />
      <button
        onClick={goNext}
        className="absolute right-5 top-[30%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-surface/90 border border-line flex items-center justify-center hover:border-line-strong hover:bg-overlay transition-all duration-200"
      >
        <ChevronRight size={18} className="text-t2" />
      </button>

      {/* Track */}
      <div className="overflow-hidden px-2 md:px-4">
        <div
          style={{
            display: "flex",
            gap: GAP,
            minWidth: "max-content",
            transform: `translateX(${translateX}px)`,
            transition: animated ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {items.map((agent, i) => (
            <AgentCard key={i} agent={agent} tagBg={team.tagBg} tagText={team.tagText} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AgentPersonas() {
  const [activeTab, setActiveTab] = useState(0);
  const team = teams[activeTab];

  return (
    <SectionWrapper id="agents">
      <div className="rounded-3xl border border-line bg-subtle shadow-card-hover px-5 py-10 md:px-10 md:py-14 overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-10"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-4">
            Meet your agents
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-t1 mb-4">
            Each agent has a name,{" "}<br />a role, and a job to do.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-t2 text-lg max-w-xl mx-auto leading-relaxed">
            Unlike generic AI assistants, Autonoms agents are specialists. They coordinate as a team and hand off work seamlessly.
          </motion.p>
        </motion.div>

        {/* Tabs — centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-2 p-1 rounded-full bg-surface border border-line">
            {teams.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  activeTab === i ? "bg-accent text-white" : "text-t3 hover:text-t2"
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full transition-colors", activeTab === i ? "bg-white/60" : t.dotColor)} />
                {t.label}
                <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-medium transition-colors", activeTab === i ? "bg-white/20 text-white" : "bg-overlay text-t4")}>
                  {t.agents.length}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <AgentsCarousel team={team} />
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
