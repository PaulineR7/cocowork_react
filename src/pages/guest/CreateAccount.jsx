import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/LoginPage.scss';
import { useState } from "react";
// import { useEffect } from "react";

function RegisterPage() {

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
        
    // const token = localStorage.getItem("jwt");

    // useEffect(() => {
    //     if (token) {
    //        navigate("/");
    //     }
    // }, [token, navigate]);

    const handleRegister = async (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const lastname = event.target.lastname.value;
        const address = event.target.address.value;
        const postcode = event.target.postcode.value;
        const town = event.target.town.value;

        const registerData = {
            name,
            email,
            password,
            lastname,
            address,
            postcode,
            town,
        };

        const registerDataJson  = JSON.stringify(registerData);

        const registerResponse  = await fetch('http://localhost:3005/api/users/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: registerDataJson
        });

        const registerResponseData = await registerResponse.json();
        const token = registerResponseData.data;

      if (registerResponseData.data) {
         setMessage("Registration successful. You can now log in.");
         // You may redirect or handle the success case as needed
      } else {
            setMessage("Registration failed. Please check your inputs and try again.");
            // You may handle the failure case as needed
      }
        
    }


    return (
        <>
        <Header />
            <section className="section">
                <h2 className="title-login">Creation de compte</h2>
                {message && <p className="loginVerify">{message}</p>}
                <form className="login-box" onSubmit={handleRegister}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" required />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />

                    <label htmlFor="postcode">Postcode:</label>
                    <input type="text" id="postcode" name="postcode" required />

                    <label htmlFor="town">Town:</label>
                    <input type="text" id="town" name="town" required />

                    <input className="btn" type="submit" name="register" value="Register" />
                </form>
                
            </section>
        <Footer />
        </>
    )
}

export default RegisterPage;