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

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGejS0hBtj-_O_PHtlh4TDeND0nD517weYw0_i7PzPO1u3oKtVrQSJN4Ulnuqt88UAs03PV9Utn0miHSRawGJU6KaQFLJKFgU92AsR3PMk9MOQ4lUa1lddZV98JAn7g8dcv-MYwab4rWFTyoq13hip72SpsQZPndn97sIjwWBSwF85Kj0QBk71P8_RgnBYzdemyySUqMVNLaMkiZd4pI8hMHTHlpW2Jt0A-crVHhh4rUdxhFrOkt-4svmxnzDvbduf06tohiiKQg";

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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmQ-KjUzKhJvw5DXEzOQ5kuv-U5OWAiJlpOPHIr-iqLqzXR6V0dkGD32dLwXDWPm29CkLQHAsNf5-1tLzkfrJQoBiuFCSNz_xbbeXbKLek3Hc8vTOdM7rvAgRMhIjQuJb4ez2cpxez3oZSVaKnOEdFAne9vfXsl-JsmQeZy1XCZTt_yb8rbQp0B8DaaqYdNFsiGRqpN8b3NSZys0JLIepY7OCagh54N1UE8xqfllQmAfTuUBg1n8i2Xu3Lgr90TINklippN3fxQ6A",
  },
  {
    name: "Ryocort",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6sCgemfipUo2N0cgMcRGO08udkVXj4P1Ug_E5sDDOKHi9UuCDJSVXVa5pcCAumhCXSQzDiDI-fjFhUlinyF0uqmpq0dZNMiLQWPtYQKLCdjijTnYAsY-fzCGmLKZUJmPnmQLzatqLTppDWQ76qMqNbmgx5QUFQpGgK-pArT5RPJLoQans4q8ZxdhvAx2SMoVivyUSthW3k9CbkPG27uXqMFNBWllySVoDZCIiK_QljhWNWldPA6ByAxQ6zZBXTuw7drzI7dLl5e8",
  },
  {
    name: "Ryomace P",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFPTKMCRYgO2WnRkhqVQ19eNAPTTOPL0S-PA4VlPDi8i_IzKXKMen_3Yy143SkK5JZbngpv5y-iP7ZXEsp7wY-g3oUwxTQRPgPC895gJw3Kdn7WTbSoObxxJ2jY9GK_YCmrNnSAZwDl0PLgiXgQo7Uc6L9jRUcDMc14qRmSf-QDBROlCb0juN-0RgIO2zPZm1_6MqOKOD6X0t3DRKfb-52VmctHwk2n_FO39q3qa2hRpX2gRp4UgvI-QU1fF95fsUAKZ6efAx5NCk",
  },
  {
    name: "Ryomentin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUICSJTWbyFa8vFEnY2FkCokw4Le5qrtD-PrRBMJcGlTSKfnjyuUvJWwRDcAP3zBbiFvlxwXV55Qi12ruOZmqYaqdOloUgMz3yiAnWlwtY_Hj_HGIl9Cwk76rkvmJjPJcFQ12bCCVK8NJHFhdxX1Fwl79GJupduo4NU924sedsutKWiEyPEuJFgaOjjchnP3lYVrZ0JCQ4o64LpuDGfLQVE9CfwxAmYcMEtbQwaeaOzEbbdxUBKSNxfHI-ZsjqVRpJy0prhDKIpGw",
  },
  {
    name: "Ryomentin Dry Syrup",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoSOOxIYf5sUfhtgw5VTKy4jokMQnRXM6RPmrJKmGb4Y6P5AU2-yM0VDvJmAGmT9C_k2DFLyiqdMmdqxJ5PxpKO7eYjtI15R902xvzuk0d5Kx7JtxPhKv6e__LfO7VN2yPVnRjw8dORcEBVzthcxNtWY1HobQsOTi2JOJzLJWXbFWIjKsungnxvFpR7yiIyfuPwFY2lt5w-Qa4eKAkOVLxJTstTNIA-hB0zX5HnevKhtCMyTgG9OaLNJCXAysObpP976KPc0O3fH4",
  },
  {
    name: "Ryomicin 250",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeP4yCLZIVHanOJULVK0dwYrIpBEENJhROrDSsxmWwYGXOP5dRkDXoAhATugYY_2SCFDRP11Q_C4dbm2uT87Hihr_p5FLSffnO9pYk8srky-aqoWM193dbKks0G2QD7xQKOnlNZXtAb2vPmr-rTPcDgriinHJf2xYbO8QZv4rJPBvfa_jvhPfZQ_hGd1GJ0WnSoCy7VG7KHQVxxmQMfY600nm28oErg04m21Yzr-TC7Zp33D3rXFfwtBF4-7S25L1tqwRzWMAR4sE",
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
