import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Microscope,
  Pill,
  Scale,
  Search,
  Sparkles,
  Tag,
  UserRound,
} from "lucide-react";
import { PageHero, RyomSiteLayout } from "@/components/RyomSiteLayout";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Ryom Remedies articles on healthcare trends, product updates, compliance, and safe medicine use.",
  openGraph: {
    title: "Blog - Ryom Remedies",
    description:
      "Healthcare insights, product updates, and pharmaceutical guidance from Ryom Remedies.",
  },
  twitter: {
    card: "summary",
    title: "Blog - Ryom Remedies",
    description:
      "Healthcare insights, product updates, and pharmaceutical guidance from Ryom Remedies.",
  },
};

const heroImage = "/page-header-bg-1-1.jpg";

const posts = [
  {
    title: "Healthcare Trends & Innovations",
    category: "Digital Solution",
    icon: Microscope,
    date: "April 22, 2024",
    readTime: "5 min read",
    image: "/blog-7.jpg",
    summary:
      "A practical look at how digital tools, research workflows, and accessible distribution are shaping more dependable patient care.",
    tags: ["Healthcare", "Innovation"],
    featured: true,
  },
  {
    title: "New Product Launches",
    category: "Product Updates",
    icon: Sparkles,
    date: "April 22, 2024",
    readTime: "4 min read",
    image: "/blog-3.jpg",
    summary:
      "What partners should know when new formulations enter the Ryom Remedies product range.",
    tags: ["Products", "Distribution"],
  },
  {
    title: "Pharmaceutical Compliance & Regulations",
    category: "Compliance",
    icon: Scale,
    date: "April 22, 2024",
    readTime: "6 min read",
    image: "/blog-2.jpg",
    summary:
      "Quality, documentation, and responsible processes remain central to every medicine we support.",
    tags: ["Quality", "Regulations"],
  },
  {
    title: "Expert Tips on Medicine Usage",
    category: "Patient Care",
    icon: Pill,
    date: "April 22, 2024",
    readTime: "3 min read",
    image: "/blog-1.jpg",
    summary: "Simple, repeatable guidance for using prescribed medicines consistently and safely.",
    tags: ["Care", "Dosage"],
  },
];

const categories = [
  ["Digital solution", 3],
  ["Free testing", 2],
  ["Laboratory", 4],
  ["Healthcare", 5],
  ["Pharmaceutical", 3],
] as const;

const tags = ["Development", "Digital", "Marketing", "Medicine", "Wellness"];

export default function BlogPage() {
  const [featuredPost, ...morePosts] = posts;

  return (
    <RyomSiteLayout activePath="/blog">
      <PageHero title="Blog" eyebrow="Insights & Updates" image={heroImage}>
        <p>
          Helpful articles from Ryom Remedies on quality care, responsible medicine use, product
          updates, and pharmaceutical innovation.
        </p>
      </PageHero>

      <main className="bg-[#f8f9fa]">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_340px] lg:py-20">
          <div>
            <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-bold text-[#39b5a3]">Latest Articles</p>
                <h2 className="text-3xl font-bold text-[#2d9f90] sm:text-4xl [font-family:Lexend,system-ui,sans-serif]">
                  Healthcare knowledge for partners, professionals, and families
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#6b7280]">
                Browse updates inspired by the previous Ryom Remedies blog, redesigned for the new
                site with a cleaner article flow.
              </p>
            </div>

            <FeaturedArticle post={featuredPost} />

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {morePosts.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>

            <div
              className="mt-12 flex items-center justify-center gap-2"
              aria-label="Blog pagination"
            >
              <button
                type="button"
                aria-label="Previous page"
                disabled
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#bcc9c6] text-[#6d7a77] opacity-50"
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
                      ? "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#39b5a3] text-sm font-bold text-white shadow-sm"
                      : "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#bcc9c6] bg-white text-sm font-bold text-[#3d4947] transition hover:bg-[#edeeef]"
                  }
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                aria-label="Next page"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#bcc9c6] bg-white text-[#3d4947] transition hover:bg-[#edeeef]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <BlogSidebar />
        </section>
      </main>
    </RyomSiteLayout>
  );
}

function FeaturedArticle({ post }: { post: (typeof posts)[number] }) {
  const Icon = post.icon;

  return (
    <article className="overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-[0_16px_45px_rgba(0,107,96,0.08)]">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[320px] bg-[#e7e8e9]">
          <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute left-5 top-5 rounded-lg bg-[#e88f18] px-4 py-3 text-white shadow-md">
            <span className="block text-2xl font-bold leading-none [font-family:Lexend,system-ui,sans-serif]">
              22
            </span>
            <span className="text-xs font-bold uppercase">Apr</span>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-bold text-[#39b5a3]">
            <span className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-[#e88f18]" aria-hidden="true" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2 text-[#6b7280]">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-tight text-[#2d9f90] sm:text-3xl [font-family:Lexend,system-ui,sans-serif]">
            {post.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-[#4f5b58]">{post.summary}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 border-y border-[#e1e3e4] py-4 text-sm font-semibold text-[#6b7280]">
            <span className="inline-flex items-center gap-2">
              <UserRound className="h-4 w-4" aria-hidden="true" />
              ryom_remedies_admin
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {post.date}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[#e9f8f6] px-3 py-1 text-xs font-bold text-[#39b5a3]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-[#39b5a3] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#2d9f90]"
            >
              Read More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function BlogCard({ post }: { post: (typeof posts)[number] }) {
  const Icon = post.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.09)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#edeeef]">
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#39b5a3]">
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span>{post.category}</span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-[#2d9f90] transition group-hover:text-[#c97912] [font-family:Lexend,system-ui,sans-serif]">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#6b7280]">{post.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-[#e1e3e4] pt-4 text-sm font-bold text-[#39b5a3]">
          <span>{post.date}</span>
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
      <SidebarPanel title="Search">
        <form className="flex" action="/blog">
          <label className="sr-only" htmlFor="blog-search">
            Search blog
          </label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search here..."
            className="min-w-0 flex-1 rounded-l-lg border border-[#e1e3e4] bg-[#f8f9fa] px-4 py-3 text-sm text-[#191c1d] outline-none transition focus:border-[#39b5a3] focus:bg-white"
          />
          <button
            type="submit"
            aria-label="Search"
            className="inline-flex w-12 items-center justify-center rounded-r-lg bg-[#191c1d] text-white transition hover:bg-[#39b5a3]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </SidebarPanel>

      <SidebarPanel title="Recent Posts">
        <div className="grid gap-4">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.title} href="/blog" className="group grid grid-cols-[72px_1fr] gap-3">
              <img
                src={post.image}
                alt=""
                className="h-16 w-full rounded-md object-cover"
                loading="lazy"
              />
              <span>
                <span className="block text-xs font-semibold text-[#6b7280]">{post.date}</span>
                <span className="mt-1 block text-sm font-bold leading-snug text-[#191c1d] transition group-hover:text-[#39b5a3]">
                  {post.title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </SidebarPanel>

      <SidebarPanel title="Categories">
        <ul className="grid gap-2">
          {categories.map(([category, count]) => (
            <li key={category}>
              <Link
                href="/blog"
                className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-semibold text-[#3d4947] transition hover:bg-[#f3f4f5] hover:text-[#39b5a3]"
              >
                <span>{category}</span>
                <span className="rounded-md bg-[#e7e8e9] px-2 py-0.5 text-xs">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarPanel>

      <SidebarPanel title="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href="/blog"
              className="inline-flex items-center gap-1 rounded-md bg-[#f3f4f5] px-3 py-2 text-xs font-bold text-[#4f5b58] transition hover:bg-[#e9f8f6] hover:text-[#39b5a3]"
            >
              <Tag className="h-3 w-3" aria-hidden="true" />
              {tag}
            </Link>
          ))}
        </div>
      </SidebarPanel>
    </aside>
  );
}

function SidebarPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-[#e1e3e4] bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-[#d6e3e1]" aria-hidden="true" />
      <div className="mt-5">{children}</div>
    </section>
  );
}
