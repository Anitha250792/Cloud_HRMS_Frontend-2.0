import axios from "axios";

const api = axios.create({
  baseURL:
    "https://cloud-hrms-1.onrender.com/api",
  withCredentials: true,
});

export default api;