import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const firebaseAuth = create(
  persist(
    (set) => ({
      emailValue: "",
      passwordValue: "",
      usernameValue: "",
      loginStatus: false,
      setEmailValue: (value) => set((state) => ({ emailValue: value })),
      setPasswordValue: (value) => set((state) => ({ passwordValue: value })),
      setUsernameValue: (value) => set((state) => ({ usernameValue: value })),
      setLoginStatus: (status) => set((state) => ({ loginStatus: status })),
    }),
    {
      name: "firebaseStorage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
