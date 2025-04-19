import {create} from 'zustand'; // zustand is alternative of redux
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import { StudentStores } from './StudentStores';

// const API_URL = "https://backend-npyb.onrender.com/api/v1";
const API_URL = "http://localhost:8000/api/v1";
axios.defaults.withCredentials = true;


export const useAuthstore = create((set) => ({
    user:null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
	email: undefined,
	role: undefined,
	Classes:[],


    login: async (email, password, backendUrl, rememberMe) => {
		set({ isLoading: true, error: null });
	
		try {
			const response = await axios.post(`${API_URL}${backendUrl}`, {
				email,
				password,
				rememberMe,
			}, { withCredentials: true }); // Ensures cookies are sent

			const { data } = response;
			// console.log(data.user.role);
			
			if (data.token) {
				// sessionStorage.setItem("token", data.token); // Store token in sessionStorage
				axios.defaults.headers.common['authorization'] = data.token;
			}
			set({ isAuthenticated: true, isLoading: false,user: data.user});
		} catch (error) {
			const errorMessage = error.response?.data?.message || "Error logging in";
			toast.error(errorMessage);
			set({ error: errorMessage, isLoading: false });
		}
	},
	logout: async () => {
		set({ isAuthenticated: false, user: null, isLoading: true });
		try {
			const response = await axios.post(`${API_URL}/logout`);
			axios.defaults.headers.common['authorization'] = '';
			// console.log(response.data);
			set({ user: null, isAuthenticated: false, isLoading: false });
			// toast.success("Logged out successfully");
		}
		catch (error) {
			toast.error("Error logging out");
			}
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
			// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			set({ isLoading: true, error: null });
            try {
                const response = await axios.get(`${API_URL}/auth`);
				const { data } = response;
                set({ isAuthenticated: true, role: data.user.role, user: data.user, isLoading: false });
            } catch (error) {
				const errorMessage = error.response?.data?.message || "Error checking authentication";
                set({ isAuthenticated: false, user:null, isLoading: false });
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