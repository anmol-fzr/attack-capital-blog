"use client";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";
import { ReactNode, useEffect } from "react";

interface LoginProtectedProps {
  children: ReactNode;
}

export function LoginProtected({ children }: LoginProtectedProps) {
  const isLogin = useAuthStore((state) => state.creds.isLogin);
  const { replace } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      replace("/");
    }
  }, [isLogin, replace]);

  return children;
}
