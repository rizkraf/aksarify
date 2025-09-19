import { Skeleton } from "../ui/skeleton";

export type StatCardProps = {
  title: string;
  value: string | number | undefined | null;
  isLoading?: boolean;
};

export const StatCard = ({ title, value, isLoading }: StatCardProps) => (
  <div className="rounded-lg border p-4 text-center">
    <h3 className="text-muted-foreground text-sm font-medium">{title}</h3>
    {isLoading ? (
      <Skeleton className="mx-auto mt-2 h-8 w-24" />
    ) : (
      <p className="mt-2 text-3xl font-bold text-teal-600">{value}</p>
    )}
  </div>
);