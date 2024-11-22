import { GoBack } from "@/components";
import * as API from "@/services";

async function getData(postId: string) {
  const data = await API.POST.GET_ONE(postId);
  return data.data;
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage(props: PostPageProps) {
  const postId = props.params.slug;
  const post = await getData(postId);

  return (
    <div>
      <GoBack href="/" />
      <div className="theme-max-width p-4 space-y-16">
        <h1
          style={{
            viewTransitionName: `post_image_${postId}`,
          }}
          className="text-center"
        >
          {post.title}
        </h1>
        <div className="prose dark:prose-invert">
          <p
            style={{
              viewTransitionName: `post_content_${postId}`,
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
