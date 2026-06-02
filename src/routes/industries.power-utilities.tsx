import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/industries/power-utilities")({
  head: () => ({
    meta: [
      { title: "Power Utilities — GridCrest" },
      { name: "description", content: "Modernising distribution networks for utilities of every size." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Industries"
      title="Power Utilities"
      description="Modernising distribution networks for utilities of every size."
    />
  ),
});
