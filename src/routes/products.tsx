import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop - Ryom Remedies" },
      { name: "description", content: "Browse Ryom Remedies products." },
      { property: "og:title", content: "Shop - Ryom Remedies" },
      { property: "og:description", content: "Browse Ryom Remedies products." },
    ],
  }),
  component: () => <PageFrame src="/pages/products.html" title="Products" />,
});