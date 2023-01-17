import React, {FC} from 'react';
import Date from "../Date/Date";
import Time from "../Date/Time";
import styles from "./styles.module.scss"

type Props = {
    deadlineDate: Date;
    title: string;
    onClick: () => void;
}

const DeadlineTodo: FC<Props> = ({deadlineDate, title, onClick}) => {
    return (
        <div
            className={styles.deadlineTodo}
            onClick={onClick}>
            <h4>Next deadline</h4>

            <div>
                <span>title:</span>
                <span>{" "}</span>
                <span>{title}</span>
            </div>

            <div>
                <span>deadline:</span>
                <span>{" "}</span>
                <Date date={deadlineDate}/>
                <span>{" "}</span>
                <Time date={deadlineDate}/>
            </div>
        </div>
    );
};

export default DeadlineTodo;
