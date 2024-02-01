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
        {coworks ? (
        <>
            {coworks.map((cowork) => {
            return (
                <section className="section-coworks" key={cowork.id}>
                <article className="article-coworks">
                    <img className="coworks-img" src={cowork.image} alt="Image du cowork" />
                    <h3>{cowork.name}</h3>
                    <button className="btn">Réserver</button>
                </article>
                </section>
            );
            })}
        </>
        ) : (
            <p>En attente de chargement</p>
        )}
        <Footer />
        </>
    );
}
export default CoworksPage;