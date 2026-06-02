import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/contact/locations")({
  head: () => ({
    meta: [
      { title: "Locations — GridCrest" },
      { name: "description", content: "Where to find GridCrest." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Contact"
      title="Locations"
      description="Where to find GridCrest."
    />
  ),
});
