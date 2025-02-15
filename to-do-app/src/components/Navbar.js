import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const { user } = useAuth();

    const gusetUser = (
        <ul>
            <li><Link to="/">Начало</Link></li>
            <li><Link to="/login">Вход</Link></li>
            <li><Link to="/register">Регистрация</Link></li>
        </ul>
    );

    const loggedUser = (
        <ul>
            <li><Link to="/">Начало</Link></li>
            <li><Link to="/create-task">Създай Задача</Link></li>
            <li><Link to="/task-list">Моите Задачи</Link></li>
            <li><Link to="/task-list">Създай седмично разписание</Link></li>
            <li><Link to="/task-list">Седмично разписание</Link></li>

            <li><Link to="/logout">Изход</Link></li>
        </ul>
    );
    return (
        <nav>
            <ul>
                {Boolean(user.username) ? loggedUser : gusetUser}
            </ul>

        </nav>
    );
}