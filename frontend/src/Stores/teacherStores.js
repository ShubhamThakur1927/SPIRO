import {create} from 'zustand';
import axios from 'axios';

const API_URL = "https://backend-npyb.onrender.com/api/v1";

export const useTeacherStore = create ((set) => ({
    Upload: async (File) => {
        try {
            await axios.post(`${API_URL}/upload`,  File ,{ headers: {'Content-Type': 'multipart/form-data'}});
        }
        catch (error) {
            set({ error: error.response?.data?.message || "Error uploading", isLoading: false });
			throw error;
        }
    },
    CreateClass: async (subjectname) => {
        try {
            await axios.post(`${API_URL}/create-class`, { subjectname });
            set({ error: null, isLoading: false });
        }
        catch (error) {
            set({ error: error.response?.data?.message || "Error creating class", isLoading: false });
            throw error;
        }
    },
    profile: async () =>
    {
        try {
            const response = await axios.get(`${API_URL}/profile`);
            return response.data;
        } catch (error) {
            set({ error: error.response?.data?.message || "Error getting profile", isLoading: false });
        }
    },
    joinLink: async (subjectname) => {
        try {
             const response = await axios.post(`${API_URL}/generate-join-link`, { subjectname });
             return response?.data?.link;
            set({ error: null, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error joining class", isLoading: false });
        }
    },
}));