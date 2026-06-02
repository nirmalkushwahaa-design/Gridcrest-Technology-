import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/smart-meters")({
  head: () => ({
    meta: [
      { title: "Smart Meters — GridCrest" },
      { name: "description", content: "Field-tested smart meters for electricity, water and gas networks." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Smart Metering"
      title="Smart Meters"
      description="Field-tested smart meters for electricity, water and gas networks."
    />
  ),
});
