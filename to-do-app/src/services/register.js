import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function register(name, username, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        return { status: 200, user: userCredential.user };
    } catch (error) {
        console.error("Error during registration:", error);
        return { status: 500, error: error.message };
    }
}
