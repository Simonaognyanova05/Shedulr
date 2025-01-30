import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import TasksItem from "./TasksItem";
import { getTasks } from "../../services/getTasks";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const { user } = useAuth();

    const ownerId = user._id;  

    useEffect(() => {
        getTasks(ownerId)
            .then(res => {
                setTasks(res); 
            })
            .catch(error => {
                console.error("Грешка при извличане на задачи", error);
            });
    }, [ownerId]);  

    return (
        <div className="container-task">
            <h2>Моите Задачи</h2>

            {tasks.length > 0
                ? tasks.map(x => <TasksItem key={x.id} task={x} />) 
                : 'Няма създадени задачи'}
        </div>
    );
}
