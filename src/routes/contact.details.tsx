import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/contact/details")({
  head: () => ({
    meta: [
      { title: "Contact Details — GridCrest" },
      { name: "description", content: "Direct lines into the GridCrest team." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Contact"
      title="Contact Details"
      description="Direct lines into the GridCrest team."
    />
  ),
});
