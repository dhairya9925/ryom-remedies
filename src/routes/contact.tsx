import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - Ryom Remedies" },
      { name: "description", content: "Get in touch with Ryom Remedies." },
      { property: "og:title", content: "Contact Us - Ryom Remedies" },
      { property: "og:description", content: "Get in touch with Ryom Remedies." },
    ],
  }),
  component: () => <PageFrame src="/pages/contact.html" title="Contact" />,
});