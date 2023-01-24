import {login} from "../../../api/auth";
import {refreshToken} from "../../../helpers/refreshToken";
import {userData} from "../../../helpers/userData";
import {SubmitType} from "../types";

export const submit = async <T extends SubmitType>(email: T, password: T, redirectCB: () => Promise<void>) => {
    const emailValid = email.validate()
    const passwordValid = password.validate()

    if (emailValid && passwordValid) {
        try {
            const {id, name: uName, email: uEmail, token}
                = await login({
                email: email.value,
                password: password.value
            })
            refreshToken.setToken(token)
            userData.setUserData({id, name: uName, email: uEmail})
            await redirectCB()
        } catch {
            email.validate({
                condition: false,
                errorLabel: "invalid credentials"
            })
            password.validate(
                {
                    condition: false,
                    errorLabel: "invalid credentials"
                }
            )
        }
    }
}
