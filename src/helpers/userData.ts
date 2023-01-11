import {UserType} from "../types";

export const UserData = {
    setUserData: (data: UserType) => {
        if (typeof window !== "undefined") {
            const stringifiedUser = JSON.stringify(data)
            localStorage.setItem('user', stringifiedUser);
        }

    },
    getUserData: () => {
        if (typeof window !== "undefined") {
            const stringifiedUser = localStorage.getItem('user')
            return stringifiedUser ? JSON.parse(stringifiedUser) as UserType : null;
        }
    },
    removeUserData: () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem('user');
        }
    }
}
