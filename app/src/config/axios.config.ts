import axios from "axios";
import { useAuthStore } from "@/store";

const baseURL = "http://localhost:8000";

const validateStatus = (status: number) => {
  if (status === 401) {
    logout();
  }
  return status >= 200 && status < 300;
};

const axiosInst = axios.create({
  baseURL,
  timeout: 50_000,
  validateStatus,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInst.interceptors.response.use(
  (config) => config.data,
  (errResp) => {
    Promise.reject(errResp?.response?.data);
  },
);

const logout = () => {
  useAuthStore.getState().resetCreds();
};

export { axiosInst, baseURL, logout };
