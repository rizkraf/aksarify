const displaySkill = (skill?: string): string => {
  if (!skill) return "";
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

const formatOptionLabel = (
  index?: number | null,
  options?: unknown,
): string => {
  const idx = typeof index === "number" ? index : 0;
  const opt = Array.isArray(options) ? (options[idx] as string) : "No answer";
  return `${String.fromCharCode(65 + idx)}. ${opt}`;
};

export type AnswerItemProps = {
  index: number;
  isCorrect?: boolean;
  correctAnswer?: number | null;
  userAnswer?: number | null;
  options?: unknown;
  skill?: string;
};

export const AnswerItem = ({
  index,
  isCorrect,
  correctAnswer,
  userAnswer,
  options,
  skill,
}: AnswerItemProps) => (
  <div className="rounded-md border p-3">
    <div className="flex items-center justify-between">
      <div className="font-medium">Pertanyaan {index + 1}</div>
      <div
        className={`rounded-md px-2 py-1 text-xs font-medium ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
      >
        {isCorrect ? "Benar" : "Salah"}
      </div>
    </div>
    <div className="mt-2 grid gap-2 text-sm">
      <div className="flex items-start">
        <span className="mr-2 font-medium">Jawaban Benar:</span>
        <span>{formatOptionLabel(correctAnswer, options)}</span>
      </div>
      <div className="flex items-start">
        <span className="mr-2 font-medium">Jawaban Kamu:</span>
        <span className={isCorrect ? "text-green-600" : "text-red-600"}>
          {formatOptionLabel(userAnswer, options)}
        </span>
      </div>
      {skill && (
        <div className="flex items-start">
          <span className="mr-2 font-medium">Keterampilan:</span>
          <span className="text-blue-600">{displaySkill(skill)}</span>
        </div>
      )}
    </div>
  </div>
);
