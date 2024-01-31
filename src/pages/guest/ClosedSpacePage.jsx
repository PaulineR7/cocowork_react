import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/ClosedSpacePage.scss';

function ClosedSpacePage() {
    return(
        <>
        <Header />
        <h2>Espace fermés</h2>
        <section className="section-closedspace">
            <article className="article-closedspace">
                <img className='closedspace-img'src="assets/img/closedspace.webp" alt="" />
                <h3>Salle privée 1</h3>
                <button className="btn">Réserver</button>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default ClosedSpacePage;