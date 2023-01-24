import axios from "axios"
import {RefreshInterceptor} from "./interseptors/errorInterseptors";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,

})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    }, async (error) => {
        await RefreshInterceptor(axiosInstance, error)
        return Promise.reject(error);
    }
)

