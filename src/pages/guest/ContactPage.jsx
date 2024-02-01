import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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

        <section>
            <h2>Nous contacter</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleContact}>

                <label>Nom et Prénom
                    <input type="text" name="name" />
                </label>

                <label>Email
                    <input type="email" name="email" />
                </label>

                <label>Numéro de téléphone
                    <input type="text" name="phoneNumber"/>
                </label>

                <label>Objet de la demande
                    <select name="title">
                        <option value="reservation">Réservation</option>
                        <option value="contact_professionnel">Contact professionnel</option>
                        <option value="autre">Autre</option>
                    </select>
                </label>

                <label>Message
                    <textarea name="content" id="" cols="30" rows="10"></textarea>
                </label>
                
                <input className="btn" type="submit" name="login" value="Envoyer" />
            </form>
        </section>

        <Footer />
        </>
    )
}

export default ContactPage;