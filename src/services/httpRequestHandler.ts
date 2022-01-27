import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const handleRequest = async (
    requestConfig: AxiosRequestConfig,
    client?: AxiosInstance
): Promise<any> => {
    client = client ?? axios.create();

    try {
        const response = await client.request(requestConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
};