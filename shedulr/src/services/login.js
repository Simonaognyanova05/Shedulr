import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 

export async function login(username, password) {
    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;

        return user;
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            throw new Error('Потребителят не съществува!');
        } else if (error.code === 'auth/wrong-password') {
            throw new Error('Грешна парола!');
        } else {
            throw new Error('Възникна грешка при влизане!');
        }
    }
}
