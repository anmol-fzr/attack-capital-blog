import { useAuthStore } from "@/store";

export function useIsLogin() {
  const isLogin = useAuthStore((state) => state.creds.isLogin);
  return isLogin;
}
