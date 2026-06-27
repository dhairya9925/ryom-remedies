import { createFileRoute } from "@tanstack/react-router";
import { Award, FlaskConical, HeartPulse, ShieldCheck } from "lucide-react";
import {
  ButtonLink,
  FeatureCard,
  HomeHero,
  RyomSiteLayout,
  Section,
  SectionHeader,
  SplitFeature,
} from "@/components/RyomSiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ryom Remedies - Your Trusted Pharmaceutical Partner" },
      { name: "description", content: "Ryom Remedies — quality pharmaceuticals you can trust." },
      { property: "og:title", content: "Ryom Remedies" },
      { property: "og:description", content: "Your trusted pharmaceutical partner." },
    ],
  }),
  component: Index,
});

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvWuqnRAOFjrMtlX_6C1Gr-5OgAHU7g_xJCljPLp-KiQC1k9YrtCmp_bPo-zv-NQDpXXPuEw9rIT3zdOgLac9TS-uxcJAu32kwOn30vj5wlEgl8mOvLdBliDzmK8txtXVK29AjfYsLUAjdfI3X3CrPU7eAJixXAIR_Pr1yGx_t6ftP8XmWLWOgfu-3Nn6Zkv63HQUhGh44SmTV4pjkqwiNIgDWD4YKokzKm7-NLVU3yucgf9yXDDcLF-kIhMkRhheOPEL97TFIDWQ";

const aboutImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPKIDEP911ltTcHT4ZZhnPOiZgPHBBugWihn2jFFR0PvLhh6aHqV69doTyxKEu1XJutHbAPNhD-orGJqnVxjqBixQgVs3mGg9GrpTJkD5suqsQAiyk_XZlWP3fPS0499kCL9w_3-9JBl1KgyzxsCKXBIuxDj4G1ekduFEM8YW2OAy5uvg5DZEeeeICBK4_h5BM3x7LV2RVjzpIKDvrx4gX39-1OEyYRtNszabIGw_YJrp_ZkwNeW7kY7quoFK3hsaj3vciBs-7tVs";

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

function Index() {
  return (
    <RyomSiteLayout activePath="/">
      <HomeHero
        title="Your Trusted"
        highlight="Pharmaceutical Partner"
        description="Ethical and reliable healthcare solutions delivering high-quality, affordable medicines accessible to all."
        image={heroImage}
        primaryCta={{ label: "Explore Products", to: "/products" }}
        secondaryCta={{ label: "Partner With Us", to: "/contact" }}
      />

      <Section tone="teal">
        <SectionHeader
          centered
          inverse
          title="Ryom Remedies Pvt. Ltd. - Spreading Health, Spreading Happiness"
          description="We believe good health is the foundation of a happy life. Guided by this philosophy, Ryom Remedies works to make high-quality, affordable medicines accessible to all."
        />
        <div className="mx-auto max-w-4xl space-y-5 text-center text-lg leading-8 text-white/85">
          <p>
            As a visionary pharmaceutical company, we strive to bridge healthcare gaps by delivering
            safe, effective, and ethical medical solutions to people across the world.
          </p>
          <p>
            Every formulation we create is a step toward a healthier society, where access to
            essential treatments is a right, not a privilege.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <SplitFeature
          image={aboutImage}
          eyebrow="About Us"
          title="A name rooted in strength, harmony, and healthcare excellence"
          cta={{ label: "Read More", to: "/about" }}
        >
          <p>
            The name Ryom reflects strength, resilience, and leadership. It also resonates with the
            vibrations of OM, symbolizing harmony, balance, and well-being.
          </p>
          <p>
            These values align with our mission to make a meaningful impact in healthcare through
            reliable medicines, ethical partnerships, and accessible solutions.
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
