import axios from "axios";

const API_BASE_URL = `${window.location.origin}:8081/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const taskService = {
  // Get latest 5 incomplete tasks
  getIncompleteTasks: async () => {
    try {
      const response = await api.get("/tasks/inCompleted");
      return {
        ...response,
        data: Array.isArray(response.data) ? response.data : [],
      };
    } catch (error) {
      console.error("Error fetching incomplete tasks:", error);
      return { data: [] };
    }
  },

  // Get latest 5 completed tasks
  getCompletedTasks: async () => {
    try {
      const response = await api.get("/tasks/completed");
      return {
        ...response,
        data: Array.isArray(response.data) ? response.data : [],
      };
    } catch (error) {
      console.error("Error fetching completed tasks:", error);
      return { data: [] };
    }
  },

  // Create a new task
  createTask: async (taskData) => {
    try {
      return await api.post("/tasks", taskData);
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },

  // Mark task as done
  markTaskDone: async (taskId) => {
    try {
      return await api.post(`/tasks/${taskId}/done`);
    } catch (error) {
      console.error("Error marking task done:", error);
      throw error;
    }
  },
};

export default api;
