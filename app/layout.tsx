import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteShell from "./SiteShell";
import TemplateScripts from "./TemplateScripts";

export const metadata: Metadata = {
  title: "Adesco Western Ranch Ltd. - Organic Farm Agriculture",
  description: "Adesco Western Ranch Ltd. - Organic Farm Agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet" />

        {/* ── Favicon ── */}
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />

        {/* ── Template CSS (same order as index.html) ── */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/themify-icons.css" />
        <link rel="stylesheet" href="/assets/css/elegant-icons.css" />
        <link rel="stylesheet" href="/assets/css/flaticon-set.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/validnavs.css" />
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/unit-test.css" />
      </head>
      <body>
        <SiteShell>
          {children}
        </SiteShell>
        {/* jQuery + Bootstrap always load (library only, no DOM init) */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        {/* Template plugins — skipped on admin pages */}
        <TemplateScripts />
      </body>
    </html>
  );
}
