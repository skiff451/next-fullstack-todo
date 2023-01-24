import React, {FC} from 'react';
import {InputPropsType} from "../../types";
import LabelWrapper from "../../LabelWrapper";
import Input from "../Input";
import InputPassword from "../InputPassword";

type Props = {
    label: string
} & InputPropsType
const InputWithLabel: FC<Props> = ({type, label, value, setValue, placeholder, disabled, error}) => {

    switch (type) {
        case "text":
        case "email":
        case "search":
        case "date":
        case "time":
            return (
                <LabelWrapper label={label} error={error}>
                    <Input type={type}
                           value={value}
                           setValue={setValue}
                           disabled={disabled}
                           placeholder={placeholder}
                           error={error}
                    />
                </LabelWrapper>
            )
        case "password":
            return (
                <LabelWrapper label={label} error={error}>
                    <InputPassword
                        value={value}
                        setValue={setValue}
                        error={error}/>
                </LabelWrapper>
            )
        default:
            throw new Error("wrong type")
    }

};

export default InputWithLabel;
