import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aksarify - Uji Pemahaman Bacamu Dalam Hitungan Menit",
  description:
    "Platform tes pemahaman bacaan Bahasa Indonesia dengan metode efektif dan menyenangkan. Tingkatkan literasi membacamu dalam hitungan menit dengan Aksarify.",
};

export default function Home() {
  return (
    <>
      <div className="bg-background relative flex min-h-svh flex-col">
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <Link href="/" aria-label="Aksarify Beranda">
                <h1 className="text-2xl font-bold">Aksarify</h1>
              </Link>
            </div>
            <nav
              className="flex items-center space-x-4"
              aria-label="Navigasi utama"
            >
              <Button asChild>
                <Link href="/test" aria-label="Mulai tes pemahaman bacaan">
                  Mulai Tes
                </Link>
              </Button>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col p-4">
            <section id="hero" className="relative pt-24 md:pt-32">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="max-w-4xl scroll-m-20 text-4xl font-medium tracking-tight md:text-5xl lg:text-7xl">
                  Uji Pemahaman Bacamu{" "}
                  <span className="text-primary">Dalam Hitungan menit!</span>
                </h2>
                <p className="text-muted-foreground mt-6 max-w-2xl text-lg text-balance md:text-xl">
                  Aksarify adalah platform interaktif yang dirancang khusus
                  untuk membantu kamu mengukur dan meningkatkan kemampuan
                  pemahaman bacaan Bahasa Indonesia.
                </p>
                <Button asChild size="lg" className="mt-12 font-semibold">
                  <Link href="/test">Mulai Tes Gratis</Link>
                </Button>
              </div>
              <div className="mx-auto mt-16 w-full max-w-7xl">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src="/website-preview.png"
                    alt="Tampilan platform Aksarify untuk tes pemahaman bacaan Bahasa Indonesia"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
            </section>
            <section id="problem-solution" className="relative pt-24 md:pt-32">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Tantangan Pemahaman Bacaan di Era Digital
                  </h2>
                  <p className="text-muted-foreground text-base text-balance md:text-lg">
                    Indonesia masih tertinggal dalam hal pemahaman bacaan. Tiga
                    angka di bawah ini memperlihatkan betapa seriusnya masalah
                    ini:
                  </p>
                  <ul className="text-muted-foreground space-y-5 text-sm md:text-base">
                    <li className="flex gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-600">
                        !
                      </div>
                      <span className="max-w-[80%]">
                        Skor PISA 2022 kita hanya 359—terpaut 117 poin di bawah
                        rata-rata OECD (476).
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-600">
                        !
                      </div>
                      <span className="max-w-[80%]">
                        1 dari 2 siswa belum mencapai kompetensi literasi
                        minimum menurut Asesmen Nasional 2021.{" "}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-600">
                        !
                      </div>
                      <span className="max-w-[80%]">
                        Minat baca masyarakat tercatat 0,001 %; artinya hanya 1
                        dari 1 000 orang yang gemar membaca.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Tingkatkan Kemampuan Baca dengan Aksarify
                  </h2>
                  <p className="text-muted-foreground text-base text-balance md:text-lg">
                    Aksarify membuat latihan super ringan yang bisa dipakai
                    siapa saja, kapan saja untuk meningkatkan kemampuan membaca:
                  </p>
                  <ul className="text-muted-foreground space-y-5 text-sm md:text-base">
                    <li className="flex gap-2">
                      <div className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full">
                        ✓
                      </div>
                      <span className="max-w-[80%]">
                        Tes hanya beberapa menit—satu teks ±200 kata + 5 soal
                        pilihan ganda tergantung kesulitan.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full">
                        ✓
                      </div>
                      <span className="max-w-[80%]">
                        Skor & pembahasan instan—begitu klik Kirim, kamu
                        langsung tahu di mana letak salahmu
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full">
                        ✓
                      </div>
                      <span className="max-w-[80%]">
                        Bacaan yang variatif—konten berubah setiap kali kamu
                        mengerjakan tes, jadi tidak ada yang namanya jenuh!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section
              id="how-it-works"
              className="bg-secondary/5 relative pt-24 md:pt-32"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="mb-12 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
                  Tiga Langkah Mudah untuk Meningkatkan Kemampuan Membaca
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold">
                      1
                    </div>
                    <h3 className="mb-2 text-lg font-bold md:text-xl">
                      Baca Teks
                    </h3>
                    <p className="text-muted-foreground">
                      Baca teks yang disajikan dengan seksama. Teks akan
                      bervariasi setiap kali kamu mengerjakan tes.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold">
                      2
                    </div>
                    <h3 className="mb-2 text-lg font-bold md:text-xl">
                      Jawab 5 Soal
                    </h3>
                    <p className="text-muted-foreground">
                      Jawab 5 soal pilihan ganda yang menguji pemahamanmu
                      terhadap teks yang telah dibaca.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold">
                      3
                    </div>
                    <h3 className="mb-2 text-lg font-bold md:text-xl">
                      Lihat Hasil dan Pembahasan
                    </h3>
                    <p className="text-muted-foreground">
                      Hasil muncul seketika; ulangi kapan saja untuk terus
                      mengasah kemampuan membaca kamu.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="key-features" className="relative pt-24 md:pt-32">
              <div className="flex flex-col items-center text-center">
                <h2 className="mb-12 max-w-2xl text-2xl font-bold tracking-tight md:text-4xl">
                  Fitur Unggulan yang bikin kamu betah berlatih
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-none">
                  <CardHeader>
                    <div className="text-primary mb-4 text-2xl md:text-3xl">
                      ⏱️
                    </div>
                    <CardTitle>Tes Kilat Hanya Hitungan Menit</CardTitle>
                    <CardDescription>
                      Satu teks & lima soal, cukup untuk mengukur pemahamanmu
                      terhadap bacaan.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="shadow-none">
                  <CardHeader>
                    <div className="text-primary mb-4 text-2xl md:text-3xl">
                      ✅
                    </div>
                    <CardTitle>Skor Instan</CardTitle>
                    <CardDescription>
                      Klik Kirim dan langsung lihat jawaban benar-salah plus
                      tips singkat.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="shadow-none">
                  <CardHeader>
                    <div className="text-primary mb-4 text-2xl md:text-3xl">
                      📚
                    </div>
                    <CardTitle>Bacaan Yang Variatif</CardTitle>
                    <CardDescription>
                      Koleksi bacaan dengan tingkat kesulitan dan topik yang
                      berbeda agar kamu tidak bosan.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>
            <section
              id="cta"
              className="bg-primary/5 relative my-24 rounded-2xl p-12 text-center md:my-32"
            >
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
                  Siap Tingkatkan Pemahaman Bacamu?
                </h2>
                <p className="text-muted-foreground mb-8 text-base md:text-lg">
                  Mulai beberapa menit untuk tes pertamamu.
                </p>
                <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="font-semibold">
                    <Link href="/test">Mulai Tes Gratis</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="border-t py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Aksarify. Hak cipta dilindungi.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
