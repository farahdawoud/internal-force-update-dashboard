import axios from "axios";

const BASE_URL = "https://versioning-demo-380709.el.r.appspot.com/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "1",
  },
});

export default axiosInstance;
