import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { updateTask } from '../services/updateTask';

export default function Update() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { taskId } = useParams();

    const updateHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { date, title, description, deadline } = Object.fromEntries(formData);

        const ownerId = user._id;

        try {
            let data = await updateTask(date, title, description, deadline, ownerId, taskId);

            if (data) {
                navigate('/task-list');
            } else {
                alert('Възникна грешка при създаване на задачата');
            }
        } catch (error) {
            alert('Грешка при създаване на задачата: ' + error.message);
        }
    };

    return (
        <div className="container">
            <h2>Обновяване на задача</h2>
            <form onSubmit={updateHandler}>
                <p>Дата на създаване на задачата:</p>
                <input type="date" name="date" placeholder="Дата на създаване" required />
                <input type="text" name="title" placeholder="Заглавие на задача" required />
                <textarea name="description" placeholder="Описание на задачата" required></textarea>
                <p>Краен срок:</p>
                <input type="date" name="deadline" placeholder="Краен срок" required />
                <button type="submit">Добави задача</button>
            </form>
        </div>
    );
}
