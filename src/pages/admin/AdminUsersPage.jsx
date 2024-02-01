import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './../admin/style/AdminUsersPage.scss';
import { useEffect, useState} from "react";

function AdminUsersPage() {
    const [users, setUsers] = useState(null);

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
            users
            .filter((user) => user.status === false)
            .map((user) => (
            
              <article className="flex-users" key={user.id}>
                <p className="width-name">{user.lastname}</p>
                <p className="width-name">{user.name}</p>
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
          users
            .filter((user) => user.status)
            .map((user) => {
              const createdAtDate = new Date(user.createdAt);
              const formattedDate = `${createdAtDate.getDate()}/${createdAtDate.getMonth() + 1}/${createdAtDate.getFullYear()}`;

              return (
                <article className="flex-users" key={user.id}>
                  <p className="width-name">{user.lastname}</p>
                  <p className="width-name">{user.name}</p>
                  <p className="width-name">Statut : Validé</p>
                  <p className="width-name">Date inscription : {formattedDate}</p>
                  <p className="width-name">Date de validation</p>
                  <img className="img-loupe" src="../assets/img/loupe.png" alt="" />
                  <img className="img-valide-users" src="../assets/img/delete.png" alt="croix rouge" />
                </article>
              );
            })
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