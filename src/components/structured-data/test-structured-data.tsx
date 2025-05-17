import Script from "next/script";

export default function TestStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Aksarify Tes Pemahaman Bacaan",
    applicationCategory: "EducationalApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
    },
    operatingSystem: "All",
    description:
      "Aplikasi tes pemahaman bacaan Bahasa Indonesia dengan metode efektif dan menyenangkan",
  };

  return (
    <Script
      id="test-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
