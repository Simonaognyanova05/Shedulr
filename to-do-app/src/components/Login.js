export default function Login() {
    return (
        <div class="container">
            <h2>Вход</h2>
            <form action="#" method="post">
                <input type="email" placeholder="Имейл" required />
                <input type="password" placeholder="Парола" required />
                <button type="submit">Вход</button>
            </form>
            <div class="links">
                <p><a href="#">Забравена парола?</a></p>
                <p>Нямате акаунт? <a href="register.html">Регистрирайте се</a></p>
            </div>
        </div>
    );
}