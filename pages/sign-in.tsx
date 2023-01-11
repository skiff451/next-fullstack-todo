import React, {useState} from 'react';
import RegistrationBlock from "../src/blocks/auth/RegistrationBlock";
import LogInBlock from "../src/blocks/auth/LogInBlock";
import styles from "../styles/SignIn.module.scss"

const SignIn = () => {
    const [mode, setMode] = useState<"login" | "registration">("login")

    const onMode = () => {
        setMode((prevState) => {
                if (prevState === "login") {
                    return 'registration'
                } else {
                    return "login"
                }
            }
        )
    }

    return (
        <div className={styles.signIn}>
            <h1>
                {mode === "login" ? "LOGIN" : "REGISTRATION"}
            </h1>
            {mode === "login" ? <LogInBlock/> : <RegistrationBlock/>}
            <span className={styles.change} onClick={onMode}>
                {mode === "login"
                    ? "dont have an account?"
                    : "already have an account?"}
            </span>
        </div>
    );
};

export default SignIn;
