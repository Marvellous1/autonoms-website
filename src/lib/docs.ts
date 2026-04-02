export type DocsNavItem = {
  title: string;
  href: string;
};

export type DocsNavSection = {
  title: string;
  items: DocsNavItem[];
};

export const DOCS_NAV: DocsNavSection[] = [
  {
    title: "Getting started",
    items: [
      { title: "Overview", href: "/docs" },
      { title: "Quickstart", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Core",
    items: [
      { title: "Core concepts", href: "/docs/core-concepts" },
      { title: "Agents", href: "/docs/agents" },
      { title: "Integrations", href: "/docs/integrations" },
    ],
  },
  {
    title: "Reference",
    items: [{ title: "API basics", href: "/docs/api" }],
  },
];

export type TocItem = { id: string; title: string };

