import { Link } from 'react-router-dom';

export default function WeekPlanItem({ schedule }) {
    return (
        <tr>
            <td>{schedule.hours}</td>
            <td>{schedule.monday}</td>
            <td>{schedule.tuesday}</td>
            <td>{schedule.wednesday}</td>
            <td>{schedule.thursday}</td>
            <td>{schedule.friday}</td>
            <td>{schedule.saturday}</td>
            <td>{schedule.sunday}</td>
            <td><Link to={`/updateWeekPlan/${schedule.id}`} className='delete-btn' style={{ marinButtom: "50px", margin: "10px" }}>Редактиране</Link></td>
        </tr>
    );
}