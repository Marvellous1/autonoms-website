import { DocsShell } from "@/components/docs/DocsShell";

const toc = [
  { id: "agents", title: "Agents" },
  { id: "teams", title: "Teams" },
  { id: "tools", title: "Tools" },
  { id: "runs", title: "Runs" },
  { id: "human-operator", title: "Human Operator" },
  { id: "outputs", title: "Outputs" },
];

export default function CoreConceptsPage() {
  return (
    <DocsShell toc={toc}>
      <h1>Core concepts</h1>
      <p>
        Autonoms is designed around a simple model: <strong>teams</strong> of{" "}
        <strong>agents</strong> use <strong>tools</strong> to execute{" "}
        <strong>runs</strong>, producing <strong>outputs</strong> you can review,
        export, and iterate on.
      </p>

      <h2 id="agents">Agents</h2>
      <p>
        Agents are specialists. Each one has a role and a narrow focus—research,
        enrichment, outreach, scheduling, CRM hygiene, and more.
      </p>

      <h2 id="teams">Teams</h2>
      <p>
        A team is a coordinated set of agents with clear handoffs. Instead of a
        single “do everything” assistant, you get a workflow that looks and feels
        like real execution.
      </p>

      <h2 id="tools">Tools</h2>
      <p>
        Tools connect Autonoms to the services you already use. Tools are
        permissioned—agents can only act within what you’ve connected and
        allowed.
      </p>

      <h2 id="runs">Runs</h2>
      <p>
        A run is one execution of a workflow. Every action is logged and
        timestamped so you can understand exactly what happened.
      </p>

      <h2 id="human-operator">Human Operator</h2>
      <p>
        When something is ambiguous, risky, or high-stakes, the Human Operator
        can intervene: review drafts, confirm decisions, and resolve edge cases.
        This keeps workflows safe and reliable in the real world.
      </p>

      <h2 id="outputs">Outputs</h2>
      <p>
        Autonoms emphasizes structured outputs: tables of leads, enrichment
        results, email variants, reply classifications, meeting outcomes—ready to
        export or feed into the next step.
      </p>
    </DocsShell>
  );
}

