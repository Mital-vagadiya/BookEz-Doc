import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: (import.meta as any).env.VITE_API_BASE_URL as string,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // const subscriptionToken = Cookies.get('subscriptionToken');
    const subscriptionToken = 'token';

    // Check for tokens and prioritize based on existence
    if (subscriptionToken) {
      config.headers.Authorization = `Bearer ${subscriptionToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => Promise.reject(error)
);

export default axiosInstance;
