# Autonoms AI — Landing Page Content
**Version 3.0 | March 2026 — Updated to match autonoms-app theme**

---

## Design System (Exact App Theme)

### Backgrounds
| Token | Value | Usage |
|---|---|---|
| `--bg-page` | `#0C0C0E` | Page background |
| `--bg-surface` | `#141416` | Cards, panels |
| `--bg-overlay` | `#1C1C1F` | Modals, dropdowns |
| `--bg-subtle` | `#111113` | Alternate section backgrounds |
| `--bg-hover` | `#1B1B1F` | Hover states |

### Borders
| Token | Value |
|---|---|
| `--border-line` | `#222228` |
| `--border-line-sub` | `#1C1C20` |
| `--border-line-strong` | `#2E2E35` |

### Text
| Token | Value | Usage |
|---|---|---|
| `--t1` | `#ECECF1` | Primary text, headings |
| `--t2` | `#9595A4` | Secondary text, body copy |
| `--t3` | `#636370` | Muted labels, captions |
| `--t4` | `#46464F` | Placeholder, very muted |

### Accent (Brand Blue)
| Token | Value |
|---|---|
| `--accent` | `#4A8FE0` |
| `--accent-hover` | `#3A7FD0` |
| `--accent-sub` | `rgba(74,143,224,0.10)` |
| `--accent-text` | `#7AB3F4` |

### Status Colors
| Token | Value |
|---|---|
| `--success` | `#34D399` |
| `--success-sub` | `rgba(52,211,153,0.08)` |
| `--warning` | `#FBBF24` |
| `--warning-sub` | `rgba(251,191,36,0.08)` |
| `--error` | `#F87171` |
| `--error-sub` | `rgba(248,113,113,0.08)` |
| `--purple` | `#A78BFA` |
| `--teal` | `#2DD4BF` |
| `--orange` | `#FB923C` |

### Shadows
| Token | Value |
|---|---|
| `--shadow-card` | `0 1px 4px rgba(0,0,0,0.5)` |
| `--shadow-card-hover` | `0 2px 12px rgba(0,0,0,0.6)` |

### Typography
- **Font family:** Geist (Google Fonts) — loaded via `next/font/google`
- **Display headings:** Geist, weight 700–800
- **Body:** Geist, weight 400–500
- **Code/mono:** system mono fallback

### Gradient Effects
- **Gradient heading:** `linear-gradient(135deg, rgb(54,124,255) 0%, rgb(49,177,160) 70%, rgb(46,204,113) 90%)` — applied as text gradient, clip to text
- **Spinning gradient border:** `conic-gradient` rotating from transparent → `rgb(16,170,82)` → `rgb(49,177,160)` → `rgb(54,124,255)` → transparent — 4s linear infinite
- **Banner gradient (dark):** `linear-gradient(135deg, #0D1525 0%, #0B1A18 60%, #0C1A10 100%)`

### Component Patterns
- **Cards:** `bg-surface` (`#141416`), `rounded-lg`, `border border-line` (`#222228`), `shadow-card`
- **Card hover:** `border-accent` (`#4A8FE0`), `shadow-card-hover`
- **Primary button:** `bg-accent` (`#4A8FE0`), white text, rounded-full pill
- **Ghost button:** transparent bg, `border border-line-strong`, `text-t2`
- **Status pills:** `rounded-full`, colored `bg-{status}-sub` / `text-{status}` pairings
- **Progress bars:** `bg-line` track (`#222228`), `bg-accent` fill (`#4A8FE0`)
- **Fade-in animation:** `opacity: 0 → 1` + `translateY(6px → 0)`, 0.2s ease-out
- **Step-in animation:** `opacity: 0 → 1` + `translateX(24px → 0)`, 0.28s cubic-bezier(0.22,1,0.36,1)

---

## Section 1 — Nav

**Layout:** Fixed top. Full width. Blurred dark background on scroll (`backdrop-blur`). Logo left. Links centre. CTA right.

**Background:** `#0C0C0E` at 80% opacity + `backdrop-blur` on scroll. Border bottom: `#222228`.

**Content:**
- Logo: Autonoms wordmark + icon — `text-t1` (`#ECECF1`)
- Links: Product · Use Cases · Pricing · Docs — `text-t2` (`#9595A4`), hover `text-t1`
- CTA: `Get Started →` — `bg-accent` (`#4A8FE0`) pill button, white text

**Animation:** Fades in on page load, 0.3s delay.

---

## Section 2 — Hero + Product Showcase

**Layout:** One continuous block. Text portion is full viewport height. Product showcase flows directly beneath with no break. Background gradient covers the entire section.

**Background:** `#0C0C0E` base. Slow radial gradient bloom using `--accent` (`#4A8FE0`) at 5–8% opacity. Covers the full section.

### Hero

**Content:**
- Headline: `The team that never` / `stops working.` — 72–80px, `#ECECF1`, Geist 800. Consider applying the gradient heading effect (`rgb(54,124,255) → rgb(49,177,160) → rgb(46,204,113)`) to a keyword word.
- Subheadline: `Autonoms lets you assemble AI agent teams for any business workflow. Built for SDR teams. Ready for anything.` — 18px, `#9595A4`
- CTAs: `Get Started →` (`bg-accent` `#4A8FE0`, white, pill) + `See it in action` (ghost: `border-line-strong` `#2E2E35`, `text-t2` `#9595A4`)
- Social proof: `Trusted by teams at Flutterwave, Paystack, and 40+ companies` — 13px, `#636370`

**Animation:**
- Headline words stagger in on load, 50ms apart (`animate-fade-in`)
- Subheadline + CTAs fade up after headline completes
- Social proof fades in last

### Product Showcase (flows directly below social proof)

**Pill tabs — centred row:**
- `Agent Teams` · `Live Activity` · `Human in Loop` · `Structured Results`
- Active pill: `bg-accent` (`#4A8FE0`), white text
- Inactive pills: `border border-line-strong` (`#2E2E35`), `text-t3` (`#636370`)
- Active pill progress bar: thin `#4A8FE0` line fills left to right over video duration

**Video mockup below pills:**
- Dark-framed browser mockup (`bg-surface` `#141416`), full width, slightly cropped at bottom
- Subtle `#4A8FE0` glow around frame edges (box-shadow using `rgba(74,143,224,0.15)`)
- Each pill maps to its own `video` element with its own `poster` image
- Videos autoplay, muted, no visible controls
- On video end → active pill advances to next → next video autoplays
- After `Structured Results` ends → loops back to `Agent Teams`
- Clicking any inactive pill → immediately switches to that video, progress bar resets
- Transition between videos: crossfade 200ms

**Animation:**
- Pills + mockup slide up into view after social proof settles
- Progress bar resets and refills with each new active video

---

## Section 3 — Logo Bar

**Layout:** Full width, centred. Slim section. Background: `#0C0C0E`.

**Content:**
- Label: `Used by teams at` — 12px, `#636370`
- Row of 5–6 company logos at 30% opacity white (greyscale), `filter: grayscale(1) opacity(0.3)`

**Animation:** Logos fade in with stagger on scroll entry. Hover: `opacity(0.8)`.

---

## Section 4 — Features Deep Dive

**Layout:** Alternating left-right rows. Text one side, UI screenshot the other. 4 rows. Background: `#0C0C0E`.

**Screenshot frames:** `bg-surface` (`#141416`), `rounded-lg`, `border border-line` (`#222228`), `shadow-card`.

### Row 1 — Agent Teams
- **Headline:** `Not just agents. A team.` — Geist 700, `#ECECF1`
- **Body:** `Each agent has a role, a goal, and a live status. They coordinate, hand off tasks, and report progress — just like a real team.` — `#9595A4`
- **Visual:** Agents page — roster panel + agent detail panel

### Row 2 — Live Activity
- **Headline:** `Watch your team work in real time.`
- **Body:** `Every action your agents take is logged live. Filter by agent, event type, or time. Know exactly what's happening at any moment.`
- **Visual:** Activity feed with live pulse indicator (`#34D399` dot, `animate-pulse-dot`) and incoming events

### Row 3 — Human in Loop
- **Headline:** `A human always in your corner.`
- **Body:** `Your dedicated Human Operator monitors your agents, handles edge cases, and communicates with your team when AI isn't enough. You see every message they send.`
- **Visual:** Inbox page — HIL thread with amber (`#FBBF24`) message treatment, left border `#FBBF24`

### Row 4 — Results
- **Headline:** `Structured outputs, not scattered logs.`
- **Body:** `Everything your agents produce lands in a clean, filterable table. Prospect profiles, emails sent, meetings booked — all in one place, ready to export.`
- **Visual:** Results page — data table, `bg-surface` rows, `border-line` dividers, `text-t1` values, `text-t3` labels

**Animation:** Each row slides in from the side its text is on (`animate-step-in`). Screenshots have a subtle shine on entry.

---

## Section 5 — Team Builder Callout

**Layout:** Two columns. Background: `banner-gradient dark` (`linear-gradient(135deg, #0D1525 0%, #0B1A18 60%, #0C1A10 100%)`). Optionally wrap with spinning gradient border (`gradient-border-wrap`).

**Content:**
- Headline: `Tell us what you need.` / `We'll build your team.` — Geist 700, `#ECECF1`. Second line can use gradient-heading.
- Body: `Answer a few questions about your goal and your business. Autonoms analyses your needs and recommends the exact agents, tools, and strategy to get you there.` — `#9595A4`

**Right side — Wizard UI mockup:**

Shown as a conversational flow in a `bg-surface` (`#141416`) card with `border-line` (`#222228`) border and `shadow-card`.

> Question label: `#636370` (t3), 13px
> Answer: `#ECECF1` (t1), 14px, italic, indented

> `What do you want to accomplish?`
> → *"Book more qualified sales calls"*

> `What's your company website?`
> → *"acme.com"*

> `Who are you trying to reach?`
> → *"SaaS founders in West Africa, 10–200 employees"*

After the last answer, a result card slides in below (`bg-overlay` `#1C1C1F`, `border-line-strong` `#2E2E35`):

**Your recommended team:**
- Prospector Agent — finds matching leads on LinkedIn + Apollo — `text-t1` name, `text-t3` description
- Outreach Agent — sends personalised cold emails
- Qualifier Agent — scores responses against your ICP
- Scheduler Agent — books calls automatically

Agent name dots: `bg-accent-sub` `rgba(74,143,224,0.10)` background, `text-accent-text` (`#7AB3F4`) label

**Strategy summary card** (`bg-accent-sub` `rgba(74,143,224,0.10)`, `border border-accent` `#4A8FE0`, `text-accent-text` `#7AB3F4`):
`Based on your goal, we recommend a 4-agent SDR team targeting Series A SaaS founders. Estimated 15–20 qualified calls per month.`

**Animation:**
- Questions appear one by one with a typing delay (`animate-fade-in`)
- Answers fade in after each question settles
- Result card slides up after the last answer (`animate-step-in`)
- Agent recommendation cards stagger in one by one
- Strategy summary fades in last

---

## Section 6 — Use Cases

**Layout:** Centred heading + subheadline. 3-column card grid below. Background: `#0C0C0E`.

**Content:**
- Headline: `Any team. Any workflow.` — Geist 700, `#ECECF1`. Gradient-heading on a keyword word.
- Subheadline: `We start with SDR. But Autonoms is built for any team that runs on repeatable, multi-step work.` — `#9595A4`

**Cards:** `bg-surface` (`#141416`), `border-line` (`#222228`), `rounded-lg`, `shadow-card`

| Team | Description | Tag style |
|---|---|---|
| SDR Team | Prospect, outreach, qualify, book. Your full sales pipeline on autopilot. | `bg-success-sub` `text-success` (`#34D399`) — `Available now` |
| Support Team | First-line responses, ticket triage, escalation routing. | `bg-subtle` `text-t3` — `Coming soon` |
| Research Team | Deep research, data gathering, report generation. | `bg-subtle` `text-t3` — `Coming soon` |
| Marketing Team | Content research, campaign drafting, performance monitoring. | `bg-subtle` `text-t3` — `Coming soon` |
| Operations Team | Process automation, data enrichment, workflow coordination. | `bg-subtle` `text-t3` — `Coming soon` |
| Custom | Define your own team from the agent store. | `bg-accent-sub` `text-accent-text` (`#7AB3F4`) — `Available now` |

Card headings: `text-t1` (`#ECECF1`), card body: `text-t2` (`#9595A4`)

**Animation:** Cards fan in with stagger on scroll. Hover: `border-accent` (`#4A8FE0`) + `shadow-card-hover`.

---

## Section 7 — Inbox / Chat Callout

**Layout:** Full-width section. Background: `#111113` (`--bg-subtle`) — slightly different from page. Top + bottom border: `#222228`.

**Content:**
- Headline: `Talk to your team.` / `Get answers instantly.` — Geist 700, `#ECECF1`
- Body: `Chat directly with any agent, give tasks on the fly, and see your Human Operator's messages to your agents — all in one inbox. You always know who said what.` — `#9595A4`
- Two callout points:
  - `Agent messages` — `text-t1`, icon in `text-accent` (`#4A8FE0`) — subtext `#636370`
  - `Human in Loop` — `text-t1`, icon in `text-warning` (`#FBBF24`) — subtext `#636370`

**Right side:** Inbox screenshot — `bg-surface` (`#141416`) frame, `border-line` (`#222228`). Agent thread normal style; HIL message with amber left border (`#FBBF24`), `bg-warning-sub` (`rgba(251,191,36,0.08)`), "Human Operator" label in `text-warning` (`#FBBF24`).

**Animation:** Background has subtle gradient shimmer on scroll. Screenshot fades in from right (`animate-step-in`).

---

## Section 8 — Benefits

**Layout:** Centred. 3 benefit points in a row. No cards — just icon, headline, and one line. Background: `#0C0C0E`.

**Content:**

- ⚡ **Set up in minutes, not weeks** — headline `text-t1` (`#ECECF1`), icon `text-accent` (`#4A8FE0`)
  `Pick your agents, connect your tools, and launch. No engineers, no long onboarding.` — `#9595A4`

- 🧑‍💼 **A human is always one message away** — icon `text-warning` (`#FBBF24`)
  `Your dedicated Human Operator is on standby — monitoring, intervening, and keeping things on track.` — `#9595A4`

- 👁 **Full visibility into everything your AI does** — icon `text-teal` (`#2DD4BF`)
  `Every action is logged in real time. Nothing happens in the dark.` — `#9595A4`

**Animation:** Three points fade up with stagger on scroll (`animate-fade-in`).

---

## Section 9 — Final CTA

**Layout:** Full-width. Background: `banner-gradient dark` (`linear-gradient(135deg, #0D1525 0%, #0B1A18 60%, #0C1A10 100%)`), with a low-opacity radial bloom in `#4A8FE0` at centre. Centred.

**Content:**
- Headline: `Your AI team is waiting.` — Geist 700, `#ECECF1`. Can apply gradient-heading.
- Subheadline: `Set up in minutes. No engineers needed.` — `#9595A4`
- CTA: `Get Started →` — large, `bg-accent` (`#4A8FE0`) button, white text, `hover:bg-accent-hover` (`#3A7FD0`), `box-shadow: 0 0 24px rgba(74,143,224,0.35)` on hover
- Below CTA: `No credit card required` — 12px, `#636370`

**Animation:**
- Background gradient shifts slowly on loop
- CTA button has soft pulse using `box-shadow` animation on load
- Section fades in on scroll

---

## Section 10 — Footer

**Layout:** 4-column grid. Background: `#0C0C0E`. Top border: `#222228` (`--border-line`).

**Columns:** (column headings `text-t3` `#636370` 11px uppercase tracking-wide; links `text-t2` `#9595A4`, hover `text-t1` `#ECECF1`)

| Autonoms | Product | Company | Legal |
|---|---|---|---|
| Logo + one-line description | Overview | About | Privacy Policy |
| Social icons (X, LinkedIn) — `text-t3`, hover `text-t1` | Features | Blog | Terms of Service |
| | Use Cases | Careers | |
| | Pricing | Contact | |
| | Changelog | | |

**Bottom bar:** `© 2026 Autonoms AI. All rights reserved.` — `#636370`, border-top `#222228`

---

## Quick Reference: Color Mapping (old doc → app theme)

| Old value | App token | Actual value |
|---|---|---|
| `#080C14` (bg) | `--bg-page` | `#0C0C0E` |
| `#1E6FCC` (accent) | `--accent` | `#4A8FE0` |
| `#1E3A5F` (footer border) | `--border-line` | `#222228` |
| `#0E1420` (alt section) | `--bg-subtle` | `#111113` |
| White text | `--t1` | `#ECECF1` |
| Muted gray | `--t2` | `#9595A4` |
| Dimmer gray | `--t3` | `#636370` |
| Cal Sans | Geist | Geist (Google Fonts) |

---

*End of Document — Autonoms AI Landing Page Content v3.0*
