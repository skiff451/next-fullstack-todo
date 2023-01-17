import React, {FC} from 'react';
import styles from "../styles.module.scss";
import Time from "../../Date/Time";
import Date from "../../Date/Date";

type Props = {
    created: Date;
    deadline: Date;
    status: "in process" | "completed"| "expired";
    author?: string;
}

const TodoFooter: FC<Props> = ({deadline, author, status, created}) => {
    return (
        <div className={styles.footer}>
            <div className={styles.text}>
                <div>
                    <span className={styles.label}>deadline:</span>
                    {"   "}
                    <Time date={deadline}/>
                    {"   "}
                    <Date date={deadline}/>
                </div>
                <div>
                    <span className={styles.label}>status:</span>
                    {"   "}
                    <span>{status}</span>
                </div>
            </div>


            <div className={styles.text}>
                <div>
                    <span className={styles.label}>created:</span>
                    {"   "}
                    <Time date={created}/>
                    {"   "}
                    <Date date={created}/>
                </div>
                <div>
                    <span className={styles.label}>author:</span>
                    {"   "}
                    <span>{author}</span>
                </div>
            </div>
        </div>
    );
};

export default TodoFooter;
