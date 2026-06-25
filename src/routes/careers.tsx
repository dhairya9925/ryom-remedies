import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Ryom Remedies" },
      { name: "description", content: "Join the Ryom Remedies team." },
      { property: "og:title", content: "Careers - Ryom Remedies" },
      { property: "og:description", content: "Join the Ryom Remedies team." },
    ],
  }),
  component: () => <PageFrame src="/pages/careers.html" title="Careers" />,
});