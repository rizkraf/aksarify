import type { Metadata } from "next";
import TestStart from "@/components/test/start";

export const metadata: Metadata = {
  title: "Tes Pemahaman Bacaan | Aksarify",
  description:
    "Uji dan tingkatkan kemampuan membaca bahasa Indonesia Anda melalui tes interaktif. Ukur kecepatan membaca dan pemahaman dalam hitungan menit.",
  keywords: [
    "tes pemahaman bacaan",
    "ukur kecepatan membaca",
    "literasi bahasa indonesia",
    "quiz membaca",
  ],
  openGraph: {
    title: "Tes Pemahaman Bacaan | Aksarify",
    description:
      "Uji dan tingkatkan kemampuan membaca bahasa Indonesia dengan tes interaktif yang menyenangkan.",
    url: "https://aksarify.xyz/test",
    siteName: "Aksarify",
    locale: "id_ID",
    type: "website",
  },
};

export default function TestPage() {
  return (
    <>
      <div className="bg-background relative flex min-h-svh flex-col">
        <main className="flex-1">
          <div className="mx-auto flex min-h-svh items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">
              <h1 className="mb-8 text-center text-3xl font-bold">
                Memulai Tes
              </h1>
              <TestStart />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
