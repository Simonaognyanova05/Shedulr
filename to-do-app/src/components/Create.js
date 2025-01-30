import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { createTask } from '../services/createTask'; 

export default function Create() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const createHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { title, description } = Object.fromEntries(formData);

        const ownerId = user._id;

        try {
            let data = await createTask(title, description, ownerId);

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
            <h2>Създай Задача</h2>
            <form onSubmit={createHandler}>
                <input type="text" name="title" placeholder="Заглавие на задача" required />
                <textarea name="description" placeholder="Описание на задачата" required></textarea>
                <button type="submit">Добави Задача</button>
            </form>
        </div>
    );
}
