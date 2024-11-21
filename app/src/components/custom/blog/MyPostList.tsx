import { BlogCard } from "@/components";
import * as API from "@/services";

const authorId = "673e0c69e56e3a3d2b1487e3";

async function getBlogPost() {
  const data = await API.POST.GET({ authorId });
  const post = data.data;
  return post;
}

export async function MyPostList() {
  const blogs = await getBlogPost();
  return (
    <>
      {blogs.map(({ _id, title, content, createdAt }) => (
        <BlogCard
          slug={_id}
          title={title}
          desc={content}
          postedAt={createdAt}
          key={_id}
        />
      ))}
    </>
  );
}
