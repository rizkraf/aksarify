"use client";

import { useMemo, useState } from "react";
import TestInstructions from "./instructions";
import { api } from "@/trpc/react";
import TestReading from "./reading";
import type { Question } from "@prisma/client";
import TestQuestions from "./questions";
import { useRouter } from "next/navigation";

interface TestIndexProps {
  id: string;
}

export default function TestIndex({ id }: TestIndexProps) {
  const utils = api.useUtils();
  const router = useRouter();

  const [difficulty, setDifficulty] = useState("mudah");
  const [stage, setStage] = useState("instructions"); // instructions, reading, questions
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [passage, setPassage] = useState({
    id: "",
    title: "",
    body: "",
    level: "",
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionsLength = useMemo(() => {
    return questions.length;
  }, [questions]);

  const getPassage = api.passage.getPassageByDifficulty.useMutation({
    onSuccess: async (data) => {
      await utils.passage.invalidate();
      setPassage({
        id: data?.id ?? "",
        title: data?.title ?? "",
        body: data?.body ?? "",
        level: data?.level ?? "",
      });
      setStage("reading");
      setStartTime(Math.floor(Date.now() / 1000));
    },
  });

  const getQuestions = api.question.getQuestionByPassage.useMutation({
    onSuccess: async (data) => {
      await utils.question.invalidate();
      setEndTime(Math.floor(Date.now() / 1000));
      setQuestions(data ?? []);
      setStage("questions");
      setCurrentQuestion(0);
    },
  });

  const createAttempt = api.attempt.creatAttempyByPassage.useMutation({
    onSuccess: async (data) => {
      await utils.attempt.invalidate();
      router.push(`/result/${data.id}`);
    },
  });

  const handleStartReading = () => {
    getPassage.mutate({ difficulty });
  };

  const handleFinishReading = () => {
    getQuestions.mutate({ passageId: passage.id });
  };

  const handleAnswerSelect = (value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      createAttempt.mutate({
        answers,
        startTime,
        endTime,
        passageId: passage.id,
        sessionId: id,
      });
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderStage = () => {
    switch (stage) {
      case "instructions":
        return (
          <TestInstructions
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            handleStartReading={handleStartReading}
          />
        );

      case "reading":
        return (
          <TestReading
            passage={passage}
            handleFinishReading={handleFinishReading}
          />
        );

      case "questions":
        return (
          <TestQuestions
            answers={answers}
            currentQuestion={currentQuestion}
            handleAnswerSelect={handleAnswerSelect}
            handleNextQuestion={handleNextQuestion}
            handlePrevQuestion={handlePrevQuestion}
            questions={questions}
            totalQuestions={questionsLength}
          />
        );

      default:
        return null;
    }
  };

  return renderStage();
}
