export async function createTask(title, description, ownerId) {
    let data = await fetch('http://localhost:2000/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, description, ownerId })
    });

    return data;
}