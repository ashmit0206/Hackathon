import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend base
  withCredentials: true                 // REQUIRED for cookies
});

export default api;
