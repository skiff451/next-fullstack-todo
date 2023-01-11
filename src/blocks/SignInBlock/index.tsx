import React from 'react';
import InputComposed from "../../components/inputs/InputComposed";
import Button from "../../components/Button";
import {useInput} from "../../components/hooks/useInput";
import {registration} from "../../api/registartion";
import {regExp} from "../../regExp";
import {refreshToken} from "../../helpers/refreshToken";
import styles from "./styles.module.scss"
import {UserData} from "../../helpers/userData";

const SignInBlock = () => {
    const name = useInput(
        {
            regexp: regExp.basic,
            errorMessage: "invalid name"
        }
    )
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
    const password2 = useInput(
        {
            regexp: regExp.password,
            errorMessage: "invalid password"
        }
    )

    const submit = async () => {
        const nameValid = name.validate()
        const emailValid = email.validate()
        const passwordValid = password1.validate()
        const compatiblePassword = password2.validate({
            condition: password1.value === password2.value,
            errorLabel: "incompatible password"
        })

        if (nameValid && emailValid && passwordValid && compatiblePassword) {
            const {id, name: uName, email: uEmail, token} = await registration({
                name: name.value,
                email: email.value,
                password: password1.value
            })

            refreshToken.setToken(token)
            UserData.setUserData({id, name: uName, email: uEmail})
        }
    }

    return (
        <div className={styles.signIn}>
            <InputComposed
                type={'text'}
                label={"name"}
                value={name.value}
                setValue={name.setValue}
                error={name.error}
                errorLabel={name.errorLabel}
            />
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
            <InputComposed
                type={'password'}
                label={"confirm password"}
                value={password2.value}
                setValue={password2.setValue}
                error={password2.error}
                errorLabel={password2.errorLabel}
            />
            <Button label={"submit"} variant={"primary"} callback={submit}/>
        </div>
    );
};

export default SignInBlock;
