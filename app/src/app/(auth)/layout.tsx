"use client";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const isLogin = useAuthStore((state) => state.creds.isLogin);
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.replace("/dashboard");
    }
  }, [isLogin, router]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      {children}
    </div>
  );
}