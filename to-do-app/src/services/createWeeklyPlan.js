import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function createWeeklyPlan(hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, ownerId) {
    try {
        await addDoc(collection(db, "shadule"), {
            hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, ownerId
        });

        return { status: 200, message: "Графикът е създаден успешно!" };
    } catch (e) {
        return { status: 500, message: "Графикът не е създаден!" };
    }
}