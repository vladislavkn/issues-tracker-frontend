import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

httpClient.defaults.headers["Access-Control-Allow-Credentials"] = true;

export const setAccessTokenToHttpClient = (token: string | null) => {
  if (token) {
    httpClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete httpClient.defaults.headers["Authorization"];
  }
};
