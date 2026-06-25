import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ryom Remedies - Your Trusted Pharmaceutical Partner" },
      { name: "description", content: "Ryom Remedies — quality pharmaceuticals you can trust." },
      { property: "og:title", content: "Ryom Remedies" },
      { property: "og:description", content: "Your trusted pharmaceutical partner." },
    ],
  }),
  component: Index,
});

function Index() {
  return <PageFrame src="/pages/index.html" title="Home" />;
}
