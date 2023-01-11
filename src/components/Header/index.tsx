import React, {FC, useEffect, useState} from 'react';
import Button from "../Button";
import {UserData} from "../../helpers/userData";
import {UserType} from "../../types";
import styles from "./styles.module.scss"

const Header: FC = () => {

    const [user, setUser] = useState<UserType | null | undefined>()

    useEffect(() => {
        const localUser = UserData.getUserData()
        setUser(localUser)
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.userData}>
                <span>{user?.name}</span>
                <span>{user?.email}</span>
            </div>

            <Button
                label={user?.name ? "logOut" : "logIn"}
                variant={"outlined"}
                callback={() => {

                }}
            />
        </header>

    );
};

export default Header;
