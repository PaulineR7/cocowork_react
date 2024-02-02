import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './../admin/style/AdminUsersPage.scss';
import { useEffect, useState} from "react";
import Users from "../../components/Users";

function AdminUsersPage() {
    const [users, setUsers] = useState(null);
    const [validUsers, setValidUsers] = useState(null);
    const token = localStorage.getItem("jwt")

    useEffect(() => {
        // Fetching users
        (async () => {
            console.log("Fetching users");
            const usersResponse = await fetch("http://localhost:3005/api/users");
            const usersResponseData = await usersResponse.json();
            const sortedUsers = usersResponseData.sort((a, b) => a.lastname.localeCompare(b.lastname));
            setUsers(sortedUsers);
        })();    
    }, []); 

    useEffect(() => {
        // Fetching valid users
        (async () => {
            console.log("Fetching valid users");
            const usersResponse = await fetch("http://localhost:3005/api/users/valid");
            const usersResponseData = await usersResponse.json();
            const sortedUsers = usersResponseData.sort((a, b) => a.lastname.localeCompare(b.lastname));
            setValidUsers(sortedUsers);
        })();    
    }, []); 

    const handleValidation = (userId) => {
        fetch(`http://localhost:3005/api/users/${userId}/validate`, {
            method: 'PUT', // specify the HTTP method
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        .then((response) => {
          if (response.ok) {
            // Handle success
            console.log('Validation successful');
            // You can update state or show a success message here
          } else {
            throw new Error('Validation failed');
          }
        })
        .catch((error) => {
          console.error('Validation error:', error.message);
          // Handle error, update state or show an error message
        });
    };

    console.log(validUsers);

    return (
        <>
            <Header />
            <section>
                <h2 className="title-users">Gestion des abonnés</h2>
                <Users users={users} validUsers={validUsers} handleValidation={handleValidation} />
            </section>
            <Footer />
        </>
    );
}

export default AdminUsersPage;