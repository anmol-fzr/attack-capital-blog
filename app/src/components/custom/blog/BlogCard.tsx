import { Button, Separator } from "@/components";
import { Link } from "next-view-transitions";
import { MoveUpRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  desc: string;
  author: string;
  postedAt: string;
}

const fmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
});

export function BlogCard({
  slug,
  title,
  desc,
  author,
  postedAt,
}: BlogCardProps) {
  return (
    <>
      <div className="transition-all pt-6 duration-500 relative group">
        <Button className="flex gap-2 absolute top-0 right-0 -translate-x-12 translate-y-12 group-hover:translate-y-4 group-hover:-translate-x-4 opacity-0 group-hover:opacity-100 transition-all">
          <span className="font-medium">Read now</span>
          <MoveUpRight />
        </Button>
        <div className="flex-1 w-full pb-6">
          <Link href={`/post/${slug}`} className="space-y-2" prefetch>
            <div className="space-y-2">
              <h3
                style={{
                  viewTransitionName: `post_image_${slug}`,
                }}
                className="text-2xl font-bold"
              >
                {title}
              </h3>
              <p
                style={{
                  viewTransitionName: `post_content_${slug}`,
                }}
                className="line-clamp-3"
              >
                {desc} ...
              </p>
            </div>
            <p
              style={{
                viewTransitionName: `post_date_${slug}`,
              }}
              className="text-gray-500 dark:text-gray-400"
            >
              Posted on {fmt.format(new Date(postedAt))}
            </p>
            <p className="text-gray-400 dark:text-gray-300 text-xs">
              by {author}
            </p>
          </Link>
        </div>
        <Separator className="-mt-2" />
      </div>
    </>
  );
}
