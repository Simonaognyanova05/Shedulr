export default function Home() {
    return (
        <>
            <div className="hero">
                <h1>Добре дошли в Schedulr</h1>
                <p>Управлявайте задачите си лесно и ефективно. Регистрирайте се днес и планирайте ежедневието си!</p>
            </div>

            <div className="features">
                <div className="feature-box">
                    <h3>Организация</h3>
                    <p>Създавайте, управлявайте и следете своите задачи с лекота.</p>
                </div>
                <div className="feature-box">
                    <h3>Проследяване</h3>
                    <p>Следете напредъка си и завършвайте задачите си навреме.</p>
                </div>
                <div className="feature-box">
                    <h3>Достъпност</h3>
                    <p>Лесен достъп до задачите ви от всяко устройство.</p>
                </div>
            </div>
        </>
    );
}