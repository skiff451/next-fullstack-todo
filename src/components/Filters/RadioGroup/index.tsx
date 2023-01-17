import React, {FC} from 'react';
import RadioButton from "../../inputs/RadioButton";
import styles from "../styles.module.scss";

type Props = {
    checkedItem: string;
    setCheckedItem: React.Dispatch<React.SetStateAction<string>>;
}

const RadioGroup: FC<Props> = ({checkedItem, setCheckedItem}) => {
    return (
        <div className={styles.radioGroup}>
            <RadioButton label={"expiration date"} checked={checkedItem} onChange={setCheckedItem}/>
            <RadioButton label={"latest"} checked={checkedItem} onChange={setCheckedItem}/>
            <RadioButton label={"oldest"} checked={checkedItem} onChange={setCheckedItem}/>
        </div>
    );
};

export default RadioGroup;
