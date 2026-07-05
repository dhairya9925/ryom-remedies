import type { Metadata } from "next";
import { PageHero, RyomSiteLayout, Section, SectionHeader } from "@/components/RyomSiteLayout";
import { getActiveProducts, getProductCategories } from "@/lib/queries";
import { ProductBrowser } from "./ProductBrowser";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Browse Ryom Remedies products.",
  openGraph: {
    title: "Our Products - Ryom Remedies",
    description: "Browse Ryom Remedies products.",
  },
  twitter: {
    card: "summary",
    title: "Our Products - Ryom Remedies",
    description: "Browse Ryom Remedies products.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getActiveProducts(), getProductCategories()]);

  return (
    <RyomSiteLayout activePath="/products">
      <PageHero title="Product Range" eyebrow="Product Range" image={heroImage}>
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
        <ProductBrowser products={products} categories={categories} />
      </Section>
    </RyomSiteLayout>
  );
}
