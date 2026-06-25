import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs - Ryom Remedies" },
      { name: "description", content: "Frequently asked questions about Ryom Remedies." },
      { property: "og:title", content: "FAQs - Ryom Remedies" },
      { property: "og:description", content: "Frequently asked questions." },
    ],
  }),
  component: () => <PageFrame src="/pages/faqs.html" title="FAQs" />,
});