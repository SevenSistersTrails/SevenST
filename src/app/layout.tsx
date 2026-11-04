import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "./components/AppShell";
import { resolveSiteUrl } from "./utilities/helperFunctions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = resolveSiteUrl([
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
  process.env.VERCEL_URL,
  "http://localhost:3000",
]);

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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
