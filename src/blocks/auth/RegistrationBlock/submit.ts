import {SubmitType} from "../types";
import {registration} from "../../../api/auth";
import {refreshToken} from "../../../helpers/refreshToken";
import {userData} from "../../../helpers/userData";

export const submit = async <T extends SubmitType>(name: T, email: T, password1: T, password2: T, redirectCB: () => Promise<void>) => {
    const nameValid = name.validate()
    const emailValid = email.validate()
    const passwordValid = password1.validate()
    const compatiblePassword = password2.validate({
        condition: password1.value === password2.value,
        errorLabel: "incompatible password"
    })

    if (nameValid && emailValid && passwordValid && compatiblePassword) {
        try {
            const {id, name: uName, email: uEmail, token} = await registration({
                name: name.value,
                email: email.value,
                password: password1.value
            })

            refreshToken.setToken(token)
            userData.setUserData({id, name: uName, email: uEmail})
            await redirectCB()
        } catch (e) {
            email.validate({
                condition: false,
                errorLabel: "user has been registered with this email"
            })
        }

    }
}
