import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/industries/government")({
  head: () => ({
    meta: [
      { title: "Government Programs — GridCrest" },
      { name: "description", content: "Trusted partner for national smart-grid and metering programs." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Industries"
      title="Government Programs"
      description="Trusted partner for national smart-grid and metering programs."
    />
  ),
});
