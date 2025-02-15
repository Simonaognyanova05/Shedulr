import { db } from '../config/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export async function updateTask(date, title, description, deadline, ownerId, taskId) {
    try {
        const docRef = doc(db, "tasks", taskId);

        await updateDoc(docRef, {
            date: date,
            title: title,
            description: description,
            ownerId: ownerId,
            deadline: deadline,
            updatedAt: new Date()
        });

        console.log("Задачата с ID:", taskId, "е актуализирана успешно.");
        return { status: 200, message: "Задачата е актуализирана успешно!" };
    } catch (error) {
        console.error("Грешка при актуализиране на задачата: ", error);
        return { status: 500, message: "Грешка при актуализиране на задачата!" };
    }
}
