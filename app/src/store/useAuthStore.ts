import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuthStore } from "./types";

const creds = {
  isLogin: false,
  token: null,
  email: null,
  userId: null,
} as const;

const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      creds,
      resetCreds: () => set({ creds }),
      updateCreds: (creds) => {
        set({ creds: { ...get().creds, ...creds } });
      },
    }),
    { name: "useAuthStore", storage: createJSONStorage(() => localStorage) },
  ),
);

export { useAuthStore };
