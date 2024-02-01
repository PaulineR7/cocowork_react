// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import './../admin/style/AdminUsersPage.scss';
import { useEffect, useState} from "react";
// import Users from "../../components/Users";

function AdminUsersPage() {
    const [users, setUsers] = useState(null);

    const [validUsers, setValidUsers] = useState(null)

  useEffect(() => {
      (async () => {
        console.log("Fetching users");
          const usersResponse = await fetch("http://localhost:3005/api/users");
          const usersResponseData = await usersResponse.json();

          const sortedUsers = usersResponseData.sort((a, b) => a.lastname.localeCompare(b.lastname));

          setUsers(sortedUsers);
        })();
      
    }, []); 

    useEffect(() => {
        (async () => {
          console.log("Fetching valid users");
            const usersResponse = await fetch("http://localhost:3005/api/users/valid");
            const usersResponseData = await usersResponse.json();
    
            const sortedUsers = usersResponseData.sort((a, b) => a.lastname.localeCompare(b.lastname));
    
            setValidUsers(sortedUsers);
          })();
        
    }, []); 


  // console.log(users)
  console.log(validUsers)
  return (
    <>
      {/* <Header /> */}
      <section>
        <h2 className="title-users">Gestions des abonnés</h2>
        {/* <Users users={users} validUsers={validUsers} /> */}
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default AdminUsersPage;