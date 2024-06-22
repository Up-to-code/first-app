import { User } from "firebase/auth";
import { create } from "zustand";

export type UserState = {
  user: User | null;  // Allow user to be null initially
  setUser: (user: User) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,  // Initialize user as null
  setUser: (user: User) => set(() => ({ user })),  // Update state with new user
}));
