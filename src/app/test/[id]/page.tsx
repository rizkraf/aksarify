import TestIndex from "@/components/test";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

interface TestIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: "Tes Pemahaman Bacaan | Aksarify",
  description:
    "Uji kemampuan membaca dan pemahaman Bahasa Indonesia Anda dengan tes interaktif. Dapatkan hasil instan dan rekomendasi untuk peningkatan.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function TestIdPage({ params }: TestIdPageProps) {
  const { id } = await params;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tes Pemahaman Bacaan | Aksarify",
    description: "Halaman tes pemahaman bacaan interaktif Bahasa Indonesia",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://aksarify.xyz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tes Pemahaman Bacaan",
          item: `https://aksarify.xyz/test/${id}`,
        },
      ],
    },
  };

  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <Script
        id="test-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <Button variant="ghost" asChild>
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Kembali ke beranda Aksarify"
            >
              <IconArrowLeft size={16} />
              <span className="text-sm font-medium">Kembali ke beranda</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto flex min-h-svh max-w-7xl items-center justify-center py-24 px-4">
          <TestIndex id={id} />
        </div>
      </main>
    </div>
  );
}
