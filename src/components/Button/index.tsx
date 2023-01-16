import React, {FC} from 'react';
import styles from "./styles.module.scss"

type Props = {
    label: string;
    variant: "primary" | "outlined";
    callback: () => void;
    type?: "button" | "submit";
    style?:{
        color?: string;
        background?: string;
        border?: string;
        width?: string;
        height?: string;
    }
}

const Button: FC<Props> = ({label, variant, callback, type = "button", style}) => {

    const getStyle = () => {
        switch (variant) {
            case "primary":
                return `${styles.primary} ${styles.common}`
            case "outlined":
                return `${styles.outlined} ${styles.common}`
        }
    }

    return (
        <button style={style} className={getStyle()} type={type} onClick={callback}>
            {label}
        </button>
    );
};

export default Button;
