import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/HomePage.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function HomePage () {

   
    return(
        <>
        <Header />
        <main>

            <section className="section-width line">
                <Carousel autoPlay interval={6000} infiniteLoop thumbs={false} showStatus={false}>
                    <div>
                        <img className="img-carousel" src="assets/img/coworks.webp" alt="" />
                        <div className="text-carousel">
                            <h2>30 bureaux nomades</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla, accusantium numquam, unde exercitationem expedita praesentium facere corporis, inventore dignissimos excepturi omnis vero ducimus. Iusto?</p>
                        </div>
                    </div>
                    <div>
                        <img className="img-carousel" src="assets/img/closedspace.webp" alt="" />
                        <div className="text-carousel">
                            <h2>Espaces fermés</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla, accusantium numquam, unde exercitationem expedita praesentium facere corporis, inventore dignissimos excepturi omnis vero ducimus. Iusto?</p>
                        </div>
                    </div>
                    <div>
                        <img className="img-carousel" src="assets/img/mettingroom.webp" alt="" />
                        <div className="text-carousel">
                            <h2>Salle de réunion</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla, accusantium numquam, unde exercitationem expedita praesentium facere corporis, inventore dignissimos excepturi omnis vero ducimus. Iusto?</p>
                        </div>
                    </div>
                </Carousel>
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
            <iframe className="video"
               title="Facebook Video"
               width="560"
               height="314"
               src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmotacoworking%2Fvideos%2F560120267710511%2F&show_text=false&width=560&t=0"
               style={{
                 border: 'none',
                 overflow: 'hidden',
                 margin: '0 auto', 
                 display: 'block', 
               }}
               allowFullScreen={true}
               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            </section>
            

        </main>
        <Footer />
        </>
    )
    
}

export default HomePage;