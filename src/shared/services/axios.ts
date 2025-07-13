import axios from "axios";

export const BASE_URL = "https://sandbox.matus.netcraze.club";
export let WITH_CRED: boolean | undefined;

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  return config;
});

// Интерцептор для обработки ошибок и обновления токена
api.interceptors.response.use(
  (response) => {
    WITH_CRED = response.config.withCredentials;
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Если ошибка 401 (токен истек) и это не запрос на /refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      window.location.href = "/auth";
      //TODO refresh logic
    }

    return Promise.reject(error);
  },
);
async function getUserIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error getting IP:", error);
    return null;
  }
}

const interval = setInterval(async () => {
  if (WITH_CRED) {
    const ipAddress = await getUserIP();
    api.post("/Visit", { ipAddress });
    clearInterval(interval);
  }
}, 3000);

//TODO delete me
window.api = api;
