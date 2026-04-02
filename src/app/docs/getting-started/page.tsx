import { DocsShell } from "@/components/docs/DocsShell";

const toc = [
  { id: "prerequisites", title: "Prerequisites" },
  { id: "create-your-first-team", title: "Create your first team" },
  { id: "connect-tools", title: "Connect tools" },
  { id: "run-and-review", title: "Run and review" },
  { id: "common-next-steps", title: "Common next steps" },
];

export default function GettingStartedPage() {
  return (
    <DocsShell toc={toc}>
      <h1>Quickstart</h1>
      <p>
        In this guide you’ll create a simple SDR workflow: source leads, enrich
        contacts, send outreach, and book meetings—with full visibility into
        every action.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>An Autonoms workspace</li>
        <li>Your ICP (who you want to target)</li>
        <li>At least one tool connection (e.g. Gmail, Apollo, LinkedIn)</li>
      </ul>

      <h2 id="create-your-first-team">Create your first team</h2>
      <p>
        Start with a small set of roles. You can always expand later.
      </p>
      <ol>
        <li>
          Open <strong>Team Builder</strong>
        </li>
        <li>
          Describe your goal in one sentence (e.g. “Book qualified demos with
          fintech founders”)
        </li>
        <li>
          Confirm the recommended roles (e.g. Researcher, Prospector, Outreach,
          Scheduler)
        </li>
      </ol>

      <h2 id="connect-tools">Connect tools</h2>
      <p>
        Tools are how agents take real-world actions. Connect only what you need
        for the workflow.
      </p>
      <ul>
        <li>
          <strong>Gmail</strong> for sending outreach and confirmations
        </li>
        <li>
          <strong>Apollo / Clearbit</strong> for enrichment and verification
        </li>
        <li>
          <strong>Calendar</strong> for scheduling and reminders
        </li>
      </ul>

      <h2 id="run-and-review">Run and review</h2>
      <p>
        Every run produces a complete activity log and structured outputs.
      </p>
      <ul>
        <li>
          Watch the activity feed for each step (search, enrich, draft, send)
        </li>
        <li>
          Review the Human Operator’s interventions (if any)
        </li>
        <li>
          Export results (prospects, emails sent, replies, meetings)
        </li>
      </ul>

      <h2 id="common-next-steps">Common next steps</h2>
      <ul>
        <li>Refine your ICP and scoring rules</li>
        <li>Add guardrails (domains to exclude, compliance requirements)</li>
        <li>Turn a one-off run into a scheduled workflow</li>
      </ul>
    </DocsShell>
  );
}

