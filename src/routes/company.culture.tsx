import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/company/culture")({
  head: () => ({
    meta: [
      { title: "Culture & People — GridCrest" },
      { name: "description", content: "The culture that powers our engineering and operations teams." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Manufacturing & Ecosystem"
      title="Culture & People"
      description="The culture that powers our engineering and operations teams."
    />
  ),
});
