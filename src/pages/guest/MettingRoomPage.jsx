import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../guest/style/MettingRoomPage.scss';
function MettingRoomPage() {
    return(
        <>
        <Header />
        <h2>Salle de réunion</h2>
        <section className="section-mettingroom">
            <article className="article-mettingroom">
                <img className='mettingroom-img'src="assets/img/mettingroom.webp" alt="" />
                <h3>Salle privée 1</h3>
                <p>Description</p>
                <p>Prix</p>
                <Link to='/reservation'><button className="btn">Réserver</button></Link>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default MettingRoomPage;