import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
  user: null,

  setUser: (user) => set({ user }),
  clearUser: () => {
    set({ user: null });
    localStorage.removeItem("token");
  },

  fetchUser: async () => {
    try {
      const token = localStorage.getItem("Token");
      if (!token) return set({ user: null });

      const res = await axios.get("http://localhost:4001/user/me", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      set({ user: res.data.user });
    } catch (err) {
      console.error(err);
      set({ user: null });
    }
  },
}));
