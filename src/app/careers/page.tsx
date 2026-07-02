import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { PageHero, RyomSiteLayout, Section } from "@/components/RyomSiteLayout";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities at Ryom Remedies.",
  openGraph: {
    title: "Careers - Ryom Remedies",
    description: "Explore career opportunities at Ryom Remedies.",
  },
  twitter: {
    card: "summary",
    title: "Careers - Ryom Remedies",
    description: "Explore career opportunities at Ryom Remedies.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

type CareerOpening = {
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
};

const openings: CareerOpening[] = [
  {
    title: "Medical Representative",
    department: "Sales",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    summary:
      "Represent Ryom Remedies in the field by building strong relationships with doctors, pharmacies, and healthcare partners.",
    responsibilities: [
      "Promote assigned product portfolio with accurate product knowledge.",
      "Plan regular doctor and retailer visits across the assigned territory.",
      "Track market feedback, competitor activity, and monthly sales performance.",
    ],
  },
  {
    title: "Quality Assurance Executive",
    department: "Quality",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    summary:
      "Support quality documentation, vendor coordination, and process follow-ups to help maintain dependable pharmaceutical standards.",
    responsibilities: [
      "Maintain quality records, product documentation, and compliance checklists.",
      "Coordinate with manufacturing and distribution partners for quality updates.",
      "Assist internal reviews and follow up on corrective actions when required.",
    ],
  },
];

const values = [
  {
    title: "Purposeful Healthcare Work",
    description:
      "Contribute to a company focused on dependable, affordable medicines and long-term trust.",
    icon: HeartPulse,
  },
  {
    title: "Practical Growth",
    description:
      "Build product knowledge, field confidence, communication skills, and leadership habits.",
    icon: TrendingUp,
  },
  {
    title: "Supportive Team Culture",
    description:
      "Work with a team that values ownership, ethical practice, learning, and steady execution.",
    icon: UsersRound,
  },
];

const idealTraits = [
  "Experience or interest in pharma, healthcare, sales, operations, or quality.",
  "Clear communication and a professional approach with doctors, partners, and teams.",
  "Self-motivation, discipline, curiosity, and willingness to learn the market.",
  "A patient-first mindset with respect for compliance and ethical business practice.",
];

export default function CareersPage() {
  return (
    <RyomSiteLayout activePath="/careers">
      <PageHero title="Careers" eyebrow="Join Our Mission" image={heroImage}>
        <p>
          Grow with a pharmaceutical team committed to spreading health and happiness through
          reliable medicines.
        </p>
      </PageHero>

      <Section tone="teal" className="py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">
              Careers at Ryom
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              Build work that matters in everyday healthcare.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-white/85">
              <p>
                Ryom Remedies Private Limited is building a team of professionals who care about
                quality, access, and reliable execution in the pharmaceutical industry.
              </p>
              <p>
                This page is ready for company openings as roles become available. Candidates can
                review active positions below and share their profile for current or future
                opportunities.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F5C211] px-5 py-3 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#DFAE08]"
              >
                Contact HR
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:admin@ryomremedies.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 bg-white px-5 py-3 text-sm font-bold text-[#39b5a3] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f3f4f5]"
              >
                Send Resume
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-[#e1e3e4] bg-[#f8f9fa] p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
              <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
              Talent Areas
            </h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[#3d4947] sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Sales",
                "Marketing",
                "Operations",
                "Quality",
                "Distribution",
                "Administration",
              ].map((area) => (
                <div key={area} className="flex items-center gap-3 rounded-md bg-white px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F39517]" aria-hidden="true" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light" className="py-16 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F39517]">Why Join Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[#2d9f90] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
            A practical place to learn, contribute, and grow.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-[#e1e3e4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#e9f8f6] text-[#39b5a3]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#6b7280]">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="teal" className="py-16 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">Hiring Board</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              Current Openings
            </h2>
          </div>
          <a
            href="mailto:admin@ryomremedies.com"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#F5C211] px-5 py-3 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#DFAE08]"
          >
            Share Profile
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {openings.length > 0 ? (
          <div className="grid gap-5">
            {openings.map((opening) => (
              <article
                key={`${opening.title}-${opening.location}`}
                className="group relative overflow-hidden rounded-lg border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_62%,#eefbf8_100%)] p-6 shadow-[0_22px_55px_rgba(0,32,28,0.18)] ring-1 ring-[#39b5a3]/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,32,28,0.24)] sm:p-7"
              >
                <div className="absolute inset-y-0 left-0 w-1.5 bg-[#F39517]" aria-hidden="true" />
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#39b5a3]/10 blur-2xl transition group-hover:bg-[#39b5a3]/20"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div>
                    <span className="inline-flex rounded-full bg-[#F39517]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F39517]">
                      {opening.department}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
                      {opening.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-[#4f5b58]">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#e9f8f6] px-3 py-1.5">
                        <MapPin className="h-4 w-4 text-[#39b5a3]" aria-hidden="true" />
                        {opening.location}
                      </span>
                      <span className="inline-flex rounded-full bg-[#f3f4f5] px-3 py-1.5">
                        {opening.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:admin@ryomremedies.com?subject=Application for ${encodeURIComponent(
                      opening.title,
                    )}`}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#39b5a3] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#39b5a3]/25 transition hover:-translate-y-0.5 hover:bg-[#2d9f90]"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <p className="relative mt-6 max-w-4xl text-base leading-7 text-[#3d4947]">
                  {opening.summary}
                </p>
                <ul className="relative mt-6 grid gap-3 rounded-lg border border-[#e1e3e4] bg-white/75 p-4 text-sm leading-6 text-[#3d4947] shadow-inner">
                  {opening.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        className="mt-1 h-4 w-4 shrink-0 text-[#F39517]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-white/45 bg-white/95 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f8f6] text-[#39b5a3] shadow-sm">
              <Sparkles className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
              No active openings right now
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#3d4947]">
              We are always glad to hear from capable professionals. Share your resume and area of
              interest, and our team can keep your profile in mind for upcoming roles.
            </p>
            <a
              href="mailto:admin@ryomremedies.com"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#F39517] px-5 py-3 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d9820e]"
            >
              Send Resume
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </Section>

      <Section tone="white" className="py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#39b5a3]">
              Candidate Profile
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#2d9f90] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              Who should apply?
            </h2>
            <p className="mt-5 text-base leading-7 text-[#3d4947]">
              We value people who combine ambition with ethics, discipline, and a genuine interest
              in healthcare.
            </p>
          </div>
          <div className="grid gap-4">
            {idealTraits.map((trait) => (
              <div
                key={trait}
                className="flex gap-4 rounded-lg border border-[#e1e3e4] bg-[#f8f9fa] p-5 text-[#3d4947] shadow-sm"
              >
                <GraduationCap
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F39517]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6">{trait}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
