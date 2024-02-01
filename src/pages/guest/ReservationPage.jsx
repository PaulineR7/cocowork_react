import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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

        <section>
            <h2>Réservation</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleReservation}>
                
                <label>
                    <select name="roomId">
                        <option value="1">Salle 1</option>
                        <option value="2">Salle 2</option>
                        <option value="3">Salle 3</option>
                    </select>
                </label>

                <label>
                    <select name="duration">
                        <option value="half-day">Half-Day</option>
                        <option value="full-day">Full-Day</option>
                    </select>
                </label>

                <label>
                    <input type="date" name='date'/>
                </label>

                <input type="submit" name="" id="" />
            </form>
        </section>

        <Footer />
        </>
    )
}

export default ReservationPage;