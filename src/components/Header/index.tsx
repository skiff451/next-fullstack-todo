import React, {FC, useEffect, useState} from 'react';
import Button from "../Button";
import {logout as apiLogout} from "../../api/auth";
import {userData} from "../../helpers/userData";
import {refreshToken} from "../../helpers/refreshToken";
import {UserType} from "../../types";
import styles from "./styles.module.scss"

const Header: FC = () => {

    const [user, setUser] = useState<UserType | null | undefined>()

    useEffect(() => {
        const localUser = userData.getUserData()
        setUser(localUser)
    }, [])

    const logout = async () => {
        refreshToken.removeToken()
        userData.removeUserData()
        await apiLogout()
    }

    return (
        <header className={styles.header}>
            <div className={styles.userData}>
                <span>{user?.name}</span>
                <span>{user?.email}</span>
            </div>
            {user?.name
                ? <Button
                    label={"logOut"}
                    variant={"outlined"}
                    callback={logout}
                />
                : <Button
                    label={"logIn"}
                    variant={"outlined"}
                    callback={() => {

                    }}
                />}

        </header>

    );
};

export default Header;
