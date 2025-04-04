import {create} from 'zustand'; // zustand is alternative of redux
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

// const API_URL = "https://backend-npyb.onrender.com/api/v1";
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
			const response = await axios.post(`${API_URL}${backendUrl}`, {
				email,
				password,
				rememberMe,
			}, { withCredentials: true }); // Ensures cookies are sent
	
			const { data } = response;
	
			if (data.token) {
				sessionStorage.setItem("token", data.token); // Store token in sessionStorage
				axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
			}
	
			set({ isAuthenticated: true, student: data.student, teacher: data.teacher, isLoading: false });
		} catch (error) {
			const errorMessage = error.response?.data?.message || "Error logging in";
			toast.error(errorMessage);
			set({ error: errorMessage, isLoading: false });
		}
	},
	logout: async () => {
		sessionStorage.removeItem("token");
		set({ isAuthenticated: false, student: null, teacher: null });
		window.location.reload(); // Ensures full logout
	},	
	signup : async (email, password, passwordConfirm) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/studentSignup`, { email, password, passwordConfirm });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			const errorMessage = error.response?.data?.message || "Error signing up";
            toast.error(errorMessage);
			set({ error: errorMessage, isLoading: false });
			throw error;
		}
	},

	checkAuth: async () => {
        const token = sessionStorage.getItem("token");
        if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			set({ isLoading: true, error: null });
            try {
                const response = await axios.get(`${API_URL}/auth`);
                set({ isAuthenticated: true, student:response.data.user, isLoading: false });
            } catch (error) {
                sessionStorage.removeItem("token");
				delete axios.defaults.headers.common['Authorization'];
                set({ isAuthenticated: false, student: null, teacher: null, isLoading: false });
            }
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
			const errorMessage = error.response?.data?.message || "Error verifying account";
            toast.error(errorMessage);
			set({ error: errorMessage, isLoading: false });
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
			const errorMessage = error.response?.data?.message || "Error fetching test data";
            toast.error(errorMessage);
			set({ error: errorMessage, isLoading: false });
			throw error;
		}
	},

}))