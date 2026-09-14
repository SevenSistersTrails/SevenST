import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-black/[.08] px-6 py-4 dark:border-white/[.145]">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            SevenSistersTrails
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
