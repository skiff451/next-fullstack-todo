import React, {FC} from 'react';
import {InputErrorProps, InputPropsType} from "../../types";
import InputWithLabel from "../InputWithLabel";
import InputError from "../InputError";

type Props = Omit<InputPropsType, "error">
    & Omit<InputErrorProps, "setError">
    & { label: string }

const InputComposed: FC<Props> = (
    {
        label,
        value,
        setValue,
        type,
        placeholder,
        disabled,
        error,
        errorLabel,
    }) => {


    return (
        <div>
            <InputWithLabel
                label={label}
                type={type}
                value={value}
                setValue={setValue}
                error={error}
                placeholder={placeholder}
                disabled={disabled}
            />
            <InputError
                error={error}
                errorLabel={errorLabel}
            />
        </div>
    );
};

export default InputComposed;
