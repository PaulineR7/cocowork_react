
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './../admin/style/AdminUsersPage.scss';
import { useEffect, useState} from "react";
import Users from "../../components/Users";
import Pagination from "../../components/Pagination";

function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20)

  useEffect(() => {
    (async () => {
        const usersResponse = await fetch("http://localhost:3005/api/users");
        const usersResponseData = await usersResponse.json();

        const sortedUsers = usersResponseData.sort((a, b) => a.lastname.localeCompare(b.lastname));

        setUsers(sortedUsers);
      })();
      
    }, []); 
  console.log(users)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Header />
      <section>
        <h2 className="title-users">Gestions des abonnés</h2>
        <Users users={currentUsers} />
        <Pagination
        postsPerPage={postsPerPage}
        totalUsers = {users.length}
        paginate={paginate}
        />
      </section>
      <Footer />
    </>
  );
}

export default AdminUsersPage;