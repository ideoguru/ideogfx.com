import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best UI/UX Designers in Kochi | Web & App Experts",
  description: "Top UI/UX design company in Kochi offering modern web, mobile, and branding solutions. We create user-focused experiences for startups and enterprises.",
  keywords: [
    "UI UX", "UI/UX", "ui ux designer", "UI UX design company for startups in Kerala",
    "Best UI UX company Kochi", "UI/UX design studio Kochi",
    "Top UI/UX design Kochi", "Affordable UI design services in Kochi",
    "Best UX design team for SaaS in Kochi"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag for responsiveness */}
        {/* COMMENTED TEMPORARLY TO FORCE DESKTOP VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="viewport" content="width=1280, user-scalable=no" /> */}

        {/* Add other meta tags for SEO */}
        {/* <meta name="description" content="Your site description here" />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="IdeoGFX" /> */}

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="IdeoGFX" />
        <meta property="og:description" content="Your site description here" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ideogfx-com.web.app" />
        <meta
          property="og:image"
          content="https://ideogfx-com.web.app/logo.png"
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IdeoGFX" />
        <meta name="twitter:description" content="Your site description here" />
        <meta
          name="twitter:image"
          content="https://ideogfx-com.web.app/logo.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
