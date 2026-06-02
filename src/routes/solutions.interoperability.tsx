import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/interoperability")({
  head: () => ({
    meta: [
      { title: "Interoperability — GridCrest" },
      { name: "description", content: "Protocol-agnostic by design — connect to any meter, any system, any cloud." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Integrated Platform"
      title="Interoperability"
      description="Protocol-agnostic by design — connect to any meter, any system, any cloud."
    />
  ),
});
