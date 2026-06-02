import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/solutions/mdm")({
  head: () => ({
    meta: [
      { title: "Meter Data Management — GridCrest" },
      { name: "description", content: "Cloud-native MDM for AMI, billing and operational intelligence." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Smart Metering"
      title="Meter Data Management"
      description="Cloud-native MDM for AMI, billing and operational intelligence."
    />
  ),
});
