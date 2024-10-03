export async function getTasks(ownerId) {
    let data = await fetch('http://localhost:2000/tasks', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ownerId })
    });

    return data;
}