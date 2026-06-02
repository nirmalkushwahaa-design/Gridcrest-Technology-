import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/company/investors")({
  head: () => ({
    meta: [
      { title: "Vision & Growth — GridCrest" },
      { name: "description", content: "Long-term growth, strategy and value creation." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Investor & Governance"
      title="Vision & Growth"
      description="Long-term growth, strategy and value creation."
    />
  ),
});
