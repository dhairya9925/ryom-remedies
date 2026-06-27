import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BriefcaseMedical,
  CheckCircle2,
  FlaskConical,
  HeartPulse,
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

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCoPhfGVIWGNWFVCalJHCyAKBIKZQeq6BTC77iU4ZgpUnnX-YBRumuHxDWVkBQ2EjM6ozIB5Q0i2DIjj7pmxS1LVzJMX25uM1rXRyp--clW6SV4jtGfTulrx65SLDQqTbROtN8tykk73RHU6rn7xGBOrsHIxWrJYYkNkhh2kzkegRIDttOOjTIeYx9isJWbpyih8WtcDhfJHwSetn4eOYYVHEKwpk6R-TOKWuaXq7BsK5otBCUsuWdwvUpo394QfZIlZIGZWt0jCS4";

const whoWeAreImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCV1l-MYvsKR55jCHP59FmmphFXb_VJB0rUDXBstepfwQzrHz7kteyZPtwKu9ik1RGgxiBMF_77smScOFOgT6J_Vm58MQ3uEVzd6STud_lI4BV1P-yJutRr37nXPYC-RZD3IyZIlWW8QV1IRW52G-mOPj0hSF3H_ESiQIZXPDml438QlK2N-ZNLhyyCOg_uMgFKNqzbQqvlDQuQhpTa7SqE61ckwICArPAPQFOteFToJDFdgQ-dl3mFrLdy2VNVhgJkGeyGBim7EbE";

const overview = [
  "The name Ryom holds deep cultural and symbolic significance. Traditionally recognized as a masculine name in Korean culture, it embodies strength, resilience, and leadership.",
  "The essence of Ryom also represents the vibrations of OM, a sacred sound that signifies harmony, balance, and well-being.",
  "At Ryom Remedies, we are guided by our core philosophy of Spreading Health, Spreading Happiness. We believe access to quality healthcare is a fundamental right and not a privilege.",
  "The official incorporation date of Ryom Remedies, October 14, 2024, marks the beginning of a new chapter in this mission.",
];

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

      <OverviewSection />

      <WhoWeAreSection />

      <MissionVisionSection />
    </RyomSiteLayout>
  );
}

function OverviewSection() {
  return (
    <Section tone="white" className="relative overflow-hidden">
      <div
        className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#10a696]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Overview"
            title="Spreading Health, Spreading Happiness"
            description="Ryom Remedies is built around a simple promise: dependable medicines, ethical partnerships, and better access to healthcare."
          />
          <div className="rounded-lg bg-[#006b60] p-6 text-white shadow-lg">
            <Sparkles className="mb-5 h-8 w-8 text-[#fc9d2a]" aria-hidden="true" />
            <p className="text-2xl font-bold [font-family:Lexend,system-ui,sans-serif]">
              Strength, harmony, and healthcare excellence.
            </p>
            <p className="mt-4 leading-7 text-white/80">
              The name Ryom reflects resilience and balance, values that guide how we serve
              healthcare professionals, stockists, chemists, and patients.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {overview.map((item, index) => (
            <article
              key={item}
              className="grid gap-4 rounded-lg border border-[#e1e3e4] bg-[#f8f9fa] p-5 shadow-sm sm:grid-cols-[48px_1fr] sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdcbe] text-lg font-bold text-[#8a5100] [font-family:Lexend,system-ui,sans-serif]">
                {index + 1}
              </div>
              <p className="text-base leading-7 text-[#3d4947]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
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
