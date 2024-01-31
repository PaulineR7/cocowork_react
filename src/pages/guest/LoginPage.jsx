import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/LoginPage.scss';

function LoginPage() {
    return (
        <>
        <Header />
            <section className="section">
                <h2>Connexion</h2>
                <form>
                    <label>Email
                        <input type="email" name="email" />
                    </label>
                    <label>Mot de passe
                        <input type="password" name="password"/><button>Voir</button>
                        <Link><p>Mot de passe oublié ?</p></Link>
                    </label>
                </form>
                <button className="btn">Connexion</button>
                <Link to='/inscription'><p>Vous n'êtes pas membre ? Inscrivez vous ! </p></Link>
            </section>
        <Footer />
        </>
    )
}

export default LoginPage;