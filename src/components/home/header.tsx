import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
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
  );
}
