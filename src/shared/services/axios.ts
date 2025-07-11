import axios from "axios";

const BASE_URL = "https://sandbox.matus.netcraze.club";

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
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Если ошибка 401 (токен истек) и это не запрос на /refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      window.location.href = "/auth";
      // originalRequest._retry = true;

      // try {
      //   // Пытаемся обновить токен через refresh-токен (отправляется в куках)
      //   const refreshResponse = await axios.post(
      //     `${BASE_URL}/auth/refresh`,
      //     {},
      //     { withCredentials: true }, // Куки отправятся автоматически
      //   );
      //   //TODO delete me
      //   console.log(refreshResponse);
      //
      //   // Повторяем исходный запрос с новым токеном
      //   return api(originalRequest);
      // } catch (refreshError) {
      //   // Если refresh-токен невалиден, выходим
      //   console.error("Refresh token failed:", refreshError);
      //   window.location.href = "/login"; // Редирект на логин
      //   return Promise.reject(refreshError);
      // }
    }

    return Promise.reject(error);
  },
);
//TODO delete me
window.api = api
