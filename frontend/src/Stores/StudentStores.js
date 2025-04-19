import {create} from 'zustand';
import { devtools } from "zustand/middleware";
import axios from 'axios';

// const API_URL = "https://backend-npyb.onrender.com/api/v1";
const API_URL = "http://localhost:8000/api/v1";

axios.defaults.withCredentials = true;

export const StudentStores = create(
  devtools((set) => ({
    teacher: null,
    student: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,
    email: undefined,
    classes: [],

    updateProfile:async (student) => {
      const name = student.name;
      const phone = student.phone;
      const branch = student.branch;
      const yearAndDivision = student.yearAndDivision;
      const gender = student.gender;
      try {
        set({ isLoading: true });
        const response = await axios.post(`${API_URL}/update-profile`, { name, phone, branch, yearAndDivision,gender});
        set({ student: response.data.student, isLoading: false });
      } catch (error) {
        set({ error: error.message, isLoading: false });
      }
    },
    
    getProfile: async () => {
        try {
            set({ isLoading: true });
            const response = await axios.get(`${API_URL}/fetch-data`);
            set({ user: response.data.student, isAuthenticated: true, isLoading: false });
            return response.data.student;
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },


    getClasses: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(`${API_URL}/fetch-classes`);
        set({ isLoading: false, classes: response.data.enrolledClasses });
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
        const tokenMatch = classLink.match(/\/join\/([^/?]+)/);
        if (!tokenMatch || tokenMatch.length < 2) {
          throw new Error("Invalid class link format");
        }
  
        const token = tokenMatch[1]; // Extracted token
        console.log(token);
        const response = await axios.get(`${API_URL}/join/${token}`);
        set({ isLoading: false });
        window.location.reload();
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


    updateProfilePic: async (formData) => {
      try {
        const response = await axios.post(`${API_URL}/upload-profile-pic`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        window.location.reload();
        set({ profilePic: response.data.profilePic });
      } catch (error) {
        console.error("Failed to update profile picture:", error);
      }
    },

    
  }))
);