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
        </tr>
    );
}