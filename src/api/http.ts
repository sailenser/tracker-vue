import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const baseURL: string = import.meta.env.VUE_APP_API_URL || 'http://localhost:4052/';

const config: AxiosRequestConfig = {
  baseURL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance: AxiosInstance = axios.create(config);

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const token = localStorage.getItem('access_token');
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // if (error.response?.status === 401) {
    //   console.error('Не авторизован');
    // }
    return Promise.reject(error);
  }
);

export default instance;
