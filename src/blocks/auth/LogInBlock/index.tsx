import React from 'react';
import InputComposed from "../../../components/inputs/InputComposed";
import Button from "../../../components/Button";
import {useInput} from "../../../components/hooks/useInput";
import {login} from "../../../api/auth";
import {regExp} from "../../../regExp";
import {refreshToken} from "../../../helpers/refreshToken";
import {userData} from "../../../helpers/userData";

import styles from "../styles.module.scss"

const LogInBlock = () => {
    const email = useInput(
        {
            regexp: regExp.email,
            errorMessage: "invalid email"
        }
    )
    const password1 = useInput(
        {
            regexp: regExp.password,
            errorMessage: "invalid password"
        }
    )

    const submit = async () => {
        const emailValid = email.validate()
        const passwordValid = password1.validate()

        if (emailValid && passwordValid) {
            const {id, name: uName, email: uEmail, token} = await login({
                email: email.value,
                password: password1.value
            })
            refreshToken.setToken(token)
            userData.setUserData({id, name: uName, email: uEmail})
        }
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
                value={password1.value}
                setValue={password1.setValue}
                error={password1.error}
                errorLabel={password1.errorLabel}
            />

            <Button label={"submit"} variant={"primary"} callback={submit}/>
        </div>
    );
};

export default LogInBlock;
