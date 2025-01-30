import { db } from '../config/firebaseConfig';  
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function getTasks(ownerId) {
    try {
        const q = query(collection(db, "tasks"), where("ownerId", "==", ownerId));
        const querySnapshot = await getDocs(q);

        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push({ id: doc.id, ...doc.data() });
        });

        return tasks;
    } catch (error) {
        console.error("Грешка при извличане на задачи: ", error);
        return [];
    }
}
