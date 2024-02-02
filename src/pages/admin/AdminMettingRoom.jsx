import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './../admin/style/AdminMettingRoomPage.scss';

function AdminMeetingRoom() {
    return(
        <>
        <Header />

        <section>
            <h2 className="title-mettingroom">Gestions des salles de réunion</h2>
            
            <div>
                <h3>Liste des salles de réunions</h3>
                <article>
                    <p>Nom</p>
                    <img className="img-mettingroom" src="../assets/img/mettingroom.webp" alt="chaises table" />
                    <p>Description</p>
                    <p>Prix</p>
                </article>
            </div>

            <div>
                <h3>Création d'une salle de réunion</h3>
                <form>
                    <label>
                        <input type="text" name="name" placeholder="Nom de la salle"/>
                    </label>
                    <label>
                        <input type="file" name="image" placeholder="Nom"/>
                    </label>
                    <label>
                        <textarea type="text" name="name" placeholder="Description de la salle"/>
                    </label>
                    <label>
                        <input type="text" name="name" placeholder="Prix Hors Taxe à la demie journée"/>
                    </label>
                    <button className="btn">Créer</button>
                </form>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default AdminMeetingRoom;