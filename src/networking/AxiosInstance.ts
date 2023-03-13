import axios from "axios";

const BASE_URL = "https://1b3d-37-245-27-67.in.ngrok.io/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "1",
  },
});

export default axiosInstance;
