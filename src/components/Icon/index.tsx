import React, {FC} from 'react';
import Image from "next/image"
import styles from "./styles.module.scss"

type Props = {
    iconName: string;
    size: number;
    // color?: string
    onClick?: () => void
}
const Icon: FC<Props> = ({iconName, size, onClick,}) => {
    return (
        <Image
            className={onClick && styles.icon}
            src={`./assets/icons/${iconName}.svg`}
            width={size}
            height={size}
            alt={`${iconName} icon`}
            onClick={onClick}/>
    );
};

export default Icon;
