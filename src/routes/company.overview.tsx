import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/company/overview")({
  head: () => ({
    meta: [
      { title: "Vision, Mission & Positioning — GridCrest" },
      { name: "description", content: "Who we are, what we believe, and where we are headed." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Company"
      title="Vision, Mission & Positioning"
      description="Who we are, what we believe, and where we are headed."
    />
  ),
});
