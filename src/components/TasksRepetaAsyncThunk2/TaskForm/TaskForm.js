import { useDispatch } from "react-redux";

import { addTask } from "../../../redux/TaskAsyncThunk2/asyncThunkOperations2";
import { Button } from "components/TasksRepetaAsyncThunk2/Button/Button";

import css from "./TaskForm.module.css";


export const TaskForm = () => {
    //! Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        //! Вызываем генератор экшена и передаем текст задачи для поля payload
        //! Отправляем результат - экшен создания задачи
        dispatch(addTask(form.elements.text.value));
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.field}
                type="text"
                name="text"
                placeholder="Enter task text..."
            />
            <Button type="submit">Add task</Button>
        </form>
    );
};
