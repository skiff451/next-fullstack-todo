import {axiosInstance} from './axios-instance'
import {RegisteredUserResponse, RegistrationType} from "./types";
import routes from "./routes.json"

export const registration = async (data: RegistrationType) => {
    const {data: registrationData}
        = await axiosInstance.post<RegisteredUserResponse>(routes.registration, data);
    return registrationData.body
}
