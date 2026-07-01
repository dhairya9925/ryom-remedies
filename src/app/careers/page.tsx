import type { Metadata } from "next";
import { Award, Brain, Heart, Mail, TrendingUp } from "lucide-react";
import { PageHero, RyomSiteLayout, Section } from "@/components/RyomSiteLayout";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Ryom Remedies team.",
  openGraph: {
    title: "Careers - Ryom Remedies",
    description: "Join the Ryom Remedies team.",
  },
  twitter: {
    card: "summary",
    title: "Careers - Ryom Remedies",
    description: "Join the Ryom Remedies team.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

export default function CareersPage() {
  return (
    <RyomSiteLayout activePath="/careers">
      <PageHero title="Careers" eyebrow="Join Our Mission" image={heroImage}>
        <p>
          Build a career with a team focused on spreading health and happiness through reliable
          medicines.
        </p>
      </PageHero>

      <Section tone="teal" className="py-16 sm:py-20 flex-grow">
        <div className="mx-auto max-w-[900px] px-6 md:px-12 space-y-16 text-white">
          {/* Introduction */}
          <div className="space-y-6 text-lg leading-relaxed text-white/95">
            <p className="text-2xl font-bold text-[#e88f18] mb-4 [font-family:Lexend,system-ui,sans-serif]">
              Careers at Ryom Remedies Private Limited: Join Our Mission to Spread Health &amp;
              Happiness.
            </p>
            <p>
              At Ryom, we are more than just a pharmaceutical company—we are a team of passionate
              professionals dedicated to making a difference in global healthcare. Our commitment to
              innovation, quality, and affordability drives us to create life-changing medicines
              that improve lives.
            </p>
            <p>
              We believe in fostering a dynamic and inclusive work environment where talent is
              nurtured, ideas are valued, and professional growth is encouraged.
            </p>
          </div>

          {/* Why Join Our Team? */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#e88f18] border-b border-[#2d9f90] pb-4 [font-family:Lexend,system-ui,sans-serif]">
              Why Join Our Team?
            </h2>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-[#e88f18] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-[#fde2c1] font-semibold">High-Growth Industry:</strong> Be
                  part of the ever-expanding pharmaceutical sector with endless opportunities.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Heart
                  className="h-6 w-6 text-[#e88f18] fill-current mt-1 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-[#fde2c1] font-semibold">Impactful Work:</strong> Help
                  doctors and healthcare providers access quality medicines for better patient care.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Award className="h-6 w-6 text-[#e88f18] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-[#fde2c1] font-semibold">Career Progression:</strong>{" "}
                  Fast-track your growth with structured training, performance incentives, and
                  leadership opportunities.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Brain className="h-6 w-6 text-[#e88f18] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-[#fde2c1] font-semibold">Skill Development:</strong> Gain
                  expertise in product knowledge, market strategies, and customer relationship
                  management.
                </div>
              </li>
            </ul>
          </div>

          {/* Who Should Apply? */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#e88f18] border-b border-[#2d9f90] pb-4 [font-family:Lexend,system-ui,sans-serif]">
              Who Should Apply?
            </h2>
            <ul className="space-y-4 text-lg pl-2 border-l-2 border-[#e88f18]/50">
              <li className="pl-4 relative before:absolute before:left-[-5px] before:top-2.5 before:w-2 before:h-2 before:bg-[#e88f18] before:rounded-full">
                Individuals with a background in pharma sales or a passion for the healthcare
                industry.
              </li>
              <li className="pl-4 relative before:absolute before:left-[-5px] before:top-2.5 before:w-2 before:h-2 before:bg-[#e88f18] before:rounded-full">
                Excellent communication and persuasion skills.
              </li>
              <li className="pl-4 relative before:absolute before:left-[-5px] before:top-2.5 before:w-2 before:h-2 before:bg-[#e88f18] before:rounded-full">
                Strong ability to build relationships and drive sales growth.
              </li>
              <li className="pl-4 relative before:absolute before:left-[-5px] before:top-2.5 before:w-2 before:h-2 before:bg-[#e88f18] before:rounded-full">
                Self-motivated professionals eager to learn, perform, and grow.
              </li>
            </ul>
          </div>

          {/* Join Our Winning Team! */}
          <div className="bg-[#2d9f90]/20 p-8 rounded-xl border border-[#2d9f90]/40 shadow-inner">
            <h2 className="text-2xl font-bold text-[#e88f18] mb-4 [font-family:Lexend,system-ui,sans-serif]">
              Join Our Winning Team!
            </h2>
            <p className="text-lg text-white mb-6">
              If you’re looking for an exciting career in the pharmaceutical industry, Ryom is the
              place to be. Be a part of our journey to spread health and happiness through
              high-quality medicines!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-lg text-[#191c1d] shadow-sm">
              <div className="flex items-center gap-3 text-[#39b5a3] shrink-0">
                <Mail className="h-8 w-8 text-[#39b5a3]" aria-hidden="true" />
                <span className="text-xl font-bold [font-family:Lexend,system-ui,sans-serif]">
                  Send your resume to:
                </span>
              </div>
              <a
                className="text-lg font-bold text-[#e88f18] hover:text-[#c97912] transition-colors border-b border-transparent hover:border-[#c97912]"
                href="mailto:admin@ryomremedies.com"
              >
                admin@ryomremedies.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
