import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Microscope,
  Newspaper,
  Pill,
  Scale,
  Sparkles,
} from "lucide-react";
import { PageHero, RyomSiteLayout } from "@/components/RyomSiteLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog - Ryom Remedies" },
      {
        name: "description",
        content:
          "Read Ryom Remedies articles on healthcare trends, product updates, compliance, and safe medicine use.",
      },
      { property: "og:title", content: "Blog - Ryom Remedies" },
      {
        property: "og:description",
        content:
          "Healthcare insights, product updates, and pharmaceutical guidance from Ryom Remedies.",
      },
    ],
  }),
  component: BlogPage,
});

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuADJ4NgsSYopfoO0JYidjoxgrLhpSAkQ2RZbbNpM5-9pPmI7dm-J5BBaFDM4txoLvu3la5OIM6LqUAJ2SwQ_l8hwnBenH8N6IqFpjtIthoP3KD-5XskSm43NpjLXtQWMMy0FV3EbyU_wrElhlM-gMhkHr2DlSkWUVdctxw9ttUoQqFCoX6MvFXupiq4sWm2Wp4JU49sZO_3h7ghWV56wnDNnSqfd1rO9C1cpZzgkEwM7cs12TAxWtELAmFFb-ZTWWQMjOFcRam-Sic";

const posts = [
  {
    title: "Healthcare Trends & Innovation",
    category: "Research",
    icon: Microscope,
    day: "22",
    month: "Apr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj59as2aFncyFqXEG-xei9d0HDIJ2doWpBC5zA65DfydLJ9VJFNxlWGt5To9ETE-3UlZusU_onrlXDoHR2FKH1RLv6cy4A7HAfSLxpgYZrfwRGvAVk2uyAxNZKoNxmtMtAelYP-rMZ0AQ_qE3Xjl5qXSUcY1Aq_zRlumrycuk4dM1b-RT1hzi8bMkw7hTLtKpHjajWmIlHU91-zzvveyGypc8j2b--QPSJh1hDubzqX2itXaZQHYA3UeER31CQm1nrLWEsH5S7Clw",
    summary:
      "Exploring the latest technological advancements shaping clinical trials, patient care, and access to dependable medicines.",
  },
  {
    title: "New Product Launches",
    category: "Products",
    icon: Sparkles,
    day: "22",
    month: "Apr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsXRun8L-UdYcZc0PH3-deQgaeyyKivRVOzZZ8t9Yk935ptlBVWQ3owrMDsyNPzVP0-fpZXOSU8dKgsEgEOxgYQTSOnpz-Ku-ONFYg-LEGJfQAEgHP-K_EW8ddKXhHOCpgA6n5NdwGAlTYtVVOmg3o47iIP8Sz10Ox2ppUcZZdZpNGpndAHNnAhaEVmnr1C8JlLrwoLAncaM3Fm8xXl7-flkj_e8dGBmt_0aQxsA6CyAF9V1wH1EJpgk2WzeuGlZNIOoh-knjMlQ4",
    summary:
      "A look at our latest formulations and how thoughtful product development supports better healthcare outcomes.",
  },
  {
    title: "Pharmaceutical Compliance & Regulations",
    category: "Compliance",
    icon: Scale,
    day: "22",
    month: "Apr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQk4qaYhqomuqyfxBge7f-k5YXsjrB1dp91rCq4EeGFLjjaHbjDvN9rqdvYwrcMBDHPLTAXB8V28L0UQu0vr0ctucvNSV8NFjWEd0b3PoNztcUuWxTrAqLEbHX79AMMxrfsldNCGfQ5MQ1ESn691Kb2UjacLnCU_8QW_yI-SKXLDHhDHdJHXKvPukR_-rCcslaViguFjjifw1e3Iy1kuBVFRCJ5xCO3UvOARos2HmDUuY4k1y_FlhLupoDw9hvhrqrOMA3_a_wYRc",
    summary:
      "Navigating pharmaceutical standards and our commitment to quality, traceability, and ethical business practices.",
  },
  {
    title: "Expert Tips on Medicine Usage",
    category: "Advice",
    icon: Pill,
    day: "22",
    month: "Apr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClJ7pK0QB4Y22qpjrt07-U5sSYUJ3xsuSINprFr02duSZmFx920zy5phAhw6oXOF9H0K59AqXFJC0ivQQyFTGiIGgn7YTW0crGLf4gW2L-Q49OMozcgFrazKQ0AWxJyKh8SUbdsH-IN79V8KwZA-PgyQqjNMBPVFCNwt6tFyHyq5b_FyIByzKgMF0e-Rw5T2SkAZ0-t4KXrhAKyOjjUch168oZZvaxrV4wu6Ciz_NlZz2Z2KN5OAtnpfQH5xPwu6eFgtnpblLODjk",
    summary:
      "Practical guidance for patients and caregivers to use prescribed medicines safely and consistently.",
  },
];

function BlogPage() {
  return (
    <RyomSiteLayout activePath="/blog">
      <PageHero title="Blog" eyebrow="Insights & Updates" image={heroImage}>
        <p>
          Helpful articles from Ryom Remedies on quality care, responsible medicine use, product
          updates, and pharmaceutical innovation.
        </p>
      </PageHero>

      <main className="bg-[#f8f9fa]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#006b60]">
                <Newspaper className="h-5 w-5 text-[#fc9d2a]" aria-hidden="true" />
                <span>Latest Articles</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0d8a7d] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
                Practical healthcare knowledge, made easy to follow
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6b7280]">
              Explore guidance and updates designed for partners, professionals, and families who
              value accessible, dependable healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {posts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>

          <div
            className="mt-14 flex items-center justify-center gap-2"
            aria-label="Blog pagination"
          >
            <button
              type="button"
              aria-label="Previous page"
              disabled
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bcc9c6] text-[#6d7a77] opacity-50"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                type="button"
                key={page}
                aria-current={page === 1 ? "page" : undefined}
                className={
                  page === 1
                    ? "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#006b60] text-sm font-bold text-white shadow-sm"
                    : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bcc9c6] bg-white text-sm font-bold text-[#3d4947] transition hover:bg-[#edeeef]"
                }
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bcc9c6] bg-white text-[#3d4947] transition hover:bg-[#edeeef]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>
    </RyomSiteLayout>
  );
}

function BlogCard({ post }: { post: (typeof posts)[number] }) {
  const Icon = post.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-[0_4px_20px_rgba(16,166,150,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.09)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#edeeef]">
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-white bg-[#fc9d2a] text-white shadow-md">
          <span className="text-xl font-bold leading-none [font-family:Lexend,system-ui,sans-serif]">
            {post.day}
          </span>
          <span className="text-xs font-bold">{post.month}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#10a696]">
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span>{post.category}</span>
        </div>
        <h3 className="text-xl font-bold text-[#0d8a7d] transition group-hover:text-[#d9841a] [font-family:Lexend,system-ui,sans-serif]">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#6b7280]">{post.summary}</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center justify-between rounded-lg bg-[#f3f4f5] px-4 py-3 text-sm font-bold text-[#006b60] transition hover:bg-[#e7e8e9] hover:text-[#d9841a]"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
