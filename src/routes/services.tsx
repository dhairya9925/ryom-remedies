import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services - Ryom Remedies" },
      { name: "description", content: "Pharmaceutical services offered by Ryom Remedies." },
      { property: "og:title", content: "Our Services - Ryom Remedies" },
      { property: "og:description", content: "Pharmaceutical services offered by Ryom Remedies." },
    ],
  }),
  component: () => <PageFrame src="/pages/services.html" title="Services" />,
});