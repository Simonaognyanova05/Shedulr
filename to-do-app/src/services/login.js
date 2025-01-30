import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Импортираме необходимите Firebase методи

// Сървис за вход в Firebase
export async function login(username, password) {
    const auth = getAuth();

    try {
        // Опитваме се да влезем с email и парола
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user; // Вземаме потребителя от резултата

        // Връщаме данни за потребителя
        return user;
    } catch (error) {
        // Ако възникне грешка, хвърляме съответното съобщение
        if (error.code === 'auth/user-not-found') {
            throw new Error('Потребителят не съществува!');
        } else if (error.code === 'auth/wrong-password') {
            throw new Error('Грешна парола!');
        } else {
            throw new Error('Възникна грешка при влизане!');
        }
    }
}
