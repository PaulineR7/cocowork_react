import { Link } from "react-router-dom";
import Header from "../../components/Header";
import './../admin/style/DashboardAdmin.scss';
import Footer from "../../components/Footer";

function DashboardAdmin() {
    return(
        <>
        <Header />
        <section className="section-admin">
            <h2 className="title-admin">Dashboard</h2>
            <ul className="ul-admin">
                <Link to='/admin/users' ><li className="li-admin">Gestion des abonnés</li></Link>
                <Link to='/admin/meetingroom'><li className="li-admin">Gestion salles de réunion</li></Link>
                <Link><li className="li-admin">Gestion des réservations</li></Link>
                <Link><li className="li-admin">Gestion du site</li></Link>
            </ul>
        </section>
        <Footer />
        </>
    )
}

export default DashboardAdmin;