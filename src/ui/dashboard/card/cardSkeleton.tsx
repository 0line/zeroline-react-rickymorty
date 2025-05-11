import { Card, CardContent } from "@/components/card";
import { Skeleton } from "@/components/skeleton";


export function CardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="w-full aspect-square" />
      <CardContent className="p-4">
        <Skeleton className="h-2 w-12 rounded-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </CardContent>
    </Card>
  );
}