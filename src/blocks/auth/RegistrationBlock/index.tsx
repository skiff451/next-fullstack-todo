import React from 'react';
import InputComposed from "../../../components/inputs/InputComposed";
import Button from "../../../components/Button";
import {useInput} from "../../../hooks/useInput";
import { useRouter } from 'next/router'
import {submit} from "./submit";
import {regExp} from "../../../regExp";
import styles from "../styles.module.scss"

const RegistrationBlock = () => {
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

    const router = useRouter()

    const submitHandler = async () => {
        await submit(name, email, password1, password2, async () => {
            await router.push('')
        })
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
            <Button label={"submit"} variant={"primary"} callback={submitHandler}/>
        </div>
    );
};

export default RegistrationBlock;
