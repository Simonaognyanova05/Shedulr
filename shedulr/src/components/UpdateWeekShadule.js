import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { updateWeeklyPlan } from "../services/updateWeeklyPlan";

export default function UpdateWeekShadule() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const {shaduleId} = useParams();

    const updateHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = Object.fromEntries(formData);
        const ownerId = user._id;

        try {
            const data = await updateWeeklyPlan(hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, ownerId, shaduleId);

            if (data) {
                navigate('/week-plan');
            } else {
                alert("Неуспешно актуализиране на графика!");
            }
        } catch {
            alert("Неуспешно актуализиране на графика!");
        }
    }
    return (
        <div className="container">
            <h2>Обнови седмично разписание</h2>
            <form onSubmit={updateHandler}>
                <input type="text" name="hours" placeholder="Часови диапазон" required />
                <input type="text" name="monday" placeholder="Ангажимент понеделник" required />
                <input type="text" name="tuesday" placeholder="Ангажимент вторник" required />
                <input type="text" name="wednesday" placeholder="Ангажимент сряда" required />
                <input type="text" name="thursday" placeholder="Ангажимент четвъртък" required />
                <input type="text" name="friday" placeholder="Ангажимент петък" required />
                <input type="text" name="saturday" placeholder="Ангажимент събота" required />
                <input type="text" name="sunday" placeholder="Ангажимент неделя" required />

                <button type="submit">Обнови графика</button>
            </form>
        </div>
    );
}