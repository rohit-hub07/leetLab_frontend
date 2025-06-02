import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useActions = create((set) => ({
  isDeletingProblem: false,

  
  onDeleteProblem: async (id) => {
    try {
      set({ isDeletingProblem: true });
      const res = await axiosInstance.delete(`/problems/delete-problem/${id}`);

      toast.success(res.data.message);
    } catch (error) {
      console.log("Error deleting the problem", error);
      toast.error("Error deleting the problem");
    } finally {
      set({ isDeletingProblem: false });
    }
  },
}));
