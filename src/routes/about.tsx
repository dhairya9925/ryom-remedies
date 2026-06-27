import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BriefcaseMedical,
  CheckCircle2,
  Compass,
  FlaskConical,
  Globe,
  HeartPulse,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero, RyomSiteLayout, Section, SectionHeader } from "@/components/RyomSiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - Ryom Remedies" },
      {
        name: "description",
        content: "Learn about Ryom Remedies — our mission, values, and team.",
      },
      { property: "og:title", content: "About Us - Ryom Remedies" },
      {
        property: "og:description",
        content: "Learn about Ryom Remedies — our mission, values, and team.",
      },
    ],
  }),
  component: AboutPage,
});

const heroImage = "/page-header-bg-1-1.jpg";
const whoWeAreImage = "/juin-us-bg.png";

const missionItems = [
  "Delivering high-quality medicines that improve lives.",
  "Ensuring affordability so cost never becomes a barrier to health.",
  "Upholding ethical business practices with transparency and integrity.",
  "Empowering healthcare professionals with reliable pharmaceutical solutions.",
  "Expanding our reach to touch more lives across India and beyond.",
];

const whoWeAreCards = [
  {
    title: "Qualified doctors",
    description:
      "Ryom Remedies Pvt. Ltd. is a progressive pharmaceutical company dedicated to innovation, affordability, and excellence in healthcare. With a strong foundation in research and a passion for making a difference, we have established ourselves as a trusted partner for chemists, stockists, healthcare professionals, and patients alike.",
    icon: BriefcaseMedical,
  },
  {
    title: "Helpful test tips",
    description:
      "Our collaboration with a WHO-approved manufacturing partner ensures that our medicines meet the highest global quality standards while remaining affordable. By prioritizing both innovation and accessibility, we aim to bridge the healthcare gap, ensuring that essential treatments reach those who need them the most.",
    icon: FlaskConical,
  },
];

function AboutPage() {
  return (
    <RyomSiteLayout activePath="/about">
      <PageHero title="About" eyebrow="Who We Are" image={heroImage}>
        <p>
          A pharmaceutical company shaped by strength, ethical care, and a clear mission to make
          quality healthcare more accessible.
        </p>
      </PageHero>

      {/* ── Brand Motto Section ──────────────────────────── */}
      <Section tone="white" className="text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-[#fc9d2a]">Our Motto</p>
          <h2 className="text-3xl font-bold text-[#0d8a7d] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
            Spreading Health, Spreading Happiness
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#fc9d2a]" />
          <p className="mt-6 text-lg leading-8 text-[#3d4947]">
            At Ryom Remedies, we are guided by a simple yet powerful vision: to make high-quality,
            affordable healthcare accessible to all. We believe that good health is the foundation of
            a happy life, and through our unwavering commitment, we strive to bring safe, effective,
            and ethically produced medicines to people around the world.
          </p>
        </div>
      </Section>

      {/* ── Name Significance ───────────────────────────── */}
      <Section tone="light" className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#10a696]/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[#006b60]">Our Identity</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0d8a7d] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              What's in a Name?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* RYOM Card */}
            <div className="flex flex-col rounded-2xl border border-[#bcc9c6]/40 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f7f4] text-[#006b60]">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
                RYOM – Strength & Leadership
              </h3>
              <p className="mt-4 leading-relaxed text-[#3d4947]">
                Traditionally recognized as a masculine name in Korean culture, it embodies strength,
                resilience, and leadership. More than just a name, RYOM stands for power and
                determination, values that align with our vision of making a meaningful impact in the
                healthcare and pharmaceutical industry.
              </p>
            </div>

            {/* OM Card */}
            <div className="flex flex-col rounded-2xl border border-[#bcc9c6]/40 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffdcbe] text-[#8a5100]">
                <HeartPulse className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#8a5100] [font-family:Lexend,system-ui,sans-serif]">
                OM – Harmony & Healing
              </h3>
              <p className="mt-4 leading-relaxed text-[#3d4947]">
                The essence of RYOM goes beyond its linguistic roots—it also represents the vibrations
                of "OM," a sacred sound that signifies harmony, balance, and well-being. In the
                healthcare and pharmaceutical sectors, these principles resonate deeply, as the
                industry is built on the foundation of care, healing, and continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Pillars / Commitments ───────────────────────── */}
      <Section tone="white" className="relative">
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[#fc9d2a]">Core Commitments</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0d8a7d] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              Healthcare Built Around Access & Trust
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Pillar 1 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e7f7f4] text-[#006b60]">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
                  Healthcare Access is a Right
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We believe that access to quality healthcare is a fundamental right and not a privilege.
                  Every medicine we produce and every initiative we undertake is centered on this belief,
                  striving to bridge global healthcare gaps.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e7f7f4] text-[#006b60]">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
                  Global Access & Reliability
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We are committed to enhancing global healthcare access, ensuring high-quality medicines
                  reach those who need them most. We focus on research, ethical practices, regulatory
                  excellence, and innovation.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e7f7f4] text-[#006b60]">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
                  A New Chapter (Est. 2024)
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  Our official incorporation on October 14, 2024, marked the beginning of a dedicated
                  mission to make a lasting impact in the pharmaceutical world, ensuring quality
                  healthcare remains a fundamental global right.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e7f7f4] text-[#006b60]">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
                  Ethical & Affordable Solutions
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We maintain strict adherence to quality and safety standards while keeping medicines
                  affordable, serving chemists, stockists, healthcare professionals, and patients
                  with trust and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Who We Are Section ──────────────────────────── */}
      <WhoWeAreSection />

      {/* ── Mission & Vision ────────────────────────────── */}
      <MissionVisionSection />
    </RyomSiteLayout>
  );
}

function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-[300px] overflow-hidden" aria-hidden="true">
        <div
          className="h-full w-full scale-105 bg-cover bg-center blur-[1.5px]"
          style={{ backgroundImage: `url("${whoWeAreImage}")` }}
        />
        <div className="absolute inset-0 bg-[#f8f9fa]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-[#f8f9fa]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="text-4xl font-bold text-[#fc9d2a] sm:text-5xl [font-family:Lexend,system-ui,sans-serif]">
            Who We Are
          </h2>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-[#006b60] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0d8a7d]"
          >
            Discover More
          </Link>
        </div>

        <div className="mt-24 grid gap-16 lg:mt-28 lg:grid-cols-2 lg:gap-7">
          {whoWeAreCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="relative rounded-lg border border-[#e1e3e4] bg-white p-7 pt-16 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:p-10 md:pt-16"
              >
                <div className="absolute -top-10 left-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#007c70] text-white shadow-xl">
                  <Icon className="h-9 w-9" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#3d4947]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <Section tone="teal" className="relative overflow-hidden">
      <div
        className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-sm sm:p-8">
          <SectionHeader inverse eyebrow="Our Mission" title="What we are committed to" />
          <ul className="grid gap-4 md:grid-cols-2">
            {missionItems.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg bg-white/10 p-4 text-white/85">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#fc9d2a]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-white p-7 text-[#191c1d] shadow-xl sm:p-8">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f7f4] text-[#006b60]">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
            Our Vision
          </h2>
          <p className="mt-5 text-base leading-7 text-[#3d4947]">
            To be a global leader in the pharmaceutical industry by revolutionizing access to
            healthcare and spreading wellness and happiness in every community we serve.
          </p>
          <div className="mt-7 flex items-center gap-3 rounded-lg bg-[#f8f9fa] p-4">
            <HeartPulse className="h-6 w-6 shrink-0 text-[#fc9d2a]" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#006b60]">
              Health is happiness, and every reliable medicine can help move a life forward.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

