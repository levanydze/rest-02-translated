import type { Metadata } from "next";
import { Paytone_One, Mulish, Roboto } from "next/font/google";
import Header from "@/Restaurant-02/components/header/Header";
import { googleAnalyticsId } from "@/Control/controls";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

//fonts
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font1",
});
const paytone = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

// SEO Metadata and title tags
import { companyDomain, googleVerification } from "../../Control/controls";
import Script from "next/script";
import { mainMetadata } from "@/Control/navigation";
// import Divider from "@/components/miniComponents/Divider/Divider";
export const metadata: Metadata = {
  metadataBase: new URL(companyDomain),
  title: {
    // absolute: "", // If I write absolute title it will ignore template title
    default: `${mainMetadata.title}`, // Corrected usage of template literal
    template: `%s | ${mainMetadata.title}`, // Corrected usage of template literal
  },
  description: `${mainMetadata.description}`,
  verification: {
    google: `${googleVerification}`,
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* //google translate */}
        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
        {/* //analitycs */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?${googleAnalyticsId}`}
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}');`}
        </Script>
      </head>
      <body
        className={` ${mulish.className} ${roboto.variable}  ${paytone.variable}   `}
      >
        <div id="google_translate_element"></div>

        <Header />
        {children}
        <Analytics />
        {/* <Footer /> */}
        {/* <LowerFoot /> */}
      </body>
    </html>
  );
}
