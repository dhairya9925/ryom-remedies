import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - Ryom Remedies" },
      { name: "description", content: "Learn about Ryom Remedies — our mission, values, and team." },
      { property: "og:title", content: "About Us - Ryom Remedies" },
      { property: "og:description", content: "Learn about Ryom Remedies — our mission, values, and team." },
    ],
  }),
  component: () => <PageFrame src="/pages/about.html" title="About" />,
});