import * as API from "@/services";

async function getData(postId: string) {
  const data = await API.POST.GET_ONE(postId);
  return data.data;
}

export default async function PostPage(props) {
  const postId = props.params.slug;
  const post = await getData(postId);

  return (
    <div className="theme-max-width p-4 space-y-12">
      <h1
        style={{
          viewTransitionName: `post_image_${postId}`,
        }}
      >
        {post.title}
      </h1>
      <div className="prose">
        <p
          style={{
            viewTransitionName: `post_content_${postId}`,
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
