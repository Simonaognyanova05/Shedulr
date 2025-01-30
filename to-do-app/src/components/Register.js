import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { register } from "../services/register";

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const { name, username, password, rePassword } = Object.fromEntries(formData);

        if (username.length < 6) {
            alert('Потребителското име трябва да е минимум 6 символа!');
            return;
        }
        if (password !== rePassword) {
            alert('Паролите не съвпадат!');
            return;
        };
        if (password.length < 6) {
            alert('Вашата парола е слаба!');
            return;
        };

        let result = await register(name, username, password);

        if (result.status === 200) {
            onRegister(result.user);
            alert('Регистрацията е успешна!');
            navigate('/');
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="container">
            <h2>Регистрация</h2>
            <form onSubmit={registerHandler}>
                <input type="text" name="name" placeholder="Име" required />
                <input type="text" name="username" placeholder="Имейл" required />
                <input type="password" name="password" placeholder="Парола" required />
                <input type="password" name="rePassword" placeholder="Потвърдете паролата" required />
                <button type="submit">Регистрация</button>
            </form>
            <div className="links">
                <p>Вече имате акаунт? <Link to="/login">Вход</Link></p>
            </div>
        </div>
    );
}