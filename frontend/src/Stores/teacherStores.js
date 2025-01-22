import {create} from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1" : "/api/v1";

export const useTeacherStore = create ((set) => ({
    Upload: async (File) => {
        try {
            const response = await axios.post(`${API_URL}/upload`,  File ,{ headers: {'Content-Type': 'multipart/form-data'}});
        }
        catch (error) {
            set({ error: error.response?.data?.message || "Error uploading", isLoading: false });
			throw error;
        }
    }
}));