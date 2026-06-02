import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/hes")({
  head: () => ({
    meta: [
      { title: "Head End System (HES) — GridCrest" },
      { name: "description", content: "Secure, scalable head end systems for nationwide metering programs." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Smart Metering"
      title="Head End System (HES)"
      description="Secure, scalable head end systems for nationwide metering programs."
    />
  ),
});
