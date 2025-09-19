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
import { StatCard } from "./stat-card";
import { PassageAccordion } from "./passage-accordion";
import { AnswerItem } from "./answer-item";

interface ResultIndexProps {
  id: string;
}

const formatDuration = (seconds?: number | null): string => {
  if (!seconds || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

export default function ResultIndex({ id }: ResultIndexProps) {
  const { data, isFetching } = api.attempt.getAttemptById.useQuery({
    id,
  });

  const totalQuestions = data?.passage?.questions.length ?? 0;

  return (
    <Card className="w-full max-w-3xl shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Hasil Tes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          <StatCard
            title="Waktu Membaca"
            value={formatDuration(data?.readingTime)}
            isLoading={isFetching}
          />
          <StatCard
            title="Kata Per Menit"
            value={`${data?.wordPerMinute ?? 0} wpm`}
            isLoading={isFetching}
          />
          <StatCard
            title="Jawaban Benar"
            value={`${data?.correctAnswers ?? 0}/${totalQuestions}`}
            isLoading={isFetching}
          />
          <StatCard
            title="Skor Pemahaman"
            value={`${data?.comprehensionScore ?? 0}%`}
            isLoading={isFetching}
          />
        </div>
        <PassageAccordion body={data?.passage?.body} isLoading={isFetching} />
        <div className="mt-6">
          <h3 className="mb-4 font-medium">Analisis Jawaban</h3>
          {isFetching ? (
            <Skeleton className="mx-auto h-24 w-full" />
          ) : (
            <div className="space-y-3">
              {data?.answerDifference?.map((answer, index) => (
                <AnswerItem
                  key={answer?.questionId ?? index}
                  index={index}
                  isCorrect={answer?.isCorrect}
                  correctAnswer={answer?.correctAnswer}
                  userAnswer={answer?.userAnswer}
                  options={answer?.options}
                  skill={answer?.skill as string}
                />
              ))}
            </div>
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
