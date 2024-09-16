import type { Metadata } from "next";
import { Oswald, Gabriela, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Restaurant-01/header/Header";
import Footer from "@/components/Restaurant-01/footer/Footer";
import LowerFoot from "@/components/Restaurant-01/lowerFooter/LowerFoot";
import { googleAnalyticsId } from "../../Control/controls";
import { Analytics } from "@vercel/analytics/react";

//fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font1",
});

const gabriola = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font3",
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
        className={` ${inter.className} ${oswald.variable}  ${greatVibes.variable} ${gabriola.variable}   `}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
        <LowerFoot />
      </body>
    </html>
  );
}
