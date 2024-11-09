import { TWITCH_ACCESS_TOKEN } from '@/lib/constants';
import axios, { InternalAxiosRequestConfig } from 'axios';

const twitchAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_TWITCH_BASE_URL}`,
});

const igdbAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_IGDB_BASE_URL}`,
});

twitchAxiosInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem(TWITCH_ACCESS_TOKEN);
    if (token) request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

igdbAxiosInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem(TWITCH_ACCESS_TOKEN);
    if (token) request.headers.Authorization = `Bearer ${token}`;
    request.headers['Client-ID'] = import.meta.env.VITE_API_TWITCH_CLIENT_ID;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { igdbAxiosInstance, twitchAxiosInstance };
