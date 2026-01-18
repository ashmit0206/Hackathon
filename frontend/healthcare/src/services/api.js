import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // backend base
  withCredentials: true                 // REQUIRED for cookies
});

export default api;
