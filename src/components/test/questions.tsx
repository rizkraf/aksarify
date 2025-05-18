import type { Question } from "@prisma/client";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface TestQuestionsProps {
  currentQuestion: number;
  totalQuestions: number;
  questions: Question[];
  answers: string[];
  handleAnswerSelect: (value: string) => void;
  handleNextQuestion: () => void;
  handlePrevQuestion: () => void;
  isLoading: boolean;
}

export default function TestQuestions({
  currentQuestion,
  totalQuestions,
  questions,
  answers,
  handleAnswerSelect,
  handleNextQuestion,
  handlePrevQuestion,
  isLoading,
}: TestQuestionsProps) {
  const buttonText = isLoading
    ? "Memproses hasil..."
    : currentQuestion < totalQuestions - 1
      ? "Next"
      : "Finish";

  return (
    <Card className="w-full max-w-3xl shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Pertanyaan Pemahaman</CardTitle>
        <CardDescription>
          Pilih jawaban yang paling tepat untuk setiap pertanyaan di bawah ini.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Progress
            value={((currentQuestion + 1) / totalQuestions) * 100}
            className="h-2"
          />
          <p className="text-muted-foreground mt-2 text-sm">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            {questions[currentQuestion]?.prompt}
          </h3>
          <RadioGroup
            value={answers[currentQuestion] ?? ""}
            onValueChange={handleAnswerSelect}
            className="space-y-2"
          >
            {(questions[currentQuestion]?.options
              ? typeof questions[currentQuestion].options === "string"
                ? (JSON.parse(questions[currentQuestion].options) as string[])
                : (questions[currentQuestion].options as string[])
              : []
            ).map((option: string, index: number) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-md border p-3 ${
                  answers[currentQuestion] === option
                    ? "border-teal-500 bg-teal-50"
                    : ""
                }`}
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
          className="shadow-none"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextQuestion}
          disabled={!answers[currentQuestion] || isLoading}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
