import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/architecture")({
  head: () => ({
    meta: [
      { title: "End-to-end Architecture — GridCrest" },
      { name: "description", content: "One platform spanning silicon, communication, data and applications." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Integrated Platform"
      title="End-to-end Architecture"
      description="One platform spanning silicon, communication, data and applications."
    />
  ),
});
