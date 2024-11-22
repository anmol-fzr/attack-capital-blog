"use client";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";
import { ReactNode, useEffect } from "react";
import { Navbar } from "@/components";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const isLogin = useAuthStore((state) => state.creds.isLogin);
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
