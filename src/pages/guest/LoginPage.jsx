import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/LoginPage.scss';
import { useState } from "react";
// import { useEffect } from "react";

function LoginPage() {

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
        
    // const token = localStorage.getItem("jwt");

    // useEffect(() => {
    //     if (token) {
    //        navigate("/");
    //     }
    // }, [token, navigate]);

    const handleLogin = async (event) => {

        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const loginData = {
            email,
            password,
        };

        const loginDataJson = JSON.stringify(loginData);

        const loginResponse = await fetch('http://localhost:3005/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: loginDataJson
        });

        const loginResponseData = await loginResponse.json();
        const token = loginResponseData.data;

        if (token) {
            localStorage.setItem("jwt", token);
            setMessage("Login Succesfull");
            navigate("/");
        } else {
            if(!email){
                setMessage("Please enter your email");
            } else if(!password){
                setMessage("Please enter your password");
            } else {
                setMessage("Incorrect credentials");
            }
        }
        
    }


    return (
        <>
        <Header />
            <section className="section">
                <h2 className="title-login">Connexion</h2>
                {message && <p className="loginVerify">{message}</p>}
                <form className="login-box" onSubmit={handleLogin}>

                    <label>Email
                        <input type="email" name="email" />
                    </label>

                    <label>Mot de passe
                        <input type="password" name="password"/>
                        {/* <button>Voir</button> */}
                        <Link><p>Mot de passe oublié ?</p></Link>
                        <Link to='/inscription'><p>Vous n'êtes pas membre ? Inscrivez vous ! </p></Link>
                    </label>

                    <input className="btn" type="submit" name="login" value="Connexion" />
                </form>
                
            </section>
        <Footer />
        </>
    )
}

export default LoginPage;