import type { Metadata } from "next";
import { BadgeCheck, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import { PageHero, RyomSiteLayout, Section } from "@/components/RyomSiteLayout";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Pharmaceutical services offered by Ryom Remedies.",
  openGraph: {
    title: "Our Services - Ryom Remedies",
    description: "Pharmaceutical services offered by Ryom Remedies.",
  },
  twitter: {
    card: "summary",
    title: "Our Services - Ryom Remedies",
    description: "Pharmaceutical services offered by Ryom Remedies.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

const introText =
  "We are committed to providing high-quality pharmaceutical products tailored to the needs of chemists, stockists, and healthcare institutions. Our B2B pharmaceutical solutions are designed to ensure a seamless and efficient supply chain, enabling retailers and distributors to access safe, effective, and affordable medicines. By focusing on both product excellence and operational efficiency, we help businesses in the pharmaceutical sector maintain a consistent supply of essential medications, ultimately improving patient care and public health.";

const services = [
  {
    title: "Affordable & Ethical Healthcare Solutions",
    description:
      "We believe that healthcare should be accessible to all. Our affordable pricing strategies, combined with ethical business practices, ensure that patients receive the best possible treatments without financial barriers.",
    icon: FlaskConical,
  },
  {
    title: "WHO-Approved Manufacturing Partner",
    description:
      "Our products are manufactured in facilities that meet WHO's stringent quality standards, guaranteeing compliance with international regulatory requirements. This ensures that every medicine we supply is safe, effective, and reliable.",
    icon: BadgeCheck,
  },
  {
    title: "Strong Distribution Network",
    description:
      "We have built a robust and efficient distribution system, allowing us to reach a wide network of retailers, stockists, and healthcare providers. Our supply chain is optimized for speed, accuracy, and reliability, ensuring that our products are available whenever and wherever they are needed.",
    icon: Truck,
  },
  {
    title: "Commitment to Quality & Compliance",
    description:
      "Quality is at the heart of everything we do. From manufacturing to distribution, we adhere to the highest industry standards, ensuring that every product meets strict regulatory guidelines. Our dedication to compliance, safety, and ethical business practices makes us a trusted partner in the pharmaceutical industry.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <RyomSiteLayout activePath="/services">
      <PageHero title="Our Services" eyebrow="B2B Pharmaceutical Solutions" image={heroImage}>
        <p>
          Reliable pharmaceutical support for chemists, stockists, distributors, and healthcare
          institutions.
        </p>
      </PageHero>

      <Section tone="teal" className="relative overflow-hidden py-16 sm:py-20">
        {/* Intro text */}
        <div className="mx-auto max-w-4xl text-lg leading-8 text-white/95">
          <p>{introText}</p>
        </div>

        {/* Why choose? Header */}
        <div className="mt-16 mb-10 text-left">
          <h2 className="text-3xl font-bold text-[#F5C211] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
            Why choose?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="services-card flex items-center gap-6 rounded-2xl bg-white p-6 md:p-8 shadow-lg border border-[#e1e3e4]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Centered left icon block */}
                <div className="services-card__icon flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e9f8f6] text-[#39b5a3] transition-all duration-300">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                {/* Right content block */}
                <div className="services-card__content flex-1 text-[#191c1d]">
                  <h3 className="services-card__title text-xl font-bold text-[#39b5a3] [font-family:Lexend,system-ui,sans-serif] leading-snug">
                    {service.title}
                  </h3>
                  <p className="services-card__description mt-3 text-sm text-[#3d4947] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
