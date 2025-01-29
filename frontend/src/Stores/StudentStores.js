import {create} from 'zustand';

import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "https://backend-npyb.onrender.com/api/v1" : "/api/v1";

axios.defaults.withCredentials = true;

export const StudentStores = create((set) => ({
    teacher: null,
	student: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
	email: undefined,

	getClasses: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/fetch-classes`);
			set({ isLoading: false });
			//console.log(response.data.enrolledClasses);
			return response.data; 
		} catch (error) {
			set({ error: error.response?.data?.message || "Error fetching classes", isLoading: false });
			throw error;
		}
	},
    joinClass: async (classLink) => {
        set({ isLoading: true, error: null });
    
        try {
            // Extract token from the full class link
            const tokenMatch = classLink.match(/join\/([^/]+)$/);
            if (!tokenMatch) {
                throw new Error("Invalid class link format");
            }
    
            const token = tokenMatch[1]; // Extracted token
            //console.log("Extracted Token:", token);
    
            const response = await axios.get(`${API_URL}/join/${token}`);
            //console.log("Join Response:", response.data);
            set({ isLoading: false });
            return response.data;
        } catch (error) {
            console.error("Join Class Error:", error.response?.data || error);
            set({
                error: error.response?.data?.message || "Error joining class",
                isLoading: false,
            });
            throw error;
        }
    },
    getContent: async (classId) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/getclasscontent/${classId}`);
            set({ isLoading: false });
            return response.data; // Return the data directly
        } catch (error) {
            set({ error: error.response?.data?.message || "Error fetching contents", isLoading: false });
            throw error;
        }
    },
    
    fetchvideo: async (videoId) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/fetch-video/${videoId}`);
            set({ isLoading: false });
            //console.log(response.data);
            return response.data; // Return the data directly
        } catch (error) {
            set({ error: error.response?.data?.message || "Error fetching video", isLoading: false });
            throw error;
        }
    },

    markVideoAsWatched: async (videoId) => {
        try {
            const response = await axios.post(`${API_URL}/update-watched-status`, { videoId });
            return response.data;
        } catch (error) {
            console.error('Error marking video as watched:', error);
            throw error;
        }
    },

}))