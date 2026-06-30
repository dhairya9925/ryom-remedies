import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about Ryom Remedies products, quality, distribution, and manufacturing services.",
  openGraph: {
    title: "FAQs - Ryom Remedies",
    description:
      "Answers to common questions about Ryom Remedies medicines, quality standards, and partnerships.",
  },
  twitter: {
    card: "summary",
    title: "FAQs - Ryom Remedies",
    description:
      "Answers to common questions about Ryom Remedies medicines, quality standards, and partnerships.",
  },
};

export default function FaqsLayout({ children }: { children: ReactNode }) {
  return children;
}
