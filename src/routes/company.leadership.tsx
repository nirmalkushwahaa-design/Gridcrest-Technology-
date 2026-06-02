import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/company/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Team — GridCrest" },
      { name: "description", content: "The people leading GridCrest's mission." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Company"
      title="Leadership Team"
      description="The people leading GridCrest's mission."
    />
  ),
});
