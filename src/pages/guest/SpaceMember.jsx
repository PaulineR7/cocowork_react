import Footer from "../../components/Footer";
import Header from "../../components/Header";

function SpaceMember() {
    return(
        <>
        <Header />
            <section>
                <h2>Bienvenue (nom de l'abonné)</h2>
                <div>
                    <h3>Réservation en cours</h3>
                    <article>
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
                    <article>
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