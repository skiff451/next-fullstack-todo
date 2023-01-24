import {TodoType} from "../components/types";

export type RegistrationType = {
    name: string;
    email: string;
    password: string;
}

export type ResponseType<T> = {
    body: T;
    message: string;

}

export type RegistrationResponseType = {
    id: string;
    name: string;
    email: string;
    token: string;
}

export type RegisteredUserResponse = ResponseType<RegistrationResponseType>

export type LogInType = Omit<RegistrationType, "name">

export type TodoApiType = { id: number } & TodoType

type RefreshType = {
    refresh: string;
}

export type RefreshResponse = ResponseType<RefreshType>
