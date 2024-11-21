"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { FormHeader } from "@/components";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthForm } from "./AuthForm";
import { AuthFormFooter } from "./AuthFormFooter";
import { useMutation } from "@tanstack/react-query";
import * as API from "@/services";
import { toast } from "sonner";

type FormType = z.infer<typeof signUpSchema>;

const id = "signup_form";

export function SignupForm() {
  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: API.AUTH.SIGNUP,

    onSuccess(res) {
      router.push(`/login`);
      toast.success(res.message, { id });
    },
    onError(err) {
      toast.error(err.message, { id });
    },
  });

  function onSubmit(values: FormType) {
    toast.loading("Signing up ...", { id });
    mutate(values);
  }

  return (
    <Card className="mx-auto max-w-md w-full">
      <FormHeader
        title="Signup"
        desc="Enter your email below to create a new account"
      />
      <CardContent>
        <AuthForm
          methods={form}
          onSubmit={onSubmit}
          isPending={isPending}
          btnTitle="Sign up"
        />
        <AuthFormFooter
          message="Already have an account?"
          href="/login"
          title="Login"
        />
      </CardContent>
    </Card>
  );
}
