import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig"; 

export async function deleteTask(taskId) {
    if (!taskId) {
        throw new Error("Task ID is required.");
    }
    try {
        const taskRef = doc(db, "tasks", taskId); 
        await deleteDoc(taskRef);
        console.log("Task deleted successfully!");
    } catch (error) {
        console.error("Error deleting task: ", error);
        throw error;
    }
}
