import {create} from 'zustand';

import axios from 'axios';

const API_URL = "https://backend-npyb.onrender.com/api/v1";

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
			set({ error: error.response.data.message, isLoading: false });
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
	StudentLogin: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/StudentLogin`, { email, password });
			set({
				isAuthenticated: true,
				student: response.data.student,
				error: null,
				isLoading: false,
				isVerified : false
			});
			//console.log(response.data.teacher);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
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
	verify: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verifyStudent`, { code });	
			const { user } = response.data; // Extract email and user from the response
			set({ 
				user, 
				isAuthenticated: true, 
				isLoading: false 
			});
	
			return response.data;
		} catch (error) {
			set({ 
				error: error.response?.data?.message || "Error verifying email", 
				isLoading: false 
			});
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