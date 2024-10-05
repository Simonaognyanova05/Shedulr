export async function getTasks(ownerId) {
    let data = await fetch(`http://localhost:2000/tasks/${ownerId}`);

    return data;
}