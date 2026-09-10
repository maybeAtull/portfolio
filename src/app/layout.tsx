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

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.role}`,
  description: personal.tagline,
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
