import type { Metadata } from "next";
import { Award, FlaskConical, HeartPulse, ShieldCheck } from "lucide-react";
import {
  ButtonLink,
  FeatureCard,
  RyomSiteLayout,
  Section,
  SectionHeader,
  SplitFeature,
} from "@/components/RyomSiteLayout";
import HeroSlider from "@/components/HeroSlider";
import type { HeroSlide } from "@/components/HeroSlider";

export const metadata: Metadata = {
  title: {
    absolute: "Ryom Remedies - Your Trusted Pharmaceutical Partner",
  },
  description: "Ryom Remedies — quality pharmaceuticals you can trust.",
  openGraph: {
    title: "Ryom Remedies",
    description: "Your trusted pharmaceutical partner.",
  },
  twitter: {
    card: "summary",
    title: "Ryom Remedies",
    description: "Your trusted pharmaceutical partner.",
  },
};

/* ──────────────────────────────────────────────────────────
   Slider slides – matching WordPress hero carousel
   ────────────────────────────────────────────────────────── */

const heroSlides: HeroSlide[] = [
  {
    title: "Your Trusted",
    highlight: "Pharmaceutical Partner",
    description:
      "Ethical & Reliable Healthcare Solutions delivering high-quality, affordable medicines accessible to all.",
    image: "/slider-1-1.png",
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Partner With Us", to: "/contact" },
  },
  {
    title: "Spreading Health,",
    highlight: "Spreading Happiness",
    description:
      "We believe good health is the foundation of a happy life. Making high-quality, affordable medicines accessible to all.",
    image: "/slider-1-2.jpg",
    primaryCta: { label: "About Us", to: "/about" },
    secondaryCta: { label: "Our Services", to: "/services" },
  },
  {
    title: "WHO-Approved",
    highlight: "Manufacturing Partner",
    description:
      "Affordable & High-Quality Medicines — our strategic collaboration ensures the highest standards of quality and affordability.",
    image: "/slider-1-3.jpg",
    primaryCta: { label: "Our Products", to: "/products" },
    secondaryCta: { label: "Contact Us", to: "/contact" },
  },
];

const aboutImage = "/about-2-1.png";

const highlights = [
  {
    title: "Ethical Healthcare",
    description: "Affordable medicines and transparent practices designed around trust and access.",
    icon: <HeartPulse className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Quality Focus",
    description:
      "Manufacturing and supply choices guided by consistent documentation and compliance.",
    icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Pharma Partnership",
    description:
      "Reliable B2B support for chemists, stockists, healthcare providers, and partners.",
    icon: <FlaskConical className="h-6 w-6" aria-hidden="true" />,
  },
];

export default function Index() {
  return (
    <RyomSiteLayout activePath="/">
      <HeroSlider slides={heroSlides} interval={5000} />
      <h1 className="text-center text-2xl font-bold">Preview-Next.js</h1>
      <Section tone="teal" className="pt-8 sm:pt-16">
        {/* Mobile only centered spinning logo */}
        <div className="mx-auto mb-8 flex justify-center sm:hidden">
          <img
            src="/Pneumonic Hi Res.png"
            className="h-28 w-28 animate-[spin_20s_linear_infinite] opacity-95"
            alt="Spinning Logo"
          />
        </div>
        <SectionHeader
          centered
          inverse
          title="Ryom Remedies Pvt. Ltd. – Spreading Health, Spreading Happiness"
        />
        <div className="mx-auto max-w-4xl space-y-6 text-center text-lg leading-8 text-white/90">
          <p>
            At Ryom Remedies Pvt. Ltd., we believe that good health is the foundation of a happy
            life. Guided by our motto, “Spreading Health, Spreading Happiness,” we are committed to
            making high-quality, affordable medicines accessible to all, ensuring that no one is
            left behind in the journey toward well-being.
          </p>
          <p>
            As a visionary pharmaceutical company, we strive to bridge healthcare gaps by delivering
            safe, effective, and ethical medical solutions to people across the world. Our strategic
            collaboration with a WHO-approved manufacturing partner enables us to maintain the
            highest standards of quality while ensuring affordability. This allows us to serve
            chemists, stockists, healthcare professionals, and patients with trust and reliability.
          </p>
          <p>
            We understand that medicine is more than just a product—it is a lifeline, a source of
            relief, and a promise of hope. Every formulation we create is a step toward a healthier
            society, where access to essential treatments is a right, not a privilege.
          </p>
          <p className="font-semibold text-white">
            Join us in our mission to bring smiles, restore health, and uplift lives—because true
            happiness begins with good health. Together, we can make quality healthcare a reality
            for everyone, everywhere.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <SplitFeature
          image={aboutImage}
          eyebrow="About Us"
          title="The Meaning and Significance of Ryom – A Name Rooted in Strength"
          cta={{ label: "Read More", to: "/about" }}
        >
          <p>
            Traditionally recognized as a masculine name in Korean culture, it embodies strength,
            resilience, and leadership. More than just a name, RYOM stands for power and
            determination, values that align with our vision of making a meaningful impact in the
            healthcare and pharmaceutical industry.
          </p>
          <p>
            The essence of RYOM goes beyond its linguistic roots—it also represents the Vibrations
            of "OM," a sacred sound that signifies harmony, balance, and well-being. In the
            healthcare and pharmaceutical sectors, these principles resonate deeply, as the industry
            is built on the foundation of care, healing, and the continuous pursuit of innovation to
            improve lives.
          </p>
        </SplitFeature>
      </Section>

      <Section>
        <SectionHeader
          centered
          eyebrow="Why Ryom"
          title="Healthcare solutions built around access and trust"
          description="Reusable page data like this can later be supplied from Payload CMS without changing the layout components."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink to="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </Section>

      <Section tone="teal">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["2024", "Incorporated with a clear healthcare mission"],
            ["B2B", "Built for chemists, stockists, and healthcare institutions"],
            ["Quality", "Focused on safe, effective, and affordable medicines"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-lg border border-white/15 bg-white/10 p-6 text-center"
            >
              <div className="mb-3 flex justify-center text-[#fc9d2a]">
                <Award className="h-8 w-8" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold [font-family:Lexend,system-ui,sans-serif]">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
