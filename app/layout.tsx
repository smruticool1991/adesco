import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        {children}
        <Footer />
        {/* ── Scripts (same order as index.html) ── */}
        {/* jQuery and Bootstrap must load first */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

        {/* All other plugins load after page is interactive */}
        <Script src="/assets/js/jquery.appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/modernizr.custom.13711.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/progress-bar.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/circle-progress.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/count-to.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.scrolla.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/TweenMax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/validnavs.js" strategy="afterInteractive" />
        {/* main.js must be last — initializes all plugins */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
