import {useEffect, useState} from "react";
import {InputErrorRule, ValidationItemType} from "../components/types";

export const useInput = (validation: ValidationItemType | ValidationItemType[]) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false);
    const [errorLabel, setErrorLabel] = useState("")

    const checkError = (rule: InputErrorRule) => {
        if (!rule.regexp.test(value)) {
            setErrorLabel(rule.errorMessage);
            setError(true);
            return false
        } else {
            setErrorLabel("");
            setError(false);
            return true
        }
    }

    const validate = (validateCondition?: { condition: boolean, errorLabel: string }) => {
        if (validateCondition) {
            if (!validateCondition.condition) {
                setError(true);
                setErrorLabel(validateCondition.errorLabel)
                return false
            }
        }
        if (!Array.isArray(validation)) {
            return checkError(validation)
        } else {
            validation.forEach((ruleItem) => {
                return checkError(ruleItem)
            })
        }
    }


    useEffect(() => {
        setError(false)
    }, [value])


    return {
        value,
        setValue,
        error,
        errorLabel,
        validate,
    } as const
}
