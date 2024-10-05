import { Link } from 'react-router-dom';

export default function TasksItem({ task }) {
    return (
        <div class="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div class="task-actions">
                <Link to={`/remove/${task._id}`} className='delete-btn'>Изтрий</Link>
            </div>
        </div>
    );
}