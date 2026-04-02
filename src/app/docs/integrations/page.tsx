import { DocsShell } from "@/components/docs/DocsShell";

const toc = [
  { id: "how-integrations-work", title: "How integrations work" },
  { id: "permissions", title: "Permissions" },
  { id: "recommended-starter-stack", title: "Recommended starter stack" },
  { id: "troubleshooting", title: "Troubleshooting" },
];

export default function IntegrationsDocsPage() {
  return (
    <DocsShell toc={toc}>
      <h1>Integrations</h1>
      <p>
        Integrations connect Autonoms to your data and execution tools (email,
        CRM, enrichment, scheduling, messaging). Agents can only act within
        connected tools and granted permissions.
      </p>

      <h2 id="how-integrations-work">How integrations work</h2>
      <p>
        Each integration exposes actions (send an email, create a CRM record,
        search a dataset). Your workflow determines which agents can use which
        actions.
      </p>

      <h2 id="permissions">Permissions</h2>
      <p>
        Keep permissions minimal. Start read-only when possible, then expand to
        write permissions once you’re confident in the workflow.
      </p>
      <ul>
        <li>Read: search, lookup, fetch records</li>
        <li>Write: send, create, update, delete</li>
        <li>Escalate: require Human Operator approval for high-impact actions</li>
      </ul>

      <h2 id="recommended-starter-stack">Recommended starter stack</h2>
      <ul>
        <li>
          <strong>Email</strong>: Gmail (send sequences + replies)
        </li>
        <li>
          <strong>Enrichment</strong>: Apollo / Clearbit (verification + data quality)
        </li>
        <li>
          <strong>Scheduling</strong>: Google Calendar + Calendly
        </li>
        <li>
          <strong>CRM</strong>: HubSpot / Salesforce
        </li>
      </ul>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <ul>
        <li>Missing actions: confirm the integration is connected and authorized</li>
        <li>Rate limits: reduce concurrency or add pacing limits</li>
        <li>Unexpected writes: add Human Operator checkpoints</li>
      </ul>
    </DocsShell>
  );
}

