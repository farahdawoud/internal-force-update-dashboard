import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_URL = "https://versioning-demo-380709.el.r.appspot.com/api/v1";
const cookies = new Cookies();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = cookies.get("token");
  console.log("TOKK", token);
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default axiosInstance;
