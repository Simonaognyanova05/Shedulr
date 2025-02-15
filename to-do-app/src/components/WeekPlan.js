export default function WeekPlan() {
    return (
        <>
            <h2>Моите Задачи</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Час</th>
                        <th>Понеделник</th>
                        <th>Вторник</th>
                        <th>Сряда</th>
                        <th>Четвъртък</th>
                        <th>Петък</th>
                        <th>Събота</th>
                        <th>Неделя</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08:00 - 09:00</td>
                        <td>Математика</td>
                        <td>Физика</td>
                        <td>Химия</td>
                        <td>Биология</td>
                        <td>История</td>
                        <td>Свободно</td>
                        <td>Свободно</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
}