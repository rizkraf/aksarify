import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TestReadingProps {
  passage: {
    id: string;
    title: string;
    body: string;
    level: string;
  };
  handleFinishReading: () => void;
}

export default function TestReading({
  passage,
  handleFinishReading,
}: TestReadingProps) {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{passage.title}</CardTitle>
        <CardDescription>{passage.level}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border p-4">
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {passage.body}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleFinishReading} className="w-full">
          Selesai
        </Button>
      </CardFooter>
    </Card>
  );
}
