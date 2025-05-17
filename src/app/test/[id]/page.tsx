import TestIndex from "@/components/test";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface TestIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TestIdPage({ params }: TestIdPageProps) {
  const { id } = await params;

  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <IconArrowLeft size={16} />
              <span className="text-sm font-medium">Kembali ke beranda</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto flex min-h-svh max-w-7xl items-center justify-center py-12">
          <TestIndex id={id} />
        </div>
      </main>
    </div>
  );
}
