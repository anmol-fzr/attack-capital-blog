"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { FormHeader } from "@/components";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthForm } from "./AuthForm";
import { AuthFormFooter } from "./AuthFormFooter";
import { useMutation } from "@tanstack/react-query";
import * as API from "@/services";
import { toast } from "sonner";
import { useAuthStore } from "@/store";

type FormType = z.infer<typeof loginSchema>;
const updateCreds = useAuthStore.getState().updateCreds;

const id = "login_form";

export function LoginForm() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: API.AUTH.LOGIN,

    onSuccess(res) {
      const { email, userId, token } = res.data;

      updateCreds({ email, isLogin: true, userId, token });
      toast.success(res.message, { id });
      router.push("/dashboard");
    },
    onError(err) {
      toast.error(err.message, { id });
    },
  });

  const form = useForm<FormType>({
    resolver: zodResolver(loginSchema),
    disabled: isPending,
  });

  function onSubmit(values: FormType) {
    toast.loading("Logging in ...", { id });
    mutate(values);
  }

  return (
    <Card className="mx-auto max-w-md w-full">
      <FormHeader
        title="Login"
        desc="Enter your email below to login to your account"
      />
      <CardContent>
        <AuthForm
          methods={form}
          onSubmit={onSubmit}
          isPending={isPending}
          btnTitle="Login"
        />
        <AuthFormFooter
          message="Don't have an account?"
          href="/signup"
          title="Signup"
        />
      </CardContent>
    </Card>
  );
}
