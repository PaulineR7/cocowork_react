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
    


return (
    <>
        <Header />
        <h2>Salles de réunion</h2>
        <section className="section-mettingroom">
        {meetingRooms ? (
            <>
            {meetingRooms.map((meetingRoom) => (
                <article className="article-mettingroom" key={meetingRoom.id}>
                <img className='mettingroom-img' src={meetingRoom.imageUrl} alt="Image de la salle de réunion" />
                <h3>{meetingRoom.name}</h3>
                <p>{meetingRoom.description}</p>
                <p>{meetingRoom.price}</p>
                <Link to='/reservation'><button className="btn">Réserver</button></Link>
                </article>
            ))}
            </>
        ) : (
            <p>En attente de chargement</p>
        )}
        </section>
        <Footer />
    </>
    );
}
        
export default MettingRoomPage;