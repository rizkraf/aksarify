import Script from "next/script";

export default function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://aksarify.com",
    "name": "Aksarify",
    "description": "Platform uji dan tingkatkan kemampuan pemahaman bacaan Bahasa Indonesia",
    "sameAs": ["https://facebook.com/aksarify", "https://twitter.com/aksarify", "https://instagram.com/aksarify"],
    "logo": "https://aksarify.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@aksarify.com"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu Aksarify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aksarify adalah platform yang dirancang untuk membantu mengukur dan meningkatkan pemahaman bacaan Bahasa Indonesia."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu tes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Satu tes hanya membutuhkan beberapa menit. Tes terdiri dari satu teks sekitar 200 kata dan 5 soal pilihan ganda."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah Aksarify gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, Aksarify menyediakan tes pemahaman bacaan secara gratis untuk semua pengguna."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
