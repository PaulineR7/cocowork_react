import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/CoworksPage.scss';

function CoworksPage() {
    return(
        <>
        <Header />
        <h2>30 bureaux nomades</h2>
        <section className="section-coworks">
            <article className="article-coworks">
                <img className='coworks-img'src="assets/img/coworks.webp" alt="" />
                <h3>Coworking 1</h3>
                <button className="btn">Réserver</button>
            </article>
            <article className="article-coworks">
                <img className='coworks-img'src="assets/img/coworks.webp" alt="" />
                <h3>Coworking 2</h3>
                <button className="btn">Réserver</button>
            </article>
            <article className="article-coworks">
                <img className='coworks-img'src="assets/img/coworks.webp" alt="" />
                <h3>Coworking 2</h3>
                <button className="btn">Réserver</button>
            </article>
            <article className="article-coworks">
                <img className='coworks-img'src="assets/img/coworks.webp" alt="" />
                <h3>Coworking 2</h3>
                <button className="btn">Réserver</button>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default CoworksPage;