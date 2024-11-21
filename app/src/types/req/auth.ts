import { loginSchema, signUpSchema } from "@/schema";
import { z } from "zod";

type IReqLogin = z.infer<typeof loginSchema>;
type IReqSignup = z.infer<typeof signUpSchema>;

export type { IReqLogin, IReqSignup };
