export default function Create() {
    return (
        <div class="container">
            <h2>Създай Задача</h2>
            <form action="#" method="post">
                <input type="text" placeholder="Заглавие на задача" required />
                <textarea placeholder="Описание на задачата" required></textarea>
                <button type="submit">Добави Задача</button>
            </form>
        </div>
    );
}