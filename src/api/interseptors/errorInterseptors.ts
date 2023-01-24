import {AxiosError, AxiosHeaders, AxiosInstance, AxiosRequestConfig} from "axios"
import {refreshToken} from "../../helpers/refreshToken";
import {refresh} from "../auth";

type ExtendedHeader = { Authorization: string } & AxiosHeaders
export const RefreshInterceptor = async (axiosInstance: AxiosInstance, error: AxiosError) => {
    const status = error?.response?.status
    const originalRequest = error.config;

    if (status === 401) {
        if ((error?.config?.headers as ExtendedHeader).Authorization) {
            window.location.assign("/sign-in");
            throw new Error("Unauthorized user");
        }

        const oldRefresh = refreshToken.getToken()
        const {refresh: newRefresh} = await refresh(oldRefresh as string);
        refreshToken.setToken(newRefresh);

        return axiosInstance(originalRequest as AxiosRequestConfig<any>);
    }
}
