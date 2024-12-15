import { create } from "zustand";
import axios from "axios";
import { signup } from "../../../backend/controllers/auth.controller";


const API_URL = "http://localhost:5173/api/auth";
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  ischeckingAuth: true,

  signup: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `${API_URL}/signup`,{email, password,passwordconfirm});
        set({ user: response.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
        set({ error: error.response.data.message || "Error signing up ",isLoading: false });
        throw error;
    }
  },
}));
