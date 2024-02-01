import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/CoworksPage.scss';

function CoworksPage() {
    const [coworks, setCoworks] = useState(null);

    useEffect(()=>{
        (async()=>{
            const coworkingsResponse = await fetch ('http://localhost:3005/api/cowork')
            const coworkingsResponseData = await coworkingsResponse.json()

            setCoworks(coworkingsResponseData);
    })()
    },[])

    return (
        <>
        <Header />
        <h2>30 bureaux nomades</h2>
        
                <section className="section-coworks" >
                {coworks ? (
                <>
            {coworks.map((cowork) => {
            return (
                <article className="article-coworks" key={cowork.id}>
                    <img className="coworks-img" src={cowork.image} alt="Image du cowork" />
                    <h3>{cowork.name}</h3>
                    <button className="btn">Réserver</button>
                </article>
                );
            })}
        </>
        ) : (
            <p>En attente de chargement</p>
        )}
                </section>
        
        <Footer />
        </>
    );
}
export default CoworksPage;