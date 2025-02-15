import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { login } from "../services/login"; 

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { username, password } = Object.fromEntries(formData);

        try {
            const user = await login(username, password);

            onLogin({
                _id: user.uid,
                name: user.displayName || '',
                username: user.email,
            });

            navigate('/'); 

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <h2>Вход</h2>
            <form onSubmit={loginHandler}>
                <input type="email" name="username" placeholder="Потребителско име (Email)" required />
                <input type="password" name="password" placeholder="Парола" required />
                <button type="submit">Вход</button>
            </form>
            <div className="links">
                <p><a href="#">Забравена парола?</a></p>
                <p>Нямате акаунт? <a href="register.html">Регистрирайте се</a></p>
            </div>
        </div>
    );
}
