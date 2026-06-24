import axios from "axios";

const api = axios.create({
  baseURL:
    "https://cloud-hrms-1.onrender.com/api",
  withCredentials: true,
});

api.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

   

  },

  (error) => {

    return Promise.reject(
      error
    );

  }

);

export default api;