import React from 'react';
import InputComposed from "../../../components/inputs/InputComposed";
import Button from "../../../components/Button";
import {useInput} from "../../../hooks/useInput";
import {submit} from "./submit";
import {useRouter} from "next/router"
import {regExp} from "../../../regExp";
import styles from "../styles.module.scss"

const LogInBlock = () => {
    const email = useInput(
        {
            regexp: regExp.email,
            errorMessage: "invalid email"
        }
    )
    const password = useInput(
        {
            regexp: regExp.password,
            errorMessage: "invalid password"
        }
    )

    const router = useRouter()

    const submitHandler = async () => {
        await submit(email, password, async () => {
            await router.push('/')
        })

    }

    return (
        <div className={styles.signIn}>
            <InputComposed
                type={'email'}
                label={"email"}
                value={email.value}
                setValue={email.setValue}
                error={email.error}
                errorLabel={email.errorLabel}
            />
            <InputComposed
                type={'password'}
                label={"password"}
                value={password.value}
                setValue={password.setValue}
                error={password.error}
                errorLabel={password.errorLabel}
            />

            <Button label={"submit"} variant={"primary"} callback={submitHandler}/>
        </div>
    );
};

export default LogInBlock;
