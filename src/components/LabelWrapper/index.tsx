import React, {FC} from 'react';
import styles from "./styles.module.scss"

type Props = {
    label: string;
    error?: boolean;
    children: JSX.Element;
}

const LabelWrapper: FC<Props> = ({label, children, error}) => {
    const style = !error ? styles.label : `${styles.label} ${styles.error}`
    return (
        <div className={styles.wrapper}>
            <span className={style}>{label}</span>
            {children}
        </div>
    );
};

export default LabelWrapper;
