import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/intelligence")({
  head: () => ({
    meta: [
      { title: "AI, Analytics & Digital Twin — GridCrest" },
      { name: "description", content: "Turn operational data into clear decisions with grid intelligence." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Integrated Platform"
      title="AI, Analytics & Digital Twin"
      description="Turn operational data into clear decisions with grid intelligence."
    />
  ),
});
