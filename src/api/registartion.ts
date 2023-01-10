import {axiosInstance} from './axios-instance'
import {RegistrationType} from "./types";
import routes from "./routes.json"

export const registration = async (data: RegistrationType) => {
    return await axiosInstance.post(routes.registration, data);
}
