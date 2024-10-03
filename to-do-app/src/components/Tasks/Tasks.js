import { useEffect, useState } from "react";
import TasksItem from "./TasksItem";
import { getTasks } from "../../services/getTasks";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const { user } = useState();

    useEffect(() => {
        getTasks(user._id)
            .then(res => {
                setTasks(res);
            })
    }, [])
    return (
        <div class="container-task">
            <h2>Моите Задачи</h2>

            {tasks.length > 0
            ? tasks.map(x => <TasksItem task={x}/>)
        : 'Няма създадени задачи'}
            

        </div>
    );
}