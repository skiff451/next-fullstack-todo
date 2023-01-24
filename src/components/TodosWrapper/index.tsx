import React, {useEffect, useState} from 'react';
import Todo from "../Todo";
import {TodoApiType} from "../../api/types";
import {getAllTodos} from "../../api/todos";

const TodosWrapper = () => {
    const [todos, setTodos] = useState<TodoApiType[]>()

    // const queryTodos = async ()=>{
    //     setTodos(await getAllTodos())
    // }

    useEffect(() => {
        // queryTodos().then()
    }, [])

    const todosItems = todos?.map(item => (
        <Todo
            key={item.id}
            title={item.title}
            description={
                item.description}
            created={item.created}
            status={item.status}
            deadline={item.deadline}
            author={item.author}
        />))

    return (
        <>
            {todosItems}
        </>
    );
};

export default TodosWrapper;
