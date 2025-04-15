import { AxiosError } from 'axios';
import axiosInstance from './AxiosInterceptor';
import { ApiRequestParams, ApiResponse } from '../Types/globalTypes';

const apiRequest = async <T>({ url, method, data, toast, token, showToast = true }: ApiRequestParams)
    : Promise<ApiResponse<T>> => {
    try {
        const headersProp = token ? { Authorization: `${token}` } : {};
        const response = await axiosInstance({
            url,
            method,
            data,
            headers: {
                'Content-Type': 'application/json',
                ...headersProp
            }
        });

        if (response.data.isSuccess) {
            if (showToast) {
                toast.success(response.data.message);
            }
            return {
                success: true,
                data: response.data,
            };
        }
        else {
            if (response?.data?.statusCode == 401) {
                //   condition of token expiry
                // localStorage.clear();
                // Cookies.remove("token");
                // toast.error(response.data.message);
            }
            return {
                success: false,
                data: response.data,
            };

        }
        // Return the API response as ApiResponse<T>
    } catch (error) {
        const axiosError = error as AxiosError;

        // Type guard to check if response.data has a message property
        if (toast) {
            toast.error(axiosError.message || "Something went wrong!");
        }

        throw error;
    }
};

export default apiRequest;
