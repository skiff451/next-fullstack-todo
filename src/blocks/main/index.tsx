import React, {useState} from 'react';
import DeadlineTodo from "../../components/DeadlineTodo";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import Todo from "../../components/Todo";
import styles from "./styles.module.scss";

const testDescription = `
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account 
of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. one who avoids a pain 
that produces no resultant pleasure?
`

const MainBlock = () => {
    const [search, setSearch] = useState("")
    return (
        <main className={styles.main}>
            <div className={styles.headerWrapper}>
                <DeadlineTodo
                    title={"Hello"}
                    deadlineDate={new Date()}
                    onClick={() => {
                    }}/>
                <Button
                    label={"create todo"}
                    variant={"primary"}
                    callback={() => {
                    }}/>
            </div>
            <div className={styles.searchWrapper}>
                <SearchBar searched={search} setSearched={setSearch}/>
                <Filters/>
            </div>

            <div className={styles.todoWrapper}>
                <Todo
                    title={"new todo"}
                    description={
                        testDescription}
                    created={new Date()}
                    status={"in process"}
                    deadline={new Date()}
                    author={"S.Serg"}
                />
            </div>
        </main>
    );
};

export default MainBlock;
