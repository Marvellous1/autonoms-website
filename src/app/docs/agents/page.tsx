import { DocsShell } from "@/components/docs/DocsShell";

const toc = [
  { id: "personas-vs-assistants", title: "Personas vs. generic assistants" },
  { id: "common-agent-roles", title: "Common agent roles" },
  { id: "handoffs-and-checkpoints", title: "Handoffs and checkpoints" },
  { id: "guardrails", title: "Guardrails" },
];

export default function AgentsDocsPage() {
  return (
    <DocsShell toc={toc}>
      <h1>Agents</h1>
      <p>
        Autonoms agents are specialists that coordinate as a team. The goal is
        repeatable execution—not a one-off chat.
      </p>

      <h2 id="personas-vs-assistants">Personas vs. generic assistants</h2>
      <p>
        Generic assistants are flexible, but often unclear about responsibilities.
        Autonoms agents have defined roles and measurable outcomes.
      </p>

      <h2 id="common-agent-roles">Common agent roles</h2>
      <ul>
        <li>
          <strong>Researcher</strong>: learns the account, finds context for personalization
        </li>
        <li>
          <strong>Prospector</strong>: builds lists that match your ICP
        </li>
        <li>
          <strong>Enricher</strong>: verifies emails/phones and improves data quality
        </li>
        <li>
          <strong>Outreach</strong>: drafts and sends sequences with safe defaults
        </li>
        <li>
          <strong>Scheduler</strong>: confirms bookings, handles reschedules, logs outcomes
        </li>
      </ul>

      <h2 id="handoffs-and-checkpoints">Handoffs and checkpoints</h2>
      <p>
        Teams work best with explicit handoffs. Example: research → enrichment →
        outreach → scheduling. Add checkpoints where a Human Operator should
        review before sending or updating CRM records.
      </p>

      <h2 id="guardrails">Guardrails</h2>
      <p>
        Guardrails keep execution safe. Common examples include:
      </p>
      <ul>
        <li>Exclude lists (competitors, existing customers, restricted domains)</li>
        <li>Compliance requirements (tone, claims, opt-out language)</li>
        <li>Limits (daily sends, max LinkedIn actions, escalation rules)</li>
      </ul>
    </DocsShell>
  );
}

