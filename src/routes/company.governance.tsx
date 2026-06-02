import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/company/governance")({
  head: () => ({
    meta: [
      { title: "Leadership Communication — GridCrest" },
      { name: "description", content: "Governance updates and leadership communication." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Investor & Governance"
      title="Leadership Communication"
      description="Governance updates and leadership communication."
    />
  ),
});
