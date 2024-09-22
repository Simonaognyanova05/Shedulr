import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/login">Вход</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
                <li><Link to="/create-task">Създай Задача</Link></li>
                <li><Link to="/task-list">Моите Задачи</Link></li>
            </ul>
        </nav>
    );
}