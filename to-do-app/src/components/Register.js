export default function Register() {
    return (
        <div class="container">
            <h2>Регистрация</h2>
            <form action="#" method="post">
                <input type="text" placeholder="Име" required />
                <input type="email" placeholder="Имейл" required />
                <input type="password" placeholder="Парола" required />
                <button type="submit">Регистрация</button>
            </form>
            <div class="links">
                <p>Вече имате акаунт? <a href="login.html">Вход</a></p>
            </div>
        </div>
    );
}