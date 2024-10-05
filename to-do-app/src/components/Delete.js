import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTask } from "../services/deleteTask";

export default function Delete() {
    const navigate = useNavigate();
    const { taskId } = useParams();

    useEffect(() => {
        deleteTask(taskId)
            .then(() => {
                navigate('/task-list');
            })
    }, []);

    alert('Задачата е изтрита успешно!');
    return null;
}