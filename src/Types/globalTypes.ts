export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiResponse<T> {
    success: boolean;
    data: {
        message: string;
        isSuccess: boolean;
        data: T;
        statusCode: number;
    };
    error?: string;
}

export interface ApiRequestParams {
    url: string;
    method: HttpMethod;
    data?: Record<string, unknown>;
    toast: any;
    token?: string | null;
    showToast?: boolean;
}

export type Theme = "dark" | "light";
