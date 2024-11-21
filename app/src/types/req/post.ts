import { createPostSchema } from "@/schema";
import { z } from "zod";

type IReqCreatePost = z.infer<typeof createPostSchema> & {
  content: string;
  desc: string;
};
type IReqGetPosts = {
  authorId?: string;
  _id?: string;
};

export type { IReqCreatePost, IReqGetPosts };
