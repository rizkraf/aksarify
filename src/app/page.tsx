import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
      <h1 className="text-primary-foreground scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hello Aksarify!
      </h1>
      <Button>Click Me</Button>
    </main>
  );
}
