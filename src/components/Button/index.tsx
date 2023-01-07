import React, {FC} from 'react';
import styles from "./styles.module.scss"

type Props = {
    label: string;
    variant: "primary" | "outlined";
    callback: () => void
    type?: "button" | "submit"
}

const Button: FC<Props> = ({label, variant, callback, type = "button"}) => {

    const getStyle = () => {
        switch (variant) {
            case "primary":
                return `${styles.primary} ${styles.common}`
        }
    }

    return (
        <button className={getStyle()} type={type} onClick={callback}>
            {label}
        </button>
    );
};

export default Button;
