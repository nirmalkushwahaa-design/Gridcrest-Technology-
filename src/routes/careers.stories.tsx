import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/careers/stories")({
  head: () => ({
    meta: [
      { title: "Employee Stories — GridCrest" },
      { name: "description", content: "Voices from across GridCrest." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Careers"
      title="Employee Stories"
      description="Voices from across GridCrest."
    />
  ),
});
