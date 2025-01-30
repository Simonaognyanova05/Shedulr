import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTask } from "../services/deleteTask";

export default function Delete() {
    const navigate = useNavigate();
    const { taskId } = useParams();

    useEffect(() => {
        deleteTask(taskId)
            .then(() => {
                alert("Задачата беше изтрита успешно!");
                navigate("/task-list");
            })
            .catch((error) => {
                alert("Неуспешно изтриване на задачата!");
                console.error(error);
            });
    }, [taskId, navigate]);

    return null;
}
