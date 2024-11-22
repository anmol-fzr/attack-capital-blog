import { BlogCard, Navbar, PageHeader } from "@/components";
import * as API from "@/services";

//const blogs = Array.from(new Array(30));
const cats = ["programming", "music", "science", "psychology"];

export default async function Home() {
  const data = await API.POST.GET();
  const blogs = data.data;
  //console.log(data.data);

  return (
    <>
      <PageHeader
        title="Latest Articles & Updates"
        desc="Explore articles that inform, inspire, and ignite curiosity, curated just for you."
      />
      <div className="flex gap-6 mt-4">
        <div className="flex flex-col gap-4 w-full max-w-screen-2xl mx-auto">
          {blogs.map(({ _id, title, desc, createdAt }) => (
            <BlogCard
              slug={_id}
              title={title}
              desc={desc}
              postedAt={createdAt}
              key={_id}
            />
          ))}
        </div>
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
    </>
  );
}
