import { Suspense } from "react";
import {
  BlogCard,
  LoadingPostList,
  PageHeader,
  MainPostsPlaceholder,
} from "@/components";
import * as API from "@/services";

async function getAllPosts() {
  const data = await API.POST.GET();
  const posts = data.data;
  return posts;
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-page flex flex-col">
      <PageHeader
        title="Latest Articles & Updates"
        desc="Explore articles that inform, inspire, and ignite curiosity, curated just for you."
      />
      <div className="flex gap-6 mt-4 !h-full flex-1">
        <Suspense fallback={<LoadingPostList />}>
          {posts.length === 0 ? (
            <MainPostsPlaceholder />
          ) : (
            <div className="flex flex-col gap-4 w-full max-w-screen-2xl mx-auto !h-full">
              {posts.map(({ _id, title, desc, author, createdAt }) => (
                <BlogCard
                  slug={_id}
                  title={title}
                  desc={desc}
                  author={author.email}
                  postedAt={createdAt}
                  key={_id}
                />
              ))}
            </div>
          )}
        </Suspense>
        {/*
          <aside className="h-96 sticky top-24 px-4 bg-background/50 border p-4 rounded-lg w-4/12 max-w-96">
            <h2 className="pb-4 text-3xl font-semibold tracking-tight transition-colors">
              Categories
            </h2>
            <ul className="flex flex-col gap-1 capitalize font-medium">
              {cats.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </aside>
          */}
      </div>
    </main>
  );
}
