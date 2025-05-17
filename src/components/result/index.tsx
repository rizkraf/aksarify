"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/trpc/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface ResultIndexProps {
  id: string;
}

export default function ResultIndex({ id }: ResultIndexProps) {
  const { data, isFetching } = api.attempt.getAttemptById.useQuery({
    id,
  });

  return (
    <Card className="w-full max-w-3xl shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Hasil Tes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-4 text-center">
            <h3 className="text-muted-foreground text-sm font-medium">
              Waktu Membaca
            </h3>
            {isFetching ? (
              <Skeleton className="mx-auto mt-2 h-8 w-24" />
            ) : (
              <p className="mt-2 text-3xl font-bold text-teal-600">
                {data?.readingTime
                  ? `${Math.floor(data.readingTime / 360)
                      .toString()
                      .padStart(
                        2,
                        "0",
                      )}:${(data.readingTime % 360).toString().padStart(2, "0")}`
                  : "00:00"}
              </p>
            )}
          </div>
          <div className="rounded-lg border p-4 text-center">
            <h3 className="text-muted-foreground text-sm font-medium">
              Kata Per Menit
            </h3>
            {isFetching ? (
              <Skeleton className="mx-auto mt-2 h-8 w-24" />
            ) : (
              <p className="mt-2 text-3xl font-bold text-teal-600">
                {data?.wordPerMinute} wpm
              </p>
            )}
          </div>
          <div className="rounded-lg border p-4 text-center">
            <h3 className="text-muted-foreground text-sm font-medium">
              Jawaban Benar
            </h3>
            {isFetching ? (
              <Skeleton className="mx-auto mt-2 h-8 w-24" />
            ) : (
              <p className="mt-2 text-3xl font-bold text-teal-600">
                {data?.correctAnswers}/{data?.passage?.questions.length ?? 0}
              </p>
            )}
          </div>
          <div className="rounded-lg border p-4 text-center">
            <h3 className="text-muted-foreground text-sm font-medium">
              Skor Pemahaman
            </h3>
            {isFetching ? (
              <Skeleton className="mx-auto mt-2 h-8 w-24" />
            ) : (
              <p className="mt-2 text-3xl font-bold text-teal-600">
                {data?.comprehensionScore}%
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Analisis Performa</h3>
          {isFetching ? (
            <Skeleton className="mx-auto h-4 w-full" />
          ) : (data?.comprehensionScore ?? 0) >= 80 ? (
            <p className="text-muted-foreground text-sm">
              Kerja bagus! kamu memiliki pemahaman yang sangat baik tentang teks
              bahasa Indonesia tingkat.
            </p>
          ) : (data?.comprehensionScore ?? 0) >= 60 ? (
            <p className="text-muted-foreground text-sm">
              Kamu memiliki pemahaman yang baik tentang teks bahasa Indonesia
              tingkat.
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">
              Kamu perlu meningkatkan pemahamanmu tentang teks bahasa Indonesia
              tingkat.
            </p>
          )}
          <h3 className="mt-4 mb-2 font-medium">Kecepatan Membaca</h3>
          {isFetching ? (
            <Skeleton className="mx-auto h-4 w-full" />
          ) : (data?.readingTime ?? 0) < 30 ? (
            <p className="text-muted-foreground text-sm">
              Kecepatan membacamu sangat cepat. Pastikan kamu memahami apa yang
              kamu baca.
            </p>
          ) : (data?.readingTime ?? 0) < 60 ? (
            <p className="text-muted-foreground text-sm">
              Kecepatan membacamu baik, menyeimbangkan antara kecepatan dan
              pemahaman.
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">
              Membacamu teliti dan menyeluruh, yang bagus untuk pemahaman.
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Button variant="outline" asChild className="shadow-none">
          <Link href={`/test/${data?.sessionId}`}>Ulangi Tes</Link>
        </Button>
        <Button asChild>
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
