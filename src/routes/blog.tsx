import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog - Ryom Remedies" },
      { name: "description", content: "News and articles from Ryom Remedies." },
      { property: "og:title", content: "Blog - Ryom Remedies" },
      { property: "og:description", content: "News and articles from Ryom Remedies." },
    ],
  }),
  component: () => <PageFrame src="/pages/blog.html" title="Blog" />,
});