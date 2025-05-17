"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/trpc/react";
import { useSessionManager } from "@/hooks/use-session-manager";

export default function TestPage() {
  const {
    isLoading: sessionLoading,
    redirectToSession,
    redirectToExistingSession,
  } = useSessionManager();
  const [isCreating, setIsCreating] = useState(false);

  const createSession = api.session.create.useMutation({
    onSuccess: (data) => {
      redirectToSession(data.id);
    },
    onError: (error) => {
      console.error("Error creating session:", error);
      setIsCreating(false);
    },
  });

  useEffect(() => {
    redirectToExistingSession();
  }, [redirectToExistingSession]);

  const handleStartTest = () => {
    setIsCreating(true);
    createSession.mutate();
  };

  const isButtonDisabled = sessionLoading || isCreating;
  const buttonText = isCreating
    ? "Mempersiapkan tes..."
    : sessionLoading
      ? "Memeriksa sesi..."
      : "Mulai Tes Sekarang";

  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <main className="flex-1">
        <div className="mx-auto flex min-h-svh items-center justify-center py-12">
          <div className="w-full max-w-2xl">
            <h1 className="mb-8 text-center text-3xl font-bold">Memulai Tes</h1>
            <Card className="mx-auto max-w-xl shadow-none">
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Saat Anda memulai tes, sebuah sesi baru akan dibuat dan
                  disimpan di perangkat Anda. Jika Anda sudah memiliki sesi
                  aktif, Anda akan diarahkan ke sesi tersebut.
                </p>
                <Button
                  onClick={handleStartTest}
                  className="w-full"
                  size="lg"
                  disabled={isButtonDisabled}
                >
                  {buttonText}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
