import React, {useState} from 'react';
import DeadlineTodo from "../../components/DeadlineTodo";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import TodosWrapper from "../../components/TodosWrapper";
import ModalWrapper from "../../components/Modal/ModalWrapper";
import CreateTodoModalComponent from "../../components/Modal/CreateTodoModalComponent";
import styles from "./styles.module.scss";


const MainBlock = () => {
    const [search, setSearch] = useState("")
    const [modal, setModal] = useState(false)
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
                        setModal(true)
                    }}/>
            </div>
            <div className={styles.searchWrapper}>
                <SearchBar searched={search} setSearched={setSearch}/>
                <Filters/>
            </div>

            <div className={styles.todoWrapper}>
                <TodosWrapper/>
            </div>

            {modal && <ModalWrapper setOpen={setModal}>
                < CreateTodoModalComponent setOpen={setModal}/>
            </ModalWrapper>}
        </main>
    );
};

export default MainBlock;
