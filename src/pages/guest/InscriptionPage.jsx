import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function InscriptionPage() {
  const [message, setMessage] = useState(null);

  const handleUserCreate = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const postcode = event.target.postcode.value;
    const town = event.target.town.value;
    const phoneNumber = event.target.phoneNumber.value;
    const password = event.target.password.value;

    const userRegistration = {
      name: name,
      lastname: lastname,
      email: email,
      address: address,
      postcode: postcode,
      town: town,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: password, 
      RoleId: 2,
    };

    // if (!isValidEmail(email)) {
    //     setMessage("Adresse e-mail non valide");
    //     return;
    //   }
    
    //   if (!isValidPostalCode(postcode)) {
    //     setMessage("Code postal non valide");
    //     return;
    //   }
    
    //   if (!isValidPhoneNumber(phoneNumber)) {
    //     setMessage("Numéro de téléphone non valide");
    //     return;
    //   }

    try {
      const userToCreateResponse = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistration),
      });

      if (userToCreateResponse.status === 201) {
        setMessage(`L'utilisateur a bien été créé`);
      } else {
        setMessage("Erreur!");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      setMessage("Erreur réseau lors de la création de l'utilisateur");
    }
  };

  return (
    <>
      <Header />
      <>{message && <p>{message}</p>}</>
      <section>
        <h2>Inscription</h2>

        <form className="form-flex" onSubmit={handleUserCreate}>
          <label>
            Prénom
            <input type="text" name="name" />
          </label>
          <label>
            Nom
            <input type="text" name="lastname" />
          </label>
          <label>
            Adresse
            <input type="text" name="address" />
          </label>
          <label>
            Code postal
            <input type="text" name="postcode" />
          </label>
          <label>
            Ville
            <input type="text" name="town" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Mot de passe
            <input type="password" name="password" />
          </label>
          <label>
            Confirmation du mot de passe
            <input type="password" name="confirmPassword" />
          </label>
          <label>
            Numéro de téléphone
            <input type="text" name="phoneNumber" />
          </label>

          <button type="submit">S'inscrire</button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default InscriptionPage;
