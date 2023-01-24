import {TodoApiType} from "./types";
import {axiosInstance} from "./axios-instance";
import routes from "./routes.json";
import {TodoType} from "../components/types";

export const getAllTodos = async () => {
    // const todos
    //     = await axiosInstance.get<TodoApiType[]>(routes.todos.all);
    // return todos.data
}
export const createTodo = async (data: Omit<TodoType, 'status'|'created'|'author'>) => {
    const {data: todoData}
        = await axiosInstance.post(routes.todos.create, data);
    return todoData.body
}
