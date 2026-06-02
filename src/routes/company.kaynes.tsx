import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/company/kaynes")({
  head: () => ({
    meta: [
      { title: "Relationship with Kaynes — GridCrest" },
      { name: "description", content: "Our manufacturing backbone inside the Kaynes Group." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Manufacturing & Ecosystem"
      title="Relationship with Kaynes"
      description="Our manufacturing backbone inside the Kaynes Group."
    />
  ),
});
