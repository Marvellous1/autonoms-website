import { DocsShell } from "@/components/docs/DocsShell";

const toc = [
  { id: "authentication", title: "Authentication" },
  { id: "key-resources", title: "Key resources" },
  { id: "example-run", title: "Example: start a run" },
  { id: "webhooks", title: "Webhooks" },
];

export default function ApiDocsPage() {
  return (
    <DocsShell toc={toc}>
      <h1>API basics</h1>
      <p>
        Use the API when you want to orchestrate runs from your own systems,
        sync outputs, or build custom tooling around Autonoms.
      </p>

      <h2 id="authentication">Authentication</h2>
      <p>
        API requests are authenticated with a workspace token. Keep tokens
        server-side and rotate them regularly.
      </p>

      <h2 id="key-resources">Key resources</h2>
      <ul>
        <li>
          <strong>Teams</strong>: definitions of agent roles and tool permissions
        </li>
        <li>
          <strong>Runs</strong>: one execution of a workflow
        </li>
        <li>
          <strong>Events</strong>: an append-only activity log for each run
        </li>
        <li>
          <strong>Outputs</strong>: structured results produced by a run
        </li>
      </ul>

      <h2 id="example-run">Example: start a run</h2>
      <p>
        The exact endpoint names will depend on your workspace setup. This shows
        the typical request shape.
      </p>
      <pre>
        <code>{`POST /v1/runs
Authorization: Bearer $AUTONOMS_TOKEN

{
  "teamId": "team_sdr",
  "goal": "Book qualified demos with fintech founders",
  "inputs": {
    "icp": "Fintech founders in West Africa, 10–200 employees",
    "constraints": ["Exclude existing customers", "Max 80 sends/day"]
  }
}`}</code>
      </pre>

      <h2 id="webhooks">Webhooks</h2>
      <p>
        Webhooks let Autonoms push events to your systems (run started, run
        completed, output created). Use them to trigger follow-ups, update your
        CRM, or notify Slack.
      </p>
    </DocsShell>
  );
}

