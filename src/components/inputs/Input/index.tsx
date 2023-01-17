import React, {FC} from 'react';
import {InputPropsType} from "../../types";
import styles from "./styles.module.scss"
const Input: FC<InputPropsType> = ({type, value, setValue, placeholder, disabled, error}) => {
    const style = !error ? styles.Input : `${styles.Input} ${styles.error}`
    return (
        <input className={style}
               type={type}
               value={value}
               onChange={(e) => {
                   setValue(e.target.value)
               }}
               placeholder={placeholder}
               disabled={disabled}
        />
    );
};

export default Input;
