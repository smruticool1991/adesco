'use client'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function TemplateScripts() {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) return null

  return (
    <>
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
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  )
}
