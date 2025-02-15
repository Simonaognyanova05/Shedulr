import { db } from "../config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function updateWeeklyPlan(hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, ownerId, shadId) {
    try{
        const docRef = doc(db, "shadule", shadId);

        await updateDoc(docRef, {
            hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, ownerId
        });

        return {res: 200, message: "Графикът беше редактиран успешно!"};
    }catch(e){
        console.error("Възникна грешка!");
        return [];
    }
}