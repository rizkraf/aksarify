import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TestInstructionsProps {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  handleStartReading: () => void;
  isLoading: boolean;
}

export default function TestInstructions({
  difficulty,
  setDifficulty,
  handleStartReading,
  isLoading,
}: TestInstructionsProps) {
  const buttonText = isLoading ? "Mempersiapkan teks..." : "Mulai Membaca";

  return (
    <Card className="w-full max-w-3xl shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Test Pemahaman Membaca</CardTitle>
        <CardDescription>
          Pilih tingkat kesulitan, baca teksnya, lalu ukur seberapa paham kamu.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium">Pilih Tingkat Kesulitan</h3>
          <Tabs
            value={difficulty}
            onValueChange={setDifficulty}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 bg-transparent">
              <TabsTrigger
                value="mudah"
                className="data-[state=active]:bg-primary data-[state=active]:shadow-none"
              >
                Mudah
              </TabsTrigger>
              <TabsTrigger
                value="menengah"
                className="data-[state=active]:bg-primary data-[state=active]:shadow-none"
              >
                Menengah
              </TabsTrigger>
              <TabsTrigger
                value="sulit"
                className="data-[state=active]:bg-primary data-[state=active]:shadow-none"
              >
                Sulit
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mudah" className="mt-4">
              <p>
                Teks pendek dengan kosakata dasar. Cocok untuk pemula atau
                pemanasan cepat.
              </p>
            </TabsContent>
            <TabsContent value="menengah" className="mt-4">
              <p>
                Struktur kalimat lebih kompleks dan beberapa istilah baru—pas
                untuk yang ingin naik level.
              </p>
            </TabsContent>
            <TabsContent value="sulit" className="mt-4">
              <p>
                Paragraf panjang, konsep abstrak, dan istilah teknis. Tantangan
                maksimal untuk pembaca andal.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            📖
            <div>
              <h4 className="font-medium">Fase Membaca</h4>
              <p className="text-muted-foreground text-sm">
                Kamu akan melihat satu teks berbahasa Indonesia. Baca perlahan
                atau cepat—sesuai ritmemu.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>⏱️</TooltipTrigger>
                <TooltipContent>
                  <p>
                    Waktu bacamu tercatat otomatis—tak perlu menekan apa pun.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div>
              <h4 className="font-medium">Pencatatan Waktu</h4>
              <p className="text-muted-foreground text-sm">
                Timer mulai otomatis begitu teks tampil. Kami memakai durasi ini
                untuk menghitung kecepatan bacamu (WPM).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            📝
            <div>
              <h4 className="font-medium">Pertanyaan Pemahaman</h4>
              <p className="text-muted-foreground text-sm">
                Setelah selesai membaca, jawab 5 soal pilihan ganda untuk
                mengukur seberapa dalam pemahamanmu.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={handleStartReading} className="w-full" disabled={isLoading}>
                {buttonText}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Siap? Tekan tombol ini untuk mulai membaca teks.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
