import React, {useState} from 'react';
import ButtonGroup from "./ButtonGroup";
import RadioGroup from "./RadioGroup";
import styles from "./styles.module.scss"

const Filters = () => {
    const [checkedItem, setCheckedItem] = useState("expiration date")

    return (
        <div className={styles.filters}>
            <RadioGroup checkedItem={checkedItem} setCheckedItem={setCheckedItem}/>
            <ButtonGroup/>
        </div>
    );
};

export default Filters;
