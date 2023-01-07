import React, {FC} from 'react';
import styles from "./styles.module.scss"

type Props = {
    label: string;
}
const ErrorLabel: FC<Props> = ({label}) => {
    return (
        <span className={styles.errorLabel}>
            {label}
        </span>
    );
};

export default ErrorLabel;
