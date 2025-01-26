import {create} from 'zustand';

import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1" : "/api/v1";

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
			return response.data.enrolledClasses; // Return enrolled classes data
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
    }
    ,
    
     

}))