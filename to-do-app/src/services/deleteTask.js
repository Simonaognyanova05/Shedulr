export async function deleteTask(taskId) {
    let data = await fetch(`http://localhost:2000/remove/${taskId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });

    return data;
}