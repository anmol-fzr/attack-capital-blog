import { LoadingPostList, MyPostList, Link, PageHeader } from "@/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-page flex flex-col">
      <div className="flex items-start justify-between">
        <PageHeader title="My Blogs" desc="See all your published posts here" />
        <Link href="/new" variant="default">
          Add New Post
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <Suspense fallback={<LoadingPostList />}>
          <MyPostList />
        </Suspense>
      </div>
    </div>
  );
}
