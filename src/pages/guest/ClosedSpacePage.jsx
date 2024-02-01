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
          <h2>Espaces fermés</h2>
          <section className="section-closedspace">
            {closedSpaces ? (
              <>
                {closedSpaces.map((closedSpace) => (
                  <article className="article-closedspace" key={closedSpace.id}>
                    <img className='closedspace-img' src={closedSpace.image} alt="Image de l'espace fermé" />
                    <h3>{closedSpace.name}</h3>
                    <button className="btn">Réserver</button>
                  </article>
                ))}
              </>
            ) : (
              <p>En attente de chargement</p>
            )}
          </section>
          <Footer />
        </>
      );
    }
    
    export default ClosedSpacePage;
    