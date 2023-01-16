import React, {FC} from 'react';
import styles from "./styles.module.scss"

type Props = {
    label: string;
    checked: string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}

const RadioButton: FC<Props> = ({label, checked, onChange}) => {
    return (
        <span className={styles.radioButton}>
            <span className={styles.radio}>
                <input
                    type="radio"
                    id={`${label}Id`}
                    name={`name: ${label}`}
                    value={label}
                    checked={checked === label}
                    onChange={(e) => {
                        onChange(e.target.value)
                    }}
                />
            </span>
            <label htmlFor={`${label}Id`}>{label}</label>
        </span>

    );
};

export default RadioButton;
