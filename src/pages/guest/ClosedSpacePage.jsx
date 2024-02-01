import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../guest/style/ClosedSpacePage.scss';

function ClosedSpacePage() {
    const [closedSpaces, setClosedSpaces] = useState(null);

    useEffect(()=>{
        (async()=>{
            const closedSpacesResponse = await fetch ('http://localhost:3005/api/closedSpace')
            const closedSpacesResponseData = await closedSpacesResponse.json()

            setClosedSpaces(closedSpacesResponseData);
            console.log(closedSpaces)
    })()
    },[])

    return (
        <>
            <Header />
            <h2>Espace fermés</h2>
            {closedSpaces ? (
                <>
                    {closedSpaces.map((closedSpace) => (
                        <section className="section-closedspace" key={closedSpace.id}>
                            <article className="article-closedspace">
                                <img className='closedspace-img' src={closedSpace.image} alt="Image du cowork" />
                                <h3>{closedSpace.name}</h3>
                                <button className="btn">Réserver</button>
                            </article>
                        </section>
                    ))}
                </>
            ) : (
                <p>En attente de chargement</p>
            )}
            <Footer />
        </>
    );
}
    
    export default ClosedSpacePage;
    