import Link from "next/link";
import { DocsShell } from "@/components/docs/DocsShell";

const toc = [
  { id: "what-is-autonoms", title: "What is Autonoms?" },
  { id: "how-docs-are-structured", title: "How the docs are structured" },
  { id: "next-steps", title: "Next steps" },
];

export default function DocsHomePage() {
  return (
    <DocsShell toc={toc}>
      <h1>Autonoms Docs</h1>
      <p>
        Autonoms helps teams assemble AI agents that execute real business
        workflows—safely, transparently, and with a Human Operator in the loop.
      </p>

      <h2 id="what-is-autonoms">What is Autonoms?</h2>
      <p>
        Think of Autonoms as an <strong>operating system for agent teams</strong>.
        You define outcomes, pick (or generate) the right roles, connect tools,
        and monitor execution in real time.
      </p>
      <ul>
        <li>
          <strong>Agent teams</strong>: specialists with roles, responsibilities,
          and clear handoffs
        </li>
        <li>
          <strong>Human Operator</strong>: reviews edge cases, resolves ambiguity,
          and keeps work moving
        </li>
        <li>
          <strong>Traceability</strong>: see what happened, when, and why—no black
          boxes
        </li>
      </ul>

      <h2 id="how-docs-are-structured">How the docs are structured</h2>
      <p>
        The docs are organized to match the way teams adopt Autonoms:
      </p>
      <ul>
        <li>
          <strong>Getting started</strong>: set up your first workflow in minutes
        </li>
        <li>
          <strong>Core concepts</strong>: teams, agents, tools, runs, and guardrails
        </li>
        <li>
          <strong>Reference</strong>: API basics for programmatic control and integrations
        </li>
      </ul>

      <h2 id="next-steps">Next steps</h2>
      <div className="not-prose">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/docs/getting-started"
            className="no-underline hover:no-underline rounded-2xl border border-line bg-surface p-5 hover:bg-hover transition-colors"
          >
            <p className="text-sm font-semibold text-t1 mb-1">Quickstart</p>
            <p className="text-sm text-t3">
              Create your first agent team and run a workflow end-to-end.
            </p>
          </Link>
          <Link
            href="/docs/core-concepts"
            className="no-underline hover:no-underline rounded-2xl border border-line bg-surface p-5 hover:bg-hover transition-colors"
          >
            <p className="text-sm font-semibold text-t1 mb-1">Core concepts</p>
            <p className="text-sm text-t3">
              Learn the mental model: agents, tools, runs, and human oversight.
            </p>
          </Link>
        </div>
      </div>
    </DocsShell>
  );
}

