import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; // Уверете се, че правилно сте конфигурирали Firebase

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return {
            user: {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
            },
            status: 200,
        };
    } catch (error) {
        return {
            error: error.message,
            status: error.code === "auth/user-not-found" ? 400 : 401,
        };
    }
}
