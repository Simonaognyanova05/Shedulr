import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { createWeeklyPlan } from "../services/createWeeklyPlan";

export default function CreateWeeklyShadule() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const createHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = Object.fromEntries(formData);

        const ownerId = user._id;
        try {
            const data = await createWeeklyPlan(hours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, ownerId);

            if (data) {
                navigate('/week-plan');
            } else {
                alert('Възникна грешка при създаването на графика');
            }
        } catch (e) {
            alert('Възникна грешка!');
        }
    }

    return (
        <div className="container">
            <h2>Създай задачи по часове</h2>
            <form onSubmit={createHandler}>
                <input type="text" name="hours" placeholder="Часови диапазон" required />
                <input type="text" name="monday" placeholder="Ангажимент понеделник" required />
                <input type="text" name="tuesday" placeholder="Ангажимент вторник" required />
                <input type="text" name="wednesday" placeholder="Ангажимент сряда" required />
                <input type="text" name="thursday" placeholder="Ангажимент четвъртък" required />
                <input type="text" name="friday" placeholder="Ангажимент петък" required />
                <input type="text" name="saturday" placeholder="Ангажимент събота" required />
                <input type="text" name="sunday" placeholder="Ангажимент неделя" required />

                <button type="submit">Добави задача</button>
            </form>
        </div>
    );
}