import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AntProvider from "../lib/provider/AntProvider";
import { Toaster } from "sonner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alphaclub.ae";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Alpha Club UAE - Premium Lifestyle Club",
    template: "%s | Alpha Club UAE",
  },
  description:
    "Alpha Club UAE is your gateway to exclusive lifestyle benefits, events, and offers across the UAE. Join the premium community today.",
  keywords: ["Alpha Club", "UAE lifestyle", "exclusive offers", "premium club", "membership benefits"],
  authors: [{ name: "Alpha Club UAE" }],
  creator: "Alpha Club UAE",
  publisher: "Alpha Club UAE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Alpha Club UAE",
    title: "Alpha Club UAE - Premium Lifestyle Club",
    description:
      "Alpha Club UAE is your gateway to exclusive lifestyle benefits, events, and offers across the UAE. Join the premium community today.",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Alpha Club UAE",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Club UAE - Premium Lifestyle Club",
    description:
      "Alpha Club UAE is your gateway to exclusive lifestyle benefits, events, and offers across the UAE. Join the premium community today.",
    // images: ["/og-image.jpg"],
    // creator: "@alphaclubuae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    // shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntProvider>
      <html lang="en">
        <body
          className={`${manrope.variable}  antialiased`}
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <Toaster position="top-center" duration={2000} />
          {children}
        </body>
      </html>
    </AntProvider>
  );
}
