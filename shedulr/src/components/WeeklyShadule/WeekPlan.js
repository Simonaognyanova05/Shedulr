import { useEffect, useState } from 'react';
import { getWeekPlan } from '../../services/getWeekPlan';
import WeekPlanItem from './WeekPlanItem';
import { useAuth } from '../../contexts/AuthContext';

export default function WeekPlan() {
    const [schedule, setSchedule] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        getWeekPlan(user._id)
            .then(res => {
                setSchedule(res);
            })
            .catch(e => {
                console.error("Грешка при намиране на задача!", e);
            });
    }, [user._id]);

    const addNewItem = (newItem) => {
        setSchedule(prevSchedule => [...prevSchedule, newItem]);
    };

    return (
        <>
            <h2>Моята програма</h2>
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
                        <th>Промяна</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(item => (
                        <WeekPlanItem key={item._id} schedule={item} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
