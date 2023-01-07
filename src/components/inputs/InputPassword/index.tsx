import React, {FC, useState} from 'react';
import Input from "../Input";
import Icon from "../../Icon";
import {InputPropsType} from "../../types";
import styles from "./styles.module.scss"
const InputPassword: FC<Omit<InputPropsType, "type">> = (
    {value, setValue, error, placeholder, disabled}
) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={styles.passwordInputWrapper}>
            {visible
                ? <Input type={"text"}
                         value={value}
                         setValue={setValue}
                         error={error}
                         disabled={disabled}
                         placeholder={placeholder}/>
                : <Input type={"password"}
                         value={value}
                         setValue={setValue}
                         error={error}
                         disabled={disabled}
                         placeholder={placeholder}/>
            }
            <span className={styles.icon}>
               {visible
                   ? <Icon
                       iconName={"visible"}
                       size={20}
                       onClick={() => {
                           setVisible(false)
                       }}/>
                   : <Icon
                       iconName={"not-visible"}
                       size={20}
                       onClick={() => {
                           setVisible(true)
                       }}/>}
            </span>
        </div>
    );
};

export default InputPassword;
