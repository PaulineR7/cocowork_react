import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './../admin/style/AdminUsersPage.scss';

function AdminUsersPage() {
    

    return(
        <>
        <Header />
        <section>
            <h2 className="title-users">Gestions des abonnés</h2>
            <div>
                <h3 className="title-article-users">A valider</h3>
                <article className="flex-users">
                    <p>Nom</p>
                    <p>Prénom</p>
                    <img className="img-valide-users" src="../assets/img/valide.png" alt="validation" />
                    <img className="img-valide-users" src="../assets/img/delete.png" alt="croix rouge" />
                </article>
            </div>
            <div>
                <h3 className="title-article-users">Abonnés</h3>
                <article className="flex-users">
                    <p>Nom</p>
                    <p>Prénom</p>
                    <p>Statut</p>
                    <p>Date inscription</p>
                    <p>Date de validation</p>
                    <img className="img-loupe" src="../assets/img/loupe.png" alt="" />
                    <img className="img-valide-users" src="../assets/img/delete.png" alt="croix rouge" />
                </article>
                <article className="flex-users">
                    <p>Nom</p>
                    <p>Prénom</p>
                    <p>Statut</p>
                    <p>Date inscription</p>
                    <p>Date de validation</p>
                    <img className="img-loupe" src="../assets/img/loupe.png" alt="" />
                    <img className="img-valide-users" src="../assets/img/delete.png" alt="croix rouge" />
                </article>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default AdminUsersPage;