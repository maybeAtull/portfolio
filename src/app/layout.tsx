import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { personal } from "../../content/site-data";
import "./globals.css";

// Inter = primary body/heading font (clean, technical feel).
// Geist Mono = used sparingly for tech-tags/labels, giving a subtle
// "code/data" accent without pulling in an extra font family.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://maybeportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personal.name} — ${personal.role}`,
  description: personal.tagline,
  openGraph: {
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    url: siteUrl,
    siteName: `${personal.name} — Portfolio`,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0a0f10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
