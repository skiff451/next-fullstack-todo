import React, {FC} from 'react';
import ErrorLabel from "./ErrorLabel";
import {InputErrorProps} from "../../types";

const InputError: FC<InputErrorProps> = ({error, errorLabel}) => {
    return !error ? null : <ErrorLabel label={errorLabel}/>
};
export default InputError;
