import { db } from "../config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getWeekPlan(ownerId) {
    try {
        const q = query(collection(db, "shadule"), where("ownerId", "==", ownerId));
        const querySnapshot = await getDocs(q);

        const shadules = [];
        querySnapshot.forEach((doc) => {
            shadules.push({ id: doc.id, ...doc.data() });
        });

        return shadules;
    } catch (e) {
        console.log("Възникна грешка!");
        return [];
    }
}