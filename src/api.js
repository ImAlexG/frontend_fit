import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const BASE_URL = "http://18.217.170.244";

const api = axios.create({
  baseURL: "http://18.217.170.244",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      const decoded = jwtDecode(token);
      const expiry_date = decoded.exp;
      const current_time = Date.now() / 1000;

      if (expiry_date > current_time) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default api;



// http://18.217.170.244:8000
//http://127.0.0.1:8000