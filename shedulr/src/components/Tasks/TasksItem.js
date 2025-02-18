import { Link } from 'react-router-dom';

export default function TasksItem({ task }) {
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>Дата на създаване: {task.date}</p>
            <p>Описание: {task.description}</p>
            <p>Краен срок: {task.deadline}</p>
            <div className="task-actions">
                <Link to={`/remove/${task.id}`} className='delete-btn' style={{margin: "10px"}}>Отметни като изпълнена</Link>
                <Link to={`/update/${task.id}`} className='delete-btn' style={{margin: "10px"}}>Редактиране</Link>
            </div>
        </div>
    );
}