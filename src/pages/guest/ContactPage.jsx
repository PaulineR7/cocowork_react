import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ContactPage() {
    return(
        <>
        <Header />
            <section>
                <h2>Nous contacter</h2>

                <form>
                    <label>Nom et Prénom
                        <input type="text" />
                    </label>
                    <label>Email
                        <input type="email" />
                    </label>
                    <label>Numéro de téléphone
                        <input type="text" name="" id="" />
                    </label>
                    <label>Objet de la demande
                        <select>
                            <option>réservation</option>
                            <option>contact professionnel</option>
                            <option>autre</option>
                        </select>
                    </label>
                    <label>Message
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </label>
                </form>
            </section>
        <Footer />
        </>
    )
}

export default ContactPage;