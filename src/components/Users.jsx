import { Link } from "react-router-dom";

function Users({ users, validUsers, handleValidation }) {
  return (
    <>
      <div>
        <h3 className="title-article-users">A valider</h3>
        {users ? (
          users.map((user) => (
            <article className="flex-users" key={user.id}>
              <p className="width-name">{user.lastname}</p>
              <p className="width-name">{user.name}</p>
              <img
                className="valide-users"
                src="../assets/img/valide.png"
                alt="validation"
                onClick={() => handleValidation(user.id)}
              />
              <img className="delete" src="../assets/img/delete.png" alt="croix rouge" />
            </article>
          ))
        ) : (
          <p>En cours de chargement</p>
        )}
      </div>
      <div>
        <h3 className="title-article-users">Abonnés</h3>
        {validUsers ? (
          users.map((user) => {
            const createdAtDate = new Date(user.createdAt);
            const formattedDate = `${createdAtDate.getDate()}/${createdAtDate.getMonth() + 1}/${createdAtDate.getFullYear()}`;

            return (
              <article className="flex-users" key={user.id}>
                <p className="width-name">{user.lastname}</p>
                <p className="width-name">{user.name}</p>
                <p className="width-name">Statut : Validé</p>
                <p className="width-name">Date inscription : {formattedDate}</p>
                <p className="width-name">Date de validation</p>
                <Link to={`/usersdetails/${user.id}`}>
                  <img className="img-loupe" src="../assets/img/loupe.png" alt="" />
                </Link>
                <img className="img-valide-users" src="../assets/img/delete.png" alt="croix rouge" />
              </article>
            );
          })
        ) : (
          <p>En cours de chargement</p>
        )}
      </div>
    </>
  );
}

export default Users;
