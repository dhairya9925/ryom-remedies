import type { Metadata } from "next";
import { Lexend, Urbanist } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "@/components/providers";
import { getPayload } from "@/lib/payload";
import "leaflet/dist/leaflet.css";
import "@/styles.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ryom Remedies",
    template: "%s - Ryom Remedies",
  },
  description:
    "Ryom Remedies offers wellness-focused care, services, products, and guidance for healthier living.",
  authors: [{ name: "Ryom Remedies" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Ryom Remedies",
    description:
      "Explore Ryom Remedies services, products, careers, articles, and contact information.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ryom Remedies",
    description:
      "Explore Ryom Remedies services, products, careers, articles, and contact information.",
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  let enableOrderNow = true;

  try {
    const payload = await getPayload();
    const settings = await payload.findGlobal({
      slug: "site-settings",
    });
    enableOrderNow = settings.enableOrderNow ?? true;
  } catch (error) {
    console.error("Failed to fetch site settings:", error);
  }

  return (
    <div className={`${lexend.variable} ${urbanist.variable}`}>
      <Providers enableOrderNow={enableOrderNow}>{children}</Providers>
    </div>
  );
}
