import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import LeafletMap from "@/components/LeafletMapDynamic";
import {
  ContactInfoCard,
  PageHero,
  RyomSiteLayout,
  Section,
  SectionHeader,
} from "@/components/RyomSiteLayout";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ryom Remedies.",
  openGraph: {
    title: "Contact Us - Ryom Remedies",
    description: "Get in touch with Ryom Remedies.",
  },
  twitter: {
    card: "summary",
    title: "Contact Us - Ryom Remedies",
    description: "Get in touch with Ryom Remedies.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

const labImage = "/man-contact.png";

export default function ContactPage() {
  return (
    <RyomSiteLayout activePath="/contact">
      <PageHero title="Contact" eyebrow="Get In Touch" image={heroImage}>
        <p>
          Reach our team for product inquiries, distribution, partnerships, and career
          opportunities.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <ContactInfoCard
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              label="Have any question?"
              value="+91 88888 88888"
              href="tel:+918888888888"
            />
            <ContactInfoCard
              icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              label="Send email"
              value="info@ryomremedies.com"
              href="mailto:info@ryomremedies.com"
            />
            <ContactInfoCard
              icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
              label="Location"
              value="Ahmedabad, Gujarat, India"
            />
            <img
              src={labImage}
              alt=""
              className="h-72 w-full rounded-lg object-cover shadow-sm"
              loading="lazy"
            />
          </div>

          <div className="rounded-lg border border-[#e1e3e4] bg-white p-6 shadow-sm">
            <SectionHeader eyebrow="Contact With Us" title="Feel free to write us anytime" />
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* ── Interactive Map ─────────────────────────────────── */}
      <section className="relative h-[400px] overflow-hidden">
        <LeafletMap
          lat={23.0225}
          lng={72.5714}
          zoom={14}
          popupText="Ryom Remedies — Ahmedabad, Gujarat, India"
        />
      </section>
    </RyomSiteLayout>
  );
}
