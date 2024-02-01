import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../guest/style/MettingRoomPage.scss';
import { useEffect, useState } from 'react';

function MettingRoomPage() {
   
        const [meetingRooms, setMeetingRooms] = useState(null);
    
        useEffect(()=>{
            (async()=>{
                const meetingRoomsResponse = await fetch ('http://localhost:3005/api/meetingRooms')
                const meetingRoomsResponseData = await meetingRoomsResponse.json()
    
                setMeetingRooms(meetingRoomsResponseData);
        })()
        },[])
    


    return(
        <>
        <Header />
        <h2>Salle de réunion</h2>
        {meetingRooms ? (
        <>
            {meetingRooms.map((meetingRoom) => {
            return (
                <section className="section-mettingroom" key={meetingRoom.id}>
                <article className="article-mettingroom">
                    <img className='mettingroom-img' src={meetingRoom.imageUrl} alt="Image de la salle de réunion" />
                    <h3>{meetingRoom.name}</h3>
                    <p>{meetingRoom.description}</p>
                    <p>{meetingRoom.price}</p>
                    <Link to='/reservation'><button className="btn">Réserver</button></Link>
                </article>
                </section>
            );
            })}
        </>
        ) : (
            <p>En attente de chargement</p>
        )}
        <Footer />
        </>
    );
}

export default MettingRoomPage;