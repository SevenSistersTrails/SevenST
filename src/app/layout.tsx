import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function resolveSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
    "http://localhost:3000",
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;

    try {
      return new URL(value.includes("://") ? value : `https://${value}`).origin;
    } catch {
      continue;
    }
  }

  return "http://localhost:3000";
}

const siteUrl = resolveSiteUrl();

const siteDescription =
  "Self-drive vehicle rentals in Shillong, Guwahati, and the Northeast. Book local fleets, or find vendors who list with us.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SevenSistersTrails",
    template: "%s | SevenSistersTrails",
  },
  description: siteDescription,
  openGraph: {
    title: "SevenSistersTrails",
    description: siteDescription,
    siteName: "SevenSistersTrails",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SevenSistersTrails",
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--sst-surface)] font-sans text-[var(--sst-ink)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
