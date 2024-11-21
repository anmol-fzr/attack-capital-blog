import {
  LoadingPostList,
  MyPostList,
  LoginProtected,
  Link,
  PageHeader,
} from "@/components";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      <div className="flex items-start justify-between">
        <PageHeader title="My Blogs" desc="See all your published posts here" />
        <Link href="/dashboard/new" variant="default">
          Add New Post
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<LoadingPostList />}>
          <MyPostList />
        </Suspense>
      </div>
    </>
  );
}
