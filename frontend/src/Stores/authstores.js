import {create} from 'zustand';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

const API_URL = "http://localhost:8000/api/v1";

axios.defaults.withCredentials = true;

export const useAuthstore = create((set) => ({
    teacher: null,
	student: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
	email: undefined,


    login: async (email, password, backendUrl, rememberMe) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}${backendUrl}`, { email, password, rememberMe });
			const { data } = response;
			set({ isAuthenticated: true, student: data.student, teacher: data.teacher, isLoading: false });
		} catch (error) {
			const errorMessage = error.response?.data?.message || "Error logging in";
            if (error.response?.status === 400) {
                toast.error("Bad Request: " + errorMessage);
            }
			set({ error: errorMessage, isLoading: false });
		}
	},
	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/studentLogout`);
			set({ teacher: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},	
	signup : async (email, password, passwordConfirm) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/studentSignup`, { email, password, passwordConfirm });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	verify: async (code) => {  // Accept navigate as a parameter
		set({ isLoading: true, error: null });
		try {
			console.log(code);
			const response = await axios.post(`${API_URL}/verifyStudent`, { code });
			set({ isLoading: false });
			return response.data;
			// navigate("/dashboard"); // Navigate to success page or any other action
		}catch (error) {
			set({ error: error.response.data.message || "Error verifying account", isLoading: false });
			throw error;
		}
	},
	
	
	test: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/`);
			set({ isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response?.data?.message || "Error fetching test data", isLoading: false });
			throw error;
		}
	},

}))