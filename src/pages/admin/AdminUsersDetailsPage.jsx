import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './../admin/style/AdminUsersDetailsPage.scss';

function AdminUsersDetailsPage() {
    const {id} = useParams();

    const [users, setUsers] = useState(null);
    
    


    useEffect(() => {
        (async () => {
            const usersResponse = await fetch("http://localhost:3005/api/users/" + id);
            const usersResponseData = await usersResponse.json();

            setUsers(usersResponseData)
            
        })();
    }, []);
    return(
        <>
        <Header />
        <section>
            {users ? (
                <>
                <article className="box-users">
                <h2 className="title-detailusers">{users.data.lastname} {users.data.name}</h2>
                <p>{users.data.status}</p>
                <p>{users.data.address}</p>
                <p>{users.data.postcode} {users.data.town}</p>
                <p>{users.data.email}</p>
                </article>
                </>
            ) : (
                <p>En cours de chargement</p>
            )}
        </section>
        <Footer />
        </>
    )
}

export default AdminUsersDetailsPage;