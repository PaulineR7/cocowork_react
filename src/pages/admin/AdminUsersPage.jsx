import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './../admin/style/AdminUsersPage.scss';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function AdminUsersPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    (async () => {
        const usersResponse = await fetch("http://localhost:3005/api/users");
        const usersResponseData = await usersResponse.json();
        setUsers(usersResponseData);
      })();
    }, []); 
  console.log(users);

  return (
    <>
      <Header />
      <section>
        <h2 className="title-users">Gestions des abonnés</h2>
        <div>
          <h3 className="title-article-users">A valider</h3>
          {users ? (
            users.map((user) => (
              <article className="flex-users" key={user.id}>
                <p>{user.lastname}</p>
                <p>{user.name}</p>
                <img className="img-valide-users"src="../assets/img/valide.png" alt="validation"/>
                <img className="img-valide-users"src="../assets/img/delete.png" alt="croix rouge"/>
              </article>
            ))
          ) : (
            <p>En cours de chargement</p>
          )}
        </div>
        <div>
          <h3 className="title-article-users">Abonnés</h3>
          {users ? (
            users.map((user) => (
              <article className="flex-users" key={user.id}>
                <p>{user.lastname}</p>
                <p>{user.name}</p>
                <p>Statut</p>
                <p>Date inscription</p>
                <p>Date de validation</p>
                <img className="img-loupe" src="../assets/img/loupe.png" alt=""/>
                <img className="img-valide-users" src="../assets/img/delete.png" alt="croix rouge"/>
              </article>
            ))
          ) : (
            <p>En cours de chargement</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdminUsersPage;