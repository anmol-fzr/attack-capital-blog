import { IRes } from ".";

type Post = {
  _id: string;
  title: string;
  content: string;
  desc: string;
  author: {
    email: string;
  };
  createdAt: string;
};

type IResGetPosts = IRes<Post[]>;
type IResGetPost = IRes<Post>;
type IResCreatePost = IResGetPost;

export type { IResGetPosts, IResCreatePost, IResGetPost };
