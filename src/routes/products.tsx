import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  ProductCard,
  RyomSiteLayout,
  Section,
  SectionHeader,
} from "@/components/RyomSiteLayout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop - Ryom Remedies" },
      { name: "description", content: "Browse Ryom Remedies products." },
      { property: "og:title", content: "Shop - Ryom Remedies" },
      { property: "og:description", content: "Browse Ryom Remedies products." },
    ],
  }),
  component: ProductsPage,
});

const heroImage = "/page-header-bg-1-1.jpg";

const categories = [
  ["Pain & Inflammation", 2],
  ["Anti Biotics", 4],
  ["Anti Allergic", 1],
  ["Anti Emetic", 1],
  ["GI Disorders", 2],
] as const;

const products = [
  {
    name: "Ryoalert-LC",
    image: "/products/ryoalert-lc.jpg",
  },
  {
    name: "Ryocort",
    image: "/products/ryocort.jpg",
  },
  {
    name: "Ryomace P",
    image: "/products/ryomace-p.jpg",
  },
  {
    name: "Ryomentin",
    image: "/products/ryomentin.jpg",
  },
  {
    name: "Ryomentin Dry Syrup",
    image: "/products/ryomentin-dry-syrup.jpg",
  },
  {
    name: "Ryomicin 250",
    image: "/products/ryomicin-250.jpg",
  },
];

function ProductsPage() {
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
          description="Product cards are data-driven, ready to be replaced by Payload CMS collection entries."
        />
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-lg border border-[#e1e3e4] bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
              Categories
            </h2>
            <ul className="mt-5 space-y-2">
              {categories.map(([category, count]) => (
                <li key={category}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#3d4947] transition hover:bg-[#f3f4f5] hover:text-[#006b60]"
                  >
                    <span>{category}</span>
                    <span className="rounded-full bg-[#e7e8e9] px-2 py-0.5 text-xs">{count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
