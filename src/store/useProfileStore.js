import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProfileStore = create((set) => ({
  isLoading: false,
  loggedInUser: null,
  getSolvedProblems: [],
  getPlaylists: [],
  getRecentSubmissions: [],

  profileData: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/auth/check");
      console.log("useProfileStore response: ", res.data);
      set({ loggedInUser: res.data.user });
    } catch (error) {
      console.log("Error fetching User details", error.message);
      toast.error("Error fetching User details");
    } finally {
      set({ isLoading: false });
    }
  },
  getAllProblemsSolvedByUser: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/problems/get-solved-problems");
      set({ getSolvedProblems: res.data.problems });
    } catch (error) {
      console.log("Error getting", error.message);
      toast.error("Failed to get the solved problems");
    } finally {
      set({ isLoading: false });
    }
  },

  getAllPlaylist: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/");
      set({ getPlaylists: res.data.playlists });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error getting playlists", error.message);
      toast.error("Failedd to get the playlists");
    } finally {
      set({ isLoading: false });
    }
  },
  getAllSubmission: async()=> {
    try {
      set({isLoading: true});
      const res = await axiosInstance.get("/submission/get-all-submissions");
      
      console.log("Solved problems bu user: ", res.data.submissions)
      set({getRecentSubmissions: res.data.submissions});
    } catch (error) {
      console.log("Error getting the recent submissions");
      toast.error("Error getting recent submissions");
    }
    finally{
      set({isLoading: false});
    }
  },
}));
