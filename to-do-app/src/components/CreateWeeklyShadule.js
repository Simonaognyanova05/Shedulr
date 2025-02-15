export default function CreateWeeklyShadule(){
    return(
        <div className="container">
            <h2>Създай задачи по часове</h2>
            <form>
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