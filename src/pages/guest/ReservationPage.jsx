import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/ReservationPage.scss';

function ReservationPage() {

    const [message, setMessage] = useState(null);
    const token = localStorage.getItem('jwt');

    const handleReservation = async (event) => {
        event.preventDefault();

        const date = event.target.date.value;
        const duration = event.target.duration.value;
        const MeetingRoomId = event.target.roomId.value;

        const reservationData = {
            date,
            duration,
            MeetingRoomId,
        };

        const reservationDataJson = JSON.stringify(reservationData);
        
        const reservationResponse = await fetch("http://localhost:3005/api/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: reservationDataJson
        })

        if (reservationResponse.status === 201) {
            setMessage("Reservation Requested !");
            event.target.reset();
            
        } else {
            setMessage("Error creating Thread.");
        }

        setTimeout(() => {
            setMessage(null);
        }, 2000);
    }

    return(
        <>
        <Header />

        <section className="section-resa">
            <h2 className="title-resa">Réservation</h2>
            {message && <p>{message}</p>}
            <form className="form-resa" onSubmit={handleReservation}>
                
                <label className="label-resa resa1"> Choix de la salle
                    <select name="roomId">
                        <option value="1">Salle 1</option>
                        <option value="2">Salle 2</option>
                        <option value="3">Salle 3</option>
                    </select>
                </label>

                <label className="label-resa"> Durée
                    <select name="duration">
                        <option value="half-day">Half-Day</option>
                        <option value="full-day">Full-Day</option>
                    </select>
                </label>

                <label className="label-resa"> Date
                    <input type="date" name='date'/>
                </label>

                <input className="btn" type="submit" name="" id="" />
            </form>
        </section>

        <Footer />
        </>
    )
}

export default ReservationPage;