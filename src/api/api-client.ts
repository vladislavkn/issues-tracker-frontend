import axios from "axios";
import { authEvent, authEventBus } from "../auth/auth-event-bus";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

httpClient.defaults.headers["Access-Control-Allow-Credentials"] = true;

authEventBus.on(authEvent.LOGIN, () => (token: string | null) => {
  httpClient.defaults.headers["Authorization"] = `Bearer ${token}`;
});

authEventBus.on(authEvent.LOGOUT, () => {
  delete httpClient.defaults.headers["Authorization"];
});

httpClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const { config } = error;

    if (!config.__retry && error.response && error.response.status === 401) {
      config.__retry = true;

      try {
        const response = await httpClient.post("/auth/refresh");
        const { accessToken } = response.data;
        authEventBus.emit(authEvent.LOGIN, accessToken);

        return httpClient(config);
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
