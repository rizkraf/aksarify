"use client";

import { useSessionManager } from "@/hooks/use-session-manager";
import { api } from "@/trpc/react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function TestStart() {
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
    <Card className="mx-auto max-w-xl shadow-none">
      <CardContent className="space-y-4">
        <p className="text-gray-600">
          Saat Anda memulai tes, sebuah sesi baru akan dibuat dan disimpan di
          perangkat Anda. Jika Anda sudah memiliki sesi aktif, Anda akan
          diarahkan ke sesi tersebut.
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
  );
}
