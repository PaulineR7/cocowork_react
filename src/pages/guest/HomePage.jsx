import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/HomePage.scss';


function HomePage () {

   
    return(
        <>
        <Header />
        <main>

            <section className="section-width line">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <h4>1</h4>
                    </div>
                    <div className="item">
                        <h4>2</h4>
                    </div>
                    <div className="item">
                        <h4>3</h4>
                    </div>
                </div>
            </section>

            <section className="section-width line">
                <h1 className="title-home">COCOWORK</h1>
                <p className="text-presentation">Découvrez notre espace de coworking dynamique, conçu pour répondre à tous vos besoins professionnels. Avec une variété de services et d'installations, nous sommes là pour vous accompagner dans votre réussite.
Au cœur de notre espace, vous trouverez 30 bureaux nomades, offrant flexibilité et confort pour votre travail quotidien. Besoin d'intimité ? Optez pour l'un de nos 5 espaces fermés, comprenant chacun 6 bureaux, où la concentration est maître-mot.
Pour vos réunions importantes, nous mettons à votre disposition 3 salles de réunion pouvant accueillir jusqu'à 20 personnes chacune. Que ce soit pour une journée entière de brainstorming ou une demi-journée de présentations, nos salles sont prêtes à vous recevoir.
Mais notre engagement ne s'arrête pas là. Profitez de nos services supplémentaires, allant de la restauration de qualité à notre parking privatisé, garantissant votre tranquillité d'esprit. Besoin de détente après une journée chargée ? Rejoignez nos sessions de yoga pour revitaliser corps et esprit.
Chez nous, votre productivité et votre bien-être sont notre priorité. Rejoignez-nous dès aujourd'hui et découvrez un espace où travail rime avec épanouissement.</p>
            </section>

            <section  className="section-width">
                <p>Vidéo</p>
            </section>
            

        </main>
        <Footer />
        </>
    )
    
}

export default HomePage;