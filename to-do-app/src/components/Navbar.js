import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const { user } = useAuth();

    const gusetUser = (
        <>
            <li><Link to="/login">Вход</Link></li>
            <li><Link to="/register">Регистрация</Link></li>
        </>
    );

    const loggedUser = (
        <>
            <li><Link to="/create-task">Създай Задача</Link></li>
            <li><Link to="/task-list">Моите Задачи</Link></li>
        </>
    );
    return (
        <nav>
            <ul>
                <li><Link to="/">Начало</Link></li>
                {user ? loggedUser : gusetUser}
                <li>{user.name}</li>
            </ul>

        </nav>
    );
}