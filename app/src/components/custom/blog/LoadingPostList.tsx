import { LoadingBlogCard } from "./LoadingBlogCard";

const blogs = Array.from(new Array(10));

export async function LoadingPostList() {
  return (
    <>
      {blogs.map((_, i) => (
        <LoadingBlogCard key={i} />
      ))}
    </>
  );
}
