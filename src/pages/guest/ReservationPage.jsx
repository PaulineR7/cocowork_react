import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ReservationPage() {
    return(
        <>
        <Header />

        <section>
            <h2>Réservation</h2>
            <form>
                
                <label>
                    <select>
                        <option value="1">Salle 1</option>
                        <option value="2">Salle 2</option>
                        <option value="3">Salle 3</option>
                    </select>
                </label>
                <label>
                    <select>
                        <option>1/2 journée</option>
                        <option>journée entière</option>
                    </select>
                </label>
                <label>
                    <input type="date" name='period'/>
                </label>
            </form>
        </section>

        <Footer />
        </>
    )
}

export default ReservationPage;