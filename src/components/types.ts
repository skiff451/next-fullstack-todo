import React from "react";

export type InputType = "text" | "password" | "email" | "search"
export type InputPropsType = {
    type: InputType;
    placeholder?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
    disabled?: boolean;
    error?: boolean;
}

export type InputErrorRule = {
    regexp: RegExp;
    errorMessage: string;
}

export type InputErrorProps = {
    error: boolean;
    errorLabel: string;
}

export type ValidationItemType = {
    regexp: RegExp;
    errorMessage: string;
}
