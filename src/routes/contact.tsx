import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  ContactInfoCard,
  PageHero,
  RyomSiteLayout,
  Section,
  SectionHeader,
} from "@/components/RyomSiteLayout";

const LeafletMap = lazy(() => import("@/components/LeafletMap"));

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - Ryom Remedies" },
      { name: "description", content: "Get in touch with Ryom Remedies." },
      { property: "og:title", content: "Contact Us - Ryom Remedies" },
      { property: "og:description", content: "Get in touch with Ryom Remedies." },
    ],
  }),
  component: ContactPage,
});

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZa84J3ZApmnd4btEIsoawlpF_KO__x9vmGEBZrLKAcoe8Hra2WjljaZ1LcRL69YXZMTStgvI9CIGKjmT_2eCPZAEIyw5yKfKSegcqsybY5lPKQhd2pnosCHR87NYL8SIvSb82TiVFwC4NzDn7ES8nBGWRgKrT6-re7-daKKKbp_Q6_qgEg_xhlmyRCyQmB7cLWZ21023FwSDx1JR_VxzcWZtsS6UK2IH6ziaUQgWeAct_Z-7tpTKuqoB-wZevtxQ6dJuhJkd-yIM";

const labImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKiV8pd7B_uXVw8DDlkIIC-xSZzM6rjUbBPy-3z-jKG44p-DxzXIogVwFNw9UxC-GT63H6dNu1dyXYij2jVGyhztfESYWN3mCK_18MFNxknj61etq8moT44FFwrDYRH1B9x1TwWHZ4LeT_bbAktAZHPZzWLTuoogBot2fnxfqA3_MWGZyv1x6wjL8iZOoq8hh9jaGeHFtnzzek7F4V7g1U3Vy5LTo7_RzStJWeWgm9WlRcCJ-xKJp9qBUWpTFDZNXc_X78SrMyi4";

function MapFallback() {
  return (
    <div className="flex h-[400px] items-center justify-center bg-[#edeeef]">
      <div className="flex items-center gap-3 rounded-lg bg-white/90 px-6 py-4 text-[#0d8a7d] shadow-lg backdrop-blur-sm">
        <MapPin className="h-6 w-6 text-[#fc9d2a]" aria-hidden="true" />
        <span className="text-xl font-bold [font-family:Lexend,system-ui,sans-serif]">
          Ahmedabad, Gujarat, India
        </span>
      </div>
    </div>
  );
}

function ContactPage() {
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
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#006b60] focus:bg-white"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#006b60] focus:bg-white"
                  placeholder="Email address"
                  type="email"
                />
                <input
                  className="rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#006b60] focus:bg-white"
                  placeholder="Phone"
                  type="tel"
                />
                <input
                  className="rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#006b60] focus:bg-white"
                  placeholder="Company Name"
                  type="text"
                />
              </div>
              <textarea
                className="min-h-36 rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#006b60] focus:bg-white"
                placeholder="Write a message"
              />
              <button
                type="submit"
                className="inline-flex w-fit rounded-lg bg-[#fc9d2a] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d9841a]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* ── Interactive Map ─────────────────────────────────── */}
      <section className="relative h-[400px] overflow-hidden">
        <Suspense fallback={<MapFallback />}>
          <LeafletMap
            lat={23.0225}
            lng={72.5714}
            zoom={14}
            popupText="Ryom Remedies — Ahmedabad, Gujarat, India"
          />
        </Suspense>
      </section>
    </RyomSiteLayout>
  );
}

