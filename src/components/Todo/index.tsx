import React, {FC} from 'react';
import Date from "../Date/Date";
import TodoFooter from "./TodoFooter";
import Icon from "../Icon";
import styles from "./styles.module.scss"

type Props = {
    created: Date;
    title: string;
    description: string;
    deadline: Date;
    status: "in process" | "completed" | "expired";
    author?: string;
}

const Todo: FC<Props> = (
    {
        created,
        title,
        description,
        deadline,
        status,
        author
    }) => {
    const style = (status: Props["status"]) => {
        switch (status) {
            case "in process":
                return `${styles.todo} ${styles.inProcess}`
            case "completed":
                return `${styles.todo} ${styles.complete}`;
            case "expired":
                return `${styles.todo} ${styles.expired}`;
            default:
                throw new Error("incorrect status")
        }
    }
    return (
        <div className={style(status)}>
            <h3>{title}</h3>
            <p>{description}</p>
            <TodoFooter
                deadline={deadline}
                status={status}
                created={created}
                author={author}
            />
            <div className={styles.iconWrapper}>

                <Icon iconName={"edit"} size={25} onClick={() => {
                }}/>

                <Icon iconName={"delete"} size={25} onClick={() => {
                }}/>
            </div>
            {status==="in process"&& <div className={styles.done}>
                <Icon iconName={"done"} size={35} onClick={() => {
                }}/>
            </div>}

        </div>
    );
};

export default Todo;
