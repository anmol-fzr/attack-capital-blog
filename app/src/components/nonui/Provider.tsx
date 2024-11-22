"use client";
import { ReactNode, useLayoutEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "@/components";
import { TooltipProvider } from "@/components";
import { useAuthStore } from "@/store";
import { axiosInst } from "@/config";

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export function Provider({ children }: ProviderProps) {
  const token = useAuthStore((state) => state.creds.token);

  useLayoutEffect(() => {
    if (token) {
      axiosInst.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <ViewTransitions>
        <Toaster />
        <TooltipProvider>{children}</TooltipProvider>
      </ViewTransitions>
    </QueryClientProvider>
  );
}
