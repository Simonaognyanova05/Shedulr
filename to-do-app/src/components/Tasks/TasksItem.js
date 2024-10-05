
export default function TasksItem({task}) {
    return (
        <div class="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div class="task-actions">
                <button>Изтрий</button>
            </div>
        </div>
    );
}