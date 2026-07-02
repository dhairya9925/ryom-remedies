"use client";

import Link from "next/link";
import { ArrowRight, FlaskConical, HelpCircle, Mail, Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { PageHero, RyomSiteLayout } from "@/components/RyomSiteLayout";

const heroImage = "/page-header-bg-1-1.jpg";

const faqs = [
  {
    id: "medicine-range",
    question: "What types of medicines does Ryom Remedies offer?",
    answer:
      "We provide a diverse range of affordable and high-quality medicines covering multiple therapeutic segments, including pain management, antibiotics, gastroenterology, respiratory care, and chronic disease management.",
  },
  {
    id: "purchase-products",
    question: "Where can I purchase Ryom Remedies' products?",
    answer:
      "Our products are available through authorized distributors, pharmacies, and select healthcare providers across our operating regions. Please contact our sales team for a distributor near you.",
  },
  {
    id: "quality-standards",
    question: "Are your medicines WHO-approved?",
    answer:
      "We follow strict quality control standards and work with compliant manufacturing systems. Product-specific approvals may vary, so our team can help confirm the relevant certification or documentation for the medicine you need.",
  },
  {
    id: "distribution",
    question: "How can I become a distributor for Ryom Remedies?",
    answer:
      "We are always looking to expand our network. Please visit our Contact Us page and share your partnership inquiry so our business development team can review your region, capabilities, and requirements.",
  },
  {
    id: "contract-manufacturing",
    question: "Do you offer third-party or contract manufacturing?",
    answer:
      "Yes, we support third-party and contract manufacturing services for a wide range of pharmaceutical formulations. Contact our corporate office for detailed capabilities, capacities, and documentation.",
  },
];

export default function FaqsPage() {
  const [openItems, setOpenItems] = useState<string[]>([faqs[0].id]);

  function toggleFaq(id: string) {
    setOpenItems((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <RyomSiteLayout activePath="/faqs">
      <PageHero title="FAQs" eyebrow="Questions & Answers" image={heroImage}>
        <p>
          Quick answers about our medicines, quality approach, availability, and partnership
          opportunities.
        </p>
      </PageHero>

      <main className="relative overflow-hidden bg-[#39b5a3]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#F6D32D]">
              <FlaskConical className="h-5 w-5" aria-hidden="true" />
              <span>FAQs</span>
            </div>
            <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
              Frequently asked questions and answers
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
              We keep the essentials clear, direct, and useful. For anything specific to your order,
              territory, or product documentation, our team can help.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm">
                <ShieldCheck className="mb-4 h-7 w-7 text-[#F6D32D]" aria-hidden="true" />
                <h3 className="font-bold [font-family:Lexend,system-ui,sans-serif]">
                  Quality First
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Clear processes, careful sourcing, and documented quality checks support every
                  product.
                </p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm">
                <HelpCircle className="mb-4 h-7 w-7 text-[#F6D32D]" aria-hidden="true" />
                <h3 className="font-bold [font-family:Lexend,system-ui,sans-serif]">
                  Need Details?
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Our team can provide product-specific information and partnership next steps.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              const panelId = `${faq.id}-panel`;

              return (
                <article
                  key={faq.id}
                  className="overflow-hidden rounded-lg border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-sm"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-white/5 sm:p-6"
                  >
                    <span className="text-lg font-bold text-[#F6D32D] sm:text-xl [font-family:Lexend,system-ui,sans-serif]">
                      {faq.question}
                    </span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#39b5a3]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Plus className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    className={
                      isOpen
                        ? "grid grid-rows-[1fr] transition-[grid-template-rows] duration-300"
                        : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300"
                    }
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-base leading-7 text-white/90 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <section className="border-t border-[#e1e3e4] bg-[#f8f9fa] px-4 py-14 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#39b5a3]">
              <Mail className="h-5 w-5 text-[#F6D32D]" aria-hidden="true" />
              <span>Still have a question?</span>
            </div>
            <h2 className="text-2xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
              Talk to the Ryom Remedies team
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-[#6b7280]">
              Send us your query and we will guide you to the right product, department, or
              partnership contact.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F6D32D] px-5 py-3 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#C9A400]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </RyomSiteLayout>
  );
}
