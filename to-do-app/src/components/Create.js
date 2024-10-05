import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/createTask';
import { useAuth } from '../contexts/AuthContext';

export default function Create() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const createHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { title, description } = Object.fromEntries(formData);

        const ownerId = user._id;

        let data = await createTask(title, description, ownerId);

        if(data.status === 200){
            navigate('/task-list');
        }
    }
    return (
        <div class="container">
            <h2>Създай Задача</h2>
            <form onSubmit={createHandler}>
                <input type="text" name="title" placeholder="Заглавие на задача" required />
                <textarea name="description" placeholder="Описание на задачата" required></textarea>
                <button type="submit">Добави Задача</button>
            </form>
        </div>
    );
}