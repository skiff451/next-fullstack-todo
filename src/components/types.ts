import React from "react";

export type InputType = "text" | "password" | "email" | "search" | "date" | "time"
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

export type TodoType = {
    created: Date;
    title: string;
    description: string;
    deadline: Date;
    status: "in process" | "completed" | "expired";
    author?: string;
}
