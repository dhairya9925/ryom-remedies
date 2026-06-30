"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  FlaskConical,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  ShoppingBag,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

export type RoutePath =
  | "/"
  | "/about"
  | "/services"
  | "/products"
  | "/careers"
  | "/blog"
  | "/faqs"
  | "/contact";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact Us", to: "/contact" },
] as const satisfies ReadonlyArray<{ label: string; to: RoutePath }>;

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function RyomSiteLayout({
  activePath,
  children,
}: {
  activePath: RoutePath;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] [font-family:Urbanist,system-ui,sans-serif]">
      <SiteHeader activePath={activePath} />
      {children}
      <SiteFooter activePath={activePath} />
      <WhatsAppButton />
    </div>
  );
}

function SiteHeader({ activePath }: { activePath: RoutePath }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#bcc9c6]/40 bg-[#f8f9fa]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center transition-transform hover:scale-[0.98]">
          <img
            src="/RYOM.png"
            alt="Ryom Remedies Logo"
            className="h-8 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cx(
                "px-3 py-2 text-sm font-semibold transition-colors",
                item.to === activePath
                  ? "border-b-2 border-[#006b60] text-[#006b60]"
                  : "rounded-md text-[#3d4947] hover:bg-[#edeeef] hover:text-[#006b60]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/products"
            className="hidden items-center gap-2 rounded-lg bg-[#fc9d2a] px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d9841a] md:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Order Now
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#bcc9c6]/60 text-[#006b60] transition hover:bg-[#edeeef] lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          className="border-t border-[#bcc9c6]/40 bg-white px-4 py-3 shadow-sm lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setIsOpen(false)}
                className={cx(
                  "rounded-md px-3 py-3 text-sm font-semibold transition-colors",
                  item.to === activePath
                    ? "bg-[#e7f7f4] text-[#006b60]"
                    : "text-[#3d4947] hover:bg-[#f3f4f5] hover:text-[#006b60]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function PageHero({
  title,
  eyebrow,
  image,
  children,
}: {
  title: string;
  eyebrow: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#006b60] px-4 py-20 text-center text-white sm:min-h-[320px] sm:px-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url("${image}")` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#00201c]/90 via-[#006b60]/55 to-[#006b60]/20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold text-[#ffdcbe]">{eyebrow}</p>
        <h1 className="text-4xl font-bold sm:text-5xl [font-family:Lexend,system-ui,sans-serif]">
          {title}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white/80">
          <Link href="/" className="transition hover:text-[#5edac8]">
            Ryom Remedies
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-[#5edac8]">{title}</span>
        </div>
        {children && <div className="mt-5 text-base leading-7 text-white/80">{children}</div>}
      </div>
    </section>
  );
}

export function HomeHero({
  title,
  highlight,
  description,
  image,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  highlight: string;
  description: string;
  image: string;
  primaryCta: { label: string; to: RoutePath };
  secondaryCta: { label: string; to: RoutePath };
}) {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-[#00201c] px-4 py-20 sm:px-6">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-75"
        style={{ backgroundImage: `url("${image}")` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#00201c]/90 via-[#00201c]/65 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl rounded-lg border-l-4 border-[#006b60] bg-white/95 p-7 shadow-2xl backdrop-blur-sm sm:p-10">
          <h1 className="text-4xl font-bold leading-tight text-[#006b60] sm:text-5xl [font-family:Lexend,system-ui,sans-serif]">
            {title}
            <span className="block text-[#fc9d2a]">{highlight}</span>
          </h1>
          <p className="mt-5 border-l-2 border-[#bcc9c6] pl-4 text-lg leading-8 text-[#3d4947]">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink to={primaryCta.to}>{primaryCta.label}</ButtonLink>
            <ButtonLink to={secondaryCta.to} variant="outline">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "teal" | "white";
  className?: string;
}) {
  return (
    <section
      className={cx(
        "px-4 py-16 sm:px-6 lg:py-20",
        tone === "teal" && "bg-[#006b60] text-white",
        tone === "light" && "bg-[#f8f9fa] text-[#191c1d]",
        tone === "white" && "bg-white text-[#191c1d]",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverse = false,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={cx("mb-10 max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cx("mb-3 text-sm font-bold", inverse ? "text-[#fc9d2a]" : "text-[#006b60]")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cx(
          "text-3xl font-bold sm:text-4xl [font-family:Lexend,system-ui,sans-serif]",
          inverse ? "text-white" : "text-[#0d8a7d]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cx("mt-4 text-base leading-7", inverse ? "text-white/80" : "text-[#6b7280]")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
}: {
  to: RoutePath;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <Link
      href={to}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5",
        variant === "primary" && "bg-[#006b60] text-white hover:bg-[#0d8a7d]",
        variant === "secondary" && "bg-[#fc9d2a] text-white hover:bg-[#d9841a]",
        variant === "outline" &&
          "border border-[#006b60] bg-white text-[#006b60] hover:bg-[#f3f4f5]",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  inverse = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  inverse?: boolean;
}) {
  return (
    <article
      className={cx(
        "h-full rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        inverse
          ? "border-white/15 bg-white/10 text-white backdrop-blur-sm"
          : "border-[#e1e3e4] bg-white text-[#191c1d]",
      )}
    >
      <div
        className={cx(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg",
          inverse ? "bg-white/10 text-[#fc9d2a]" : "bg-[#e7f7f4] text-[#006b60]",
        )}
      >
        {icon}
      </div>
      <h3
        className={cx(
          "text-xl font-bold [font-family:Lexend,system-ui,sans-serif]",
          inverse ? "text-[#fc9d2a]" : "text-[#0d8a7d]",
        )}
      >
        {title}
      </h3>
      <p className={cx("mt-3 text-sm leading-6", inverse ? "text-white/80" : "text-[#6b7280]")}>
        {description}
      </p>
    </article>
  );
}

export function SplitFeature({
  image,
  eyebrow,
  title,
  children,
  cta,
}: {
  image: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  cta?: { label: string; to: RoutePath };
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="group relative">
        <div
          className="absolute -inset-3 rotate-3 rounded-2xl bg-[#d6e3e1] transition-transform duration-500 group-hover:rotate-6"
          aria-hidden="true"
        />
        <img
          src={image}
          alt=""
          className="relative z-10 h-[420px] w-full rounded-xl border border-[#e1e3e4] object-cover shadow-lg"
          loading="lazy"
        />
        {/* Floating Badge */}
        <div
          className="absolute -bottom-6 -right-6 z-20 flex animate-bounce items-center gap-4 rounded-xl border border-[#e1e3e4] bg-white p-4 shadow-xl"
          style={{ animationDuration: "3s" }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f7f4]">
            <ShieldCheck className="h-6 w-6 text-[#006b60]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
              Certified
            </p>
            <p className="text-sm font-bold text-[#006b60]">WHO Approved</p>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-bold text-[#fc9d2a]">{eyebrow}</p>
        <h2 className="text-3xl font-bold text-[#0d8a7d] [font-family:Lexend,system-ui,sans-serif]">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-7 text-[#3d4947]">{children}</div>
        {cta && (
          <div className="mt-7">
            <ButtonLink to={cta.to} variant="secondary">
              {cta.label}
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProductCard({ name, image }: { name: string; image: string }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] bg-[#f3f4f5] p-6">
        <img
          src={image}
          alt={`${name} packaging`}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col items-center border-t border-[#e1e3e4] p-6 text-center">
        <h3 className="text-xl font-bold text-[#191c1d] [font-family:Lexend,system-ui,sans-serif]">
          {name}
        </h3>
        <div className="mt-5">
          <ButtonLink to="/contact" variant="primary">
            Read More
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function ContactInfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-lg bg-[#006b60] p-6 text-white shadow-sm">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-white/70">{label}</p>
          <p className="mt-1 break-words text-lg font-bold">{value}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition hover:-translate-y-1">
      {content}
    </a>
  ) : (
    content
  );
}

function SiteFooter({ activePath }: { activePath: RoutePath }) {
  return (
    <footer className="bg-[#006b60] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="flex items-center">
            <img src="/RYOM.png" alt="Ryom Remedies Logo" className="h-24 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-7 text-white/80">
            Pioneering advanced pharmaceutical solutions for a healthier tomorrow. Committed to
            quality, affordability, and care.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#fc9d2a] [font-family:Lexend,system-ui,sans-serif]">
            Links
          </h2>
          <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className={cx(
                  "inline-flex w-fit items-center gap-2 text-sm font-semibold transition hover:translate-x-1",
                  item.to === activePath ? "text-[#fc9d2a]" : "text-white/80 hover:text-white",
                )}
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#fc9d2a] [font-family:Lexend,system-ui,sans-serif]">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm font-semibold text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#fc9d2a]" aria-hidden="true" />
              <span>Ahmedabad, Gujarat, India.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#fc9d2a]" aria-hidden="true" />
              <a href="tel:+918888888888" className="transition hover:text-[#fc9d2a]">
                +91 88888 88888
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#fc9d2a]" aria-hidden="true" />
              <a href="mailto:info@ryomremedies.com" className="transition hover:text-[#fc9d2a]">
                info@ryomremedies.com
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Share Ryom Remedies"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#fc9d2a]"
            >
              <Share2 className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Visit Ryom Remedies online"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#fc9d2a]"
            >
              <Globe2 className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/60">
        © Copyright 2026 Ryom Remedies Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="#"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#25d366]/25 transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
