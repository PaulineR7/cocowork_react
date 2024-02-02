import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/ContactPage.scss';

function ContactPage() {

    const [message, setMessage] = useState(null);

    const handleContact = async (event) =>{

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const title = event.target.title.value;
        const content = event.target.content.value;
        const phoneNumber = event.target.phoneNumber.value;

        const contactData = {
            name,
            email,
            title,
            phoneNumber,
            content,
        };

        const contactDataJson = JSON.stringify(contactData);

        const contactResponse = await fetch('http://localhost:3005/api/messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: contactDataJson
        });

        if (contactResponse.status === 201) {
            setMessage("Message Sent !");
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

        <section className="section-contact">
            <h2 className="title-contact">Nous contacter</h2>
            {message && <p>{message}</p>}
            <form className="flex-contact" onSubmit={handleContact}>

                <label className="label-contact first">Nom et Prénom
                    <input className="input-contact" type="text" name="name" />
                </label>

                <label className="label-contact">Email
                    <input className="input-contact" type="email" name="email" />
                </label>

                <label className="label-contact">Numéro de téléphone
                    <input className="input-contact" type="text" name="phoneNumber"/>
                </label>

                <label className="label-contact">Objet de la demande
                    <select className="input-contact" name="title">
                        <option value="reservation">Réservation</option>
                        <option value="contact_professionnel">Contact professionnel</option>
                        <option value="autre">Autre</option>
                    </select>
                </label>

                <label className="label-contact">Message
                    <textarea className="input-contact" name="content" id="" cols="30" rows="10"></textarea>
                </label>
                
                <input className="btn" type="submit" name="login" value="Envoyer" />
            </form>
        </section>

        <Footer />
        </>
    )
}

export default ContactPage;