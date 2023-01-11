import {axiosInstance} from './axios-instance'
import {LogInType, RegisteredUserResponse, RegistrationType} from "./types";
import routes from "./routes.json"

export const registration = async (data: RegistrationType) => {
    const {data: registrationData}
        = await axiosInstance.post<RegisteredUserResponse>(routes.auth.registration, data);
    return registrationData.body
}

export const logout = async ()=>{
    await axiosInstance.get(routes.auth.logout)
}

export const login = async (data: LogInType) => {
    const {data: registrationData}
        = await axiosInstance.post<RegisteredUserResponse>(routes.auth.login, data);
    return registrationData.body
}
