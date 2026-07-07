import type { Metadata } from "next";
import Image from "next/image";
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
import { companyAddress, companyAddressInline, companyEmail } from "@/lib/company";

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
const mapsLink = "https://maps.app.goo.gl/7h7KGWYkSDHhQkMW8?g_st=aw";

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
              value="+91 82869 01115"
              href="tel:+918286901115"
            />
            <ContactInfoCard
              icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              label="Send email"
              value={companyEmail}
              href={`mailto:${companyEmail}`}
            />
            <ContactInfoCard
              icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
              label="Location"
              value={companyAddress}
              href={mapsLink}
            />
            <Image
              src={labImage}
              width={600}
              height={288}
              alt=""
              className="h-72 w-full rounded-lg object-cover shadow-sm"
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
        <LeafletMap lat={23.018503} lng={72.519002} zoom={14} popupText={companyAddressInline} />
      </section>
    </RyomSiteLayout>
  );
}
