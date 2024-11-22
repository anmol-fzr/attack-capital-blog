"use client";
import { BlogCard } from "@/components";
import * as API from "@/services";

async function getBlogPost() {
  const data = await API.POST.MY();
  const posts = data.data;
  return posts;
}

export async function MyPostList() {
  const blogs = await getBlogPost();
  return (
    <>
      {blogs.length === 0 ? (
        <PostsPlaceholder />
      ) : (
        blogs.map(({ _id, title, desc, createdAt, author }) => (
          <BlogCard
            slug={_id}
            author={author.email}
            title={title}
            desc={desc}
            postedAt={createdAt}
            key={_id}
          />
        ))
      )}
    </>
  );
}

function PostsPlaceholder() {
  return (
    <div className="flex-1 dead-center">
      <div className="flex flex-col items-center">
        <h2>No Posts Yet?</h2>
        <p> Go ahead and create one now click on Add New Post</p>
      </div>
    </div>
  );
}
