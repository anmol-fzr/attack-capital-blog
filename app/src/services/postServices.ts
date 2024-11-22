import { axiosInst } from "@/config";
import { IReqGetPosts, IReqCreatePost } from "@/types/req";
import { IResGetPosts, IResCreatePost, IResGetPost } from "@/types/res";

const POST = {
  GET: (params?: IReqGetPosts) =>
    axiosInst.get<IResGetPosts, IResGetPosts>("/posts", { params }),
  MY: () => axiosInst.get<IResGetPosts, IResGetPosts>("/posts/me"),
  GET_ONE: (postId: string) =>
    axiosInst.get<IResGetPost, IResGetPost>(`/posts/${postId}`),
  CREATE: (payload: IReqCreatePost) =>
    axiosInst.post<IResCreatePost, IResCreatePost>("/posts", payload),
};

export { POST };
