import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTask } from "../services/deleteTask";

export default function Delete() {
    const navigate = useNavigate();
    const { taskId } = useParams();

    useEffect(() => {
        deleteTask(taskId)
            .then(() => {
                alert("Задачата е изпълнена!");
                navigate("/task-list");
            })
            .catch((error) => {
                alert("Неуспешно изпълнение на задача!");
                console.error(error);
            });
    }, [taskId, navigate]);

    return null;
}
