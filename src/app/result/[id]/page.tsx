import ResultIndex from "@/components/result";
import Script from "next/script";

interface ResultIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ResultIdPage({ params }: ResultIdPageProps) {
  const { id } = await params;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hasil Tes Pemahaman Bacaan | Aksarify",
    "description": "Hasil tes pemahaman bacaan dengan metrik tentang kecepatan membaca dan tingkat pemahaman.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Beranda",
          "item": "https://aksarify.xyz"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hasil Tes",
          "item": `https://aksarify.xyz/result/${id}`
        }
      ]
    }
  };

  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <Script
        id="result-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">
        <div className="mx-auto flex min-h-svh max-w-7xl items-center justify-center py-12">
          <ResultIndex id={id} />
        </div>
      </main>
    </div>
  );
}
