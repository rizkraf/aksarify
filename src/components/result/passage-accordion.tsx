import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Skeleton } from "../ui/skeleton";

export type PassageAccordionProps = { body?: string | null; isLoading?: boolean };
export const PassageAccordion = ({ body, isLoading }: PassageAccordionProps) => (
  <div className="mt-6">
    {isLoading ? (
      <Skeleton className="mx-auto h-32 w-full" />
    ) : (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="passage-text">
          <AccordionTrigger>Lihat Teks yang Telah Dibaca</AccordionTrigger>
          <AccordionContent>
            <div className="rounded-lg border bg-gray-50/50 p-4">
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
                {body ?? "Teks tidak tersedia"}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )}
  </div>
);