import { useNavigate } from "react-router-dom";
import { login } from "../services/login";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { username, password } = Object.fromEntries(formData);

        let data = await login(username, password);

        if(data.status === 400){
            alert('Потребителят не съществува!');
            return;
        };

        if(data.status === 401){
            alert('Грешна парола!');
            return;
        }
        let result = await data.json();
        onLogin(result);
        navigate('/');

    }
    return (
        <div class="container">
            <h2>Вход</h2>
            <form onSubmit={loginHandler}>
                <input type="text" name="username" placeholder="Потребителско име" required />
                <input type="password" name="password" placeholder="Парола" required />
                <button type="submit">Вход</button>
            </form>
            <div class="links">
                <p><a href="#">Забравена парола?</a></p>
                <p>Нямате акаунт? <a href="register.html">Регистрирайте се</a></p>
            </div>
        </div>
    );
}