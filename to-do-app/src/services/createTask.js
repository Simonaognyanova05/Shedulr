import { db } from '../config/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

export async function createTask(title, description, deadline, ownerId) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            title: title,
            description: description,
            ownerId: ownerId,
            deadline: deadline,
            createdAt: new Date() 
        });

        console.log("Задачата е създадена с ID: ", docRef.id);
        return { status: 200, message: "Задачата е създадена успешно!" };
    } catch (error) {
        console.error("Грешка при създаване на задача: ", error);
        return { status: 500, message: "Грешка при създаване на задачата!" };
    }
}
