import type { Metadata } from "next";
import {
  Award,
  BriefcaseMedical,
  CheckCircle2,
  Compass,
  FlaskConical,
  Globe,
  HeartPulse,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { PageHero, RyomSiteLayout, Section, SectionHeader } from "@/components/RyomSiteLayout";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ryom Remedies — our mission, vision, board of directors, and key associates.",
  openGraph: {
    title: "About Us - Ryom Remedies",
    description:
      "Learn about Ryom Remedies — our mission, vision, board of directors, and key associates.",
  },
  twitter: {
    card: "summary",
    title: "About Us - Ryom Remedies",
    description:
      "Learn about Ryom Remedies — our mission, vision, board of directors, and key associates.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

const missionItems = [
  "Delivering high-quality medicines that improve lives.",
  "Ensuring affordability so that cost never becomes a barrier to health.",
  "Upholding ethical business practices with transparency and integrity.",
  "Empowering healthcare professionals with reliable pharmaceutical solutions.",
  "Expanding our reach to touch more lives across India and beyond.",
];

const boardMembers = [
  {
    name: "Mr. Pankaj Mahabaleshwarkar",
    role: "Director",
    description:
      "A seasoned pharma executive with over 35 years of global experience in pharmaceutical operations, strategic planning, and regulatory compliance. He has created multiple manufacturing sites for different dosage forms serving global pharma markets, cleared USFDA and MHRA inspections, managed greenfield projects, and built sterile dosage plants for different companies. He holds a master's degree in Pharmacy from Poona College of Pharmacy and is passionate about innovation and operational excellence.",
    icon: BriefcaseMedical,
  },
  {
    name: "Mrs. Jagruti Raval",
    role: "Director",
    description:
      "A seasoned EHS expert for pharma and food excipient industries with over 20 years of experience. Mrs. Raval is a dynamic entrepreneur driving safe and sustainable workspaces. Her efforts have helped grow businesses beyond ₹20 crore. She is also a respected industry voice, promoting EHS awareness through forums and workshops. Her leadership inspires women entrepreneurs and supports sustainable development in highly regulated industries.",
    icon: ShieldCheck,
  },
];

const keyAssociates = [
  {
    name: "Mr. Sharad Patel",
    role: "Shareholder & Manufacturing Partner",
    description:
      "Mr. Sharad Patel has 20 years of experience in pharmaceutical operations. He is currently the Chairman & Managing Director of Sotac Pharma Ltd., a listed company.",
    icon: FlaskConical,
  },
  {
    name: "Mr. Om Prakash Arya",
    role: "Mentor",
    description:
      "Mr. Arya brings over 40 years of pharmaceutical industry experience. Starting as a medical representative, he rose to become CEO & MD of different joint ventures of an Indian pharma major.",
    icon: Lightbulb,
  },
  {
    name: "Mr. Amit Singhvi",
    role: "Senior Marketing Professional",
    description:
      "Mr. Singhvi has 24 years of experience in pharma sales and marketing, with strengths in brand building, product launches, and strategic planning. He has worked with different pharma majors in India.",
    icon: TrendingUp,
  },
];

export default function AboutPage() {
  return (
    <RyomSiteLayout activePath="/about">
      <PageHero title="About" eyebrow="Who We Are" image={heroImage}>
        <p>
          Meet the leadership, mission, and associates shaping Ryom Remedies Pvt. Ltd. as a
          progressive healthcare company.
        </p>
      </PageHero>

      {/* ── Mission & Vision ────────────────────────────── */}
      <MissionVisionSection />

      {/* ── Board of Directors ──────────────────────────── */}
      <LeadershipSection />

      {/* ── Key Associates ──────────────────────────────── */}
      <AssociatesSection />

      {/* ── Operating Commitments ───────────────────────── */}
      <Section tone="light" className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#39b5a3]/5 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[#39b5a3]">
              Our Operating Focus
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#2d9f90] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              Healthcare Built Around Access & Trust
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Pillar 1 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                  Quality Medicines
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We focus on delivering high-quality medicines that improve lives and support
                  dependable healthcare outcomes.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                  Affordable Healthcare
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We are committed to ensuring affordability so that cost never becomes a barrier to
                  health.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                  Ethical Practices
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We uphold ethical business practices with transparency, integrity, and respect for
                  regulated healthcare environments.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex gap-5 rounded-xl border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                  Professional Empowerment
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4947]">
                  We empower healthcare professionals with reliable pharmaceutical solutions and aim
                  to expand our reach across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </RyomSiteLayout>
  );
}

function LeadershipSection() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F39517]">
            Board Of Directors
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#2d9f90] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
            Experienced Leadership For Pharmaceutical Excellence
          </h2>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {boardMembers.map((member) => {
            const Icon = member.icon;

            return (
              <article
                key={member.name}
                className="rounded-lg border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#F39517]">
                  {member.role}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                  {member.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#3d4947]">{member.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function AssociatesSection() {
  return (
    <Section tone="teal" className="relative overflow-hidden">
      <div
        className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#F5C211]">
            <UsersRound className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#F5C211]">
            Key Associates
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
            Strategic Guidance Across Manufacturing, Mentorship, And Marketing
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {keyAssociates.map((associate) => {
            const Icon = associate.icon;

            return (
              <article
                key={associate.name}
                className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#F5C211]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#F5C211]">
                  {associate.role}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white [font-family:Lexend,system-ui,sans-serif]">
                  {associate.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/85">{associate.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
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
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C211]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-white p-7 text-[#191c1d] shadow-xl sm:p-8">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f8f6] text-[#39b5a3]">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
            Our Vision
          </h2>
          <p className="mt-5 text-base leading-7 text-[#3d4947]">
            To create a progressive, productive and self sustainable entity serving the Healthcare
            Industry.
          </p>
          <div className="mt-7 flex items-center gap-3 rounded-lg bg-[#f8f9fa] p-4">
            <HeartPulse className="h-6 w-6 shrink-0 text-[#F39517]" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#39b5a3]">
              Health is happiness, and every reliable medicine can help move a life forward.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
