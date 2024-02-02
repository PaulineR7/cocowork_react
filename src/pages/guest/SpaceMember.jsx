import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { jwtDecode } from "jwt-decode";
import Header from "../../components/Header";
import '../guest/style/SpaceMember.scss';

function SpaceMember() {
    const token = localStorage.getItem("jwt");

    const [members, setMembers] = useState();

    useEffect(() => {
        async function fetchData () {
            const usersResponse = await fetch("http://localhost:3005/api/users/valid" + jwtDecode(token).id, 
            { 
            headers: {
                Authorization : "Bearer " + token,
            }
        })  
        
            const usersResponseData = await usersResponse.json();
           
            setMembers(usersResponseData)
            
        };
        fetchData();
    }, []);

    console.log(jwtDecode(token))
    return(
        <>
        <Header />
            <section>
                <h2 className="titlespacemember">Bienvenue {jwtDecode(token).name}</h2>
                <div>
                    <h3>Réservation en cours</h3>
                    <article className="resa-member">
                        <p>Nom de la salle</p>
                        <p>durée</p>
                        <img src="" alt="" />
                        <p>statut</p>
                        <p>Date</p>
                        <button>Annuler</button>
                    </article>
                </div>

                <div>
                    <h3>Historique de vos réservations</h3>
                    <article className="resa-member">
                        <p>Nom de la salle</p>
                        <p>durée</p>
                        <img src="" alt="" />
                        <p>statut</p>
                        <p>Date</p>
                    </article>
                </div>
            </section>
        <Footer />
        </>
    )
}

export default SpaceMember;