import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/communication-modules")({
  head: () => ({
    meta: [
      { title: "Communication Modules — GridCrest" },
      { name: "description", content: "Communication-ready meter networks built for reliability and scale." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Smart Metering"
      title="Communication Modules"
      description="Communication-ready meter networks built for reliability and scale."
    />
  ),
});
