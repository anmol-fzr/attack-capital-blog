"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Navbar } from "@/components";
import { useIsLogin } from "@/hooks";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const isLogin = useIsLogin();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin, router]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full justify-center p-4 md:p-6 max-w-theme">
        {children}
      </main>
    </>
  );
}
