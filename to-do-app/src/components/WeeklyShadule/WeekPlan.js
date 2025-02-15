import WeekPlanItem from './WeekPlanItem';

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
                    <WeekPlanItem />

                </tbody>
            </table>
        </>
    );
}