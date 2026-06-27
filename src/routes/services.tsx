import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import {
  FeatureCard,
  PageHero,
  RyomSiteLayout,
  Section,
  SectionHeader,
} from "@/components/RyomSiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services - Ryom Remedies" },
      { name: "description", content: "Pharmaceutical services offered by Ryom Remedies." },
      { property: "og:title", content: "Our Services - Ryom Remedies" },
      { property: "og:description", content: "Pharmaceutical services offered by Ryom Remedies." },
    ],
  }),
  component: ServicesPage,
});

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDf96OSqyEC6pXQzbkRPEaXUYs7mTbI3-vS0R-Ec_M9jlG-H9alewxn_87VFO7HCdYfJ57s8u7lmTFWMSzNpwvoz9gteZ0OcXbtXDrhPweGQvMcWwNzQ8Za3hUD1Lbh8Xp53Gf1hy8arhQF916uL6S7GAWolBDDQ3jlBnLZgdF-ww594UlOuwEyBsNPUQ_-om2mIFa2QNBZYLa_LGJ6yP7CZz-kTsG0po2DY28pZkpVLIQb3fbBQSDbpYQOjWwBvqApbb4EJz0JjuY";

const services = [
  {
    title: "Affordable & Ethical Healthcare Solutions",
    description:
      "Our affordable pricing strategies, combined with ethical business practices, help patients receive dependable treatments without unnecessary barriers.",
    icon: <FlaskConical className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Quality Manufacturing Partnerships",
    description:
      "We work with manufacturing partners that follow strong quality systems, helping every medicine we supply remain safe, effective, and reliable.",
    icon: <BadgeCheck className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Strong Distribution Network",
    description:
      "Our supply approach is optimized for speed, accuracy, and reliability so retailers, stockists, and healthcare providers can maintain availability.",
    icon: <Truck className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Commitment to Quality & Compliance",
    description:
      "From manufacturing to distribution, we prioritize safety, compliance, documentation, and ethical practices.",
    icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
  },
];

function ServicesPage() {
  return (
    <RyomSiteLayout activePath="/services">
      <PageHero title="Our Services" eyebrow="B2B Pharmaceutical Solutions" image={heroImage}>
        <p>
          Reliable pharmaceutical support for chemists, stockists, distributors, and healthcare
          institutions.
        </p>
      </PageHero>

      <Section tone="teal">
        <div className="max-w-4xl text-lg leading-8 text-white/85">
          <p>
            We provide high-quality pharmaceutical products tailored to the needs of chemists,
            stockists, and healthcare institutions. Our B2B solutions support a seamless and
            efficient supply chain so businesses can access safe, effective, and affordable
            medicines.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why Choose Ryom"
          title="Services built for dependable pharmaceutical supply"
          description="Each service area is represented as reusable content data, ready to be sourced from a CMS later."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
