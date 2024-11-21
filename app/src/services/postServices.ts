import { axiosInst } from "@/config";
import { IReqGetPosts, IReqCreatePost } from "@/types/req";
import { IResGetPosts, IResCreatePost, IResGetPost } from "@/types/res";

const POST = {
  GET: (params: IReqGetPosts | undefined) =>
    axiosInst.get<IResGetPosts, IResGetPosts>("/posts", { params }),
  GET_ONE: (postId: string) =>
    axiosInst.get<IResGetPost, IResGetPost>("/posts", {
      params: { _id: postId },
    }),
  CREATE: (payload: IReqCreatePost) =>
    axiosInst.post<IResCreatePost, IResCreatePost>("/post", payload),
};

export { POST };
