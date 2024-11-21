import { IRes } from ".";

type Post = {
  _id: string;
  title: string;
  content: string;
  desc: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

type IResGetPosts = IRes<Post[]>;
type IResGetPost = IRes<Post>;
type IResCreatePost = IResGetPost;

export type { IResGetPosts, IResCreatePost, IResGetPost };
