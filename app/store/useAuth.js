import { create } from "zustand";

// __________________________________________
export const useAuth = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
