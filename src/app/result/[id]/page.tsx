import ResultIndex from "@/components/result";

interface ResultIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ResultIdPage({ params }: ResultIdPageProps) {
  const { id } = await params;

  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <main className="flex-1">
        <div className="mx-auto flex min-h-svh max-w-7xl items-center justify-center py-12 px-4">
          <ResultIndex id={id} />
        </div>
      </main>
    </div>
  );
}
