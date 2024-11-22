type IReqCreatePost = {
  title: string;
  content: string;
  desc: string;
};

type IReqGetPosts = {
  _id?: string;
};

export type { IReqCreatePost, IReqGetPosts };
