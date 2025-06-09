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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface ResultIndexProps {
  id: string;
}

const renderSkillName = (skill: string): string => {
  switch (skill) {
    case "ide_pokok":
      return "Menemukan Ide Pokok";
    case "detail":
      return "Memahami Detail";
    case "inferensi":
      return "Membuat Inferensi";
    default:
      return skill;
  }
};

export default function ResultIndex({ id }: ResultIndexProps) {
  const { data, isFetching } = api.attempt.getAttemptById.useQuery({
    id,
  });

  console.log(data);

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
                  ? `${Math.floor(data.readingTime / 60)
                      .toString()
                      .padStart(
                        2,
                        "0",
                      )}:${(data.readingTime % 60).toString().padStart(2, "0")}`
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
        <div className="mt-6">
          {isFetching ? (
            <Skeleton className="mx-auto h-32 w-full" />
          ) : (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="passage-text">
                <AccordionTrigger>
                  Lihat Teks yang Telah Dibaca
                </AccordionTrigger>
                <AccordionContent>
                  <div className="rounded-lg border bg-gray-50/50 p-4">
                    <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
                      {data?.passage?.body ?? "Teks tidak tersedia"}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
        <div className="mt-6">
          <h3 className="mb-4 font-medium">Analisis Jawaban</h3>
          {isFetching ? (
            <Skeleton className="mx-auto h-24 w-full" />
          ) : (
            <div className="space-y-3">
              {data?.answerDifference?.map((answer, index) => (
                <div key={answer?.questionId} className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Pertanyaan {index + 1}</div>
                    <div
                      className={`rounded-md px-2 py-1 text-xs font-medium ${answer?.isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {answer?.isCorrect ? "Benar" : "Salah"}
                    </div>
                  </div>
                  <div className="mt-2 grid gap-2 text-sm">
                    <div className="flex items-start">
                      <span className="mr-2 font-medium">Jawaban Benar:</span>
                      <span>
                        {`${String.fromCharCode(65 + (answer?.correctAnswer ?? 0))}. ${
                          Array.isArray(answer?.options)
                            ? (answer?.options[
                                answer?.correctAnswer ?? 0
                              ] as string)
                            : "No answer"
                        }`}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 font-medium">Jawaban Kamu:</span>
                      <span
                        className={
                          answer?.isCorrect ? "text-green-600" : "text-red-600"
                        }
                      >
                        {`${String.fromCharCode(65 + (answer?.userAnswer ?? 0))}. ${
                          Array.isArray(answer?.options)
                            ? (answer?.options[
                                answer?.userAnswer ?? 0
                              ] as string)
                            : "No answer"
                        }`}
                      </span>
                    </div>
                    {answer?.skill && (
                      <div className="flex items-start">
                        <span className="mr-2 font-medium">Keterampilan:</span>
                        <span className="text-blue-600">
                          {renderSkillName(answer.skill)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
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
