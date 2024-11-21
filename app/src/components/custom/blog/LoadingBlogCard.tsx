import { CardContent, Separator, Skeleton } from "@/components";

export function LoadingBlogCard() {
  return (
    <>
      <div className="pt-6">
        <CardContent className="flex-1">
          <div className="space-y-2">
            <div className="space-y-3">
              <Skeleton className="!h-8 w-96" />
              <Skeleton className="!h-4 w-48" />
            </div>
            <p className="space-y-1 mt-2">
              <Skeleton className="!h-4 w-full" />
              <Skeleton className="!h-4 w-7/12" />
            </p>
          </div>
        </CardContent>
        <Separator className="-mt-2" />
      </div>
    </>
  );
}
