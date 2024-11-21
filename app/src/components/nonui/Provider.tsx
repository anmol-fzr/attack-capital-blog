"use client";
import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "@/components";
import { TooltipProvider } from "@/components";

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ViewTransitions>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Toaster />
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </ViewTransitions>
    </QueryClientProvider>
  );
}
