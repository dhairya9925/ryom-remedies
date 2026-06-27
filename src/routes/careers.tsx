import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Mail, TrendingUp, Users } from "lucide-react";
import {
  ButtonLink,
  FeatureCard,
  PageHero,
  RyomSiteLayout,
  Section,
  SectionHeader,
} from "@/components/RyomSiteLayout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Ryom Remedies" },
      { name: "description", content: "Join the Ryom Remedies team." },
      { property: "og:title", content: "Careers - Ryom Remedies" },
      { property: "og:description", content: "Join the Ryom Remedies team." },
    ],
  }),
  component: CareersPage,
});

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl-195epmz-MEQYLWVc2WXQLbhu0IQ_iETFd5L7BTJRIsX9WTiXDlPCAWmSgXYMQfsWwlXg1vh81DDoJl0qxKwLkB5oIOljoE9QW7woHzrQA-eY7kdqFtVDC2Ioofkf6YhliW_3P_rLCk34zegZcVoXbgunWPK3CIExqjhVO5hGqvIU86Kq0nVCB9hN8bOjysewH3xESvK8Y_3GRnpJ62TK2iRegduYGJa2DD2WwbDCNXIULaWOM1m1ba6LoqnMmwRt8rUEpZal5w";

const benefits = [
  {
    title: "High-Growth Industry",
    description:
      "Be part of the ever-expanding pharmaceutical sector with meaningful long-term opportunities.",
    icon: <TrendingUp className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Impactful Work",
    description:
      "Help doctors and healthcare providers access quality medicines for better patient care.",
    icon: <Heart className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Career Progression",
    description:
      "Grow through structured learning, performance incentives, and leadership opportunities.",
    icon: <Award className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Skill Development",
    description:
      "Build expertise in product knowledge, market strategy, and customer relationship management.",
    icon: <Users className="h-6 w-6" aria-hidden="true" />,
  },
];

const whoShouldApply = [
  "Individuals with a background in pharma sales or a passion for the healthcare industry.",
  "Excellent communication and persuasion skills.",
  "Strong ability to build relationships and drive sales growth.",
  "Self-motivated professionals eager to learn, perform, and grow.",
];

function CareersPage() {
  return (
    <RyomSiteLayout activePath="/careers">
      <PageHero title="Careers" eyebrow="Join Our Mission" image={heroImage}>
        <p>
          Build a career with a team focused on spreading health and happiness through reliable
          medicines.
        </p>
      </PageHero>

      <Section tone="teal">
        <SectionHeader
          inverse
          eyebrow="Careers at Ryom"
          title="Join our mission to spread health and happiness"
        />
        <div className="max-w-4xl space-y-5 text-lg leading-8 text-white/85">
          <p>
            At Ryom, we are more than just a pharmaceutical company. We are a team of passionate
            professionals dedicated to making a difference in healthcare.
          </p>
          <p>
            We foster a dynamic and inclusive work environment where talent is nurtured, ideas are
            valued, and professional growth is encouraged.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why Join Our Team"
          title="A workplace built for growth and impact"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Section>

      <Section tone="teal">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              inverse
              eyebrow="Who Should Apply"
              title="We are looking for motivated healthcare professionals"
            />
            <ul className="space-y-4">
              {whoShouldApply.map((item) => (
                <li key={item} className="border-l-2 border-[#fc9d2a] pl-4 text-white/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-6 text-white">
            <Mail className="mb-5 h-8 w-8 text-[#fc9d2a]" aria-hidden="true" />
            <h2 className="text-2xl font-bold [font-family:Lexend,system-ui,sans-serif]">
              Join our winning team
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              Send your resume to{" "}
              <a href="mailto:admin@ryomremedies.com" className="font-bold text-[#fc9d2a]">
                admin@ryomremedies.com
              </a>
              , or contact us to learn more about current openings.
            </p>
            <div className="mt-7">
              <ButtonLink to="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </RyomSiteLayout>
  );
}
