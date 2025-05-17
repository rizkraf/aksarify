import "@/styles/globals.css";

import { type Metadata } from "next";
import { Outfit } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Aksarify - Platform Uji dan Tingkatkan Pemahaman Bacaan Bahasa Indonesia",
  description: "Aksarify adalah platform latihan pemahaman bacaan Bahasa Indonesia dengan tes kilat dan pembahasan instan untuk meningkatkan literasi membaca dalam hitungan menit.",
  keywords: ["pemahaman bacaan", "literasi bahasa indonesia", "tes membaca", "latihan membaca", "kecepatan membaca", "aplikasi literasi"],
  authors: [{ name: "Aksarify" }],
  creator: "Aksarify",
  publisher: "Aksarify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aksarify.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aksarify - Platform Uji dan Tingkatkan Pemahaman Bacaan Bahasa Indonesia",
    description: "Latih dan tingkatkan kemampuan membacamu dengan tes-tes kilat yang menyenangkan dan pembahasan instan.",
    url: "https://aksarify.xyz",
    siteName: "Aksarify",
    images: [
      {
        url: "https://aksarify.xyz/website-preview.png",
        width: 1200,
        height: 630,
        alt: "Aksarify - Platform Uji Pemahaman Bacaan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aksarify - Platform Uji dan Tingkatkan Pemahaman Bacaan Bahasa Indonesia",
    description: "Latih dan tingkatkan kemampuan membacamu dengan tes-tes kilat yang menyenangkan dan pembahasan instan.",
    images: ["https://aksarify.xyz/website-preview.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://aksarify.xyz/",
              "name": "Aksarify",
              "description": "Platform tes pemahaman bacaan Bahasa Indonesia dengan metode efektif",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://aksarify.xyz/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://aksarify.xyz",
              "logo": "https://aksarify.xyz/logo.png",
              "name": "Aksarify",
              "description": "Platform tes pemahaman bacaan Bahasa Indonesia dengan metode efektif dan menyenangkan"
            })
          }}
        />
      </head>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
