import Footer from "../../components/Footer";
import Header from "../../components/Header";

function InscriptionPage () {
    return(
        <>
        <Header />
            <section>
                <h2>Inscription</h2>

                <form className="form-flex">
                    <label>Prénom
                        <input type="text" />
                    </label>
                    <label>Nom
                        <input type="text" />
                    </label>
                    <label>Adresse
                        <input type="text" />
                    </label>
                    <label>Code postal
                        <input type="text" />
                    </label>
                    <label>Ville
                        <input type="text" />
                    </label>
                    <label>Email
                        <input type="email" />
                    </label>
                    <label>Mot de passe
                        <input type="password" />
                    </label>
                    <label>Confirmation du mot de passe
                        <input type="text" />
                    </label>
                    <label>Numéro de téléphone
                        <input type="text" />
                    </label>
                </form>
            </section>
        <Footer />
        </>
    )
}

export default InscriptionPage;