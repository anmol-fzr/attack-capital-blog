import { axiosInst } from "@/config";
import { IReqLogin, IReqSignup } from "@/types/req";
import { IResLogin, IResSignup } from "@/types/res";

const AUTH = {
  LOGIN: (payload: IReqLogin) =>
    axiosInst.post<IResLogin, IResLogin>("/auth/login", payload),
  SIGNUP: (payload: IReqSignup) =>
    axiosInst.post<IResSignup, IResSignup>("/auth/signup", payload),
};

export { AUTH };
