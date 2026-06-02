import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/careers/culture")({
  head: () => ({
    meta: [
      { title: "Culture & Growth — GridCrest" },
      { name: "description", content: "How we hire, grow and support our teams." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Careers"
      title="Culture & Growth"
      description="How we hire, grow and support our teams."
    />
  ),
});
