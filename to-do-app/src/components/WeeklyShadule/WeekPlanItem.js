import { Link } from 'react-router-dom';

export default function WeekPlanItem({ shad }) {
    return (
        <tr>
            <td>{shad.hours}</td>
            <td>{shad.monday}</td>
            <td>{shad.tuesday}</td>
            <td>{shad.wednesday}</td>
            <td>{shad.thursday}</td>
            <td>{shad.friday}</td>
            <td>{shad.saturday}</td>
            <td>{shad.sunday}</td>
            <td><Link to={`/updateWeekPlan/${shad.id}`} className='delete-btn' style={{ marinButtom: "50px", margin: "10px" }}>Редактиране</Link></td>
        </tr>
    );
}