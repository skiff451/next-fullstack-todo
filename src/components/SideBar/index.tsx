import React, {useState} from 'react';
import Button from "../Button";
import Input from "../inputs/Input";
import styles from "./styles.module.scss"
import Filters from "./Filters";


const SideBar = () => {
    const [searchedTodo, setSearchedTodo] = useState('')
    return (
        <div className={styles.sideBar}>
            <Button
                label={"create todo"}
                variant={"primary"}
                callback={() => {
                }}/>
            <div className={styles.searchBar}>
                <div>
                    <Input type={"search"} value={searchedTodo} setValue={setSearchedTodo}/>
                </div>
                <Button
                    label={"search"}
                    variant={"outlined"}
                    callback={() => {
                    }}/>
            </div>
           <Filters/>

        </div>
    );
};

export default SideBar;
