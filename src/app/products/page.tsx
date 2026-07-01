import type { Metadata } from "next";
import { PageHero, RyomSiteLayout, Section, SectionHeader } from "@/components/RyomSiteLayout";
import { ProductBrowser } from "./ProductBrowser";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse Ryom Remedies products.",
  openGraph: {
    title: "Shop - Ryom Remedies",
    description: "Browse Ryom Remedies products.",
  },
  twitter: {
    card: "summary",
    title: "Shop - Ryom Remedies",
    description: "Browse Ryom Remedies products.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

export default function ProductsPage() {
  return (
    <RyomSiteLayout activePath="/products">
      <PageHero title="Our Products" eyebrow="Product Range" image={heroImage}>
        <p>
          Browse Ryom Remedies products and connect with our team for ordering, distribution, and
          documentation support.
        </p>
      </PageHero>

      <Section>
        <SectionHeader
          title="Pharmaceutical products"
          description="Explore product information in a focused popup designed from the older product detail reference."
        />
        <ProductBrowser />
      </Section>
    </RyomSiteLayout>
  );
}
