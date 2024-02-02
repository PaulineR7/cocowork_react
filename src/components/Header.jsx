import { useState } from 'react';
import './style/Header.scss';
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const token = localStorage.getItem("jwt")
    const navigate = useNavigate();
    const [submenuVisible, setSubmenuVisible] = useState(false)
    

    const handleLogout = () => {
        // Remove the "jwt" token from localStorage
        localStorage.removeItem("jwt");

        // Redirect to the home page or any other desired page after logout
        navigate('/')
    };

    const shouldShowDashboardLink = () => {
        // Check if the token.RoleId is 1 (or any other desired role for showing the Dashboard)
        return token && jwtDecode(token).role === 1;
    };

    const handleClick = () => {
        setSubmenuVisible(!submenuVisible)
    }
    return(
        <header>
            <div className='logo'>Cocowork</div>
            <ul className='ul-header'>
                <Link to='/'><li>Accueil</li></Link>
                {token && <Link to={`/spacemember/${jwtDecode(token).id}`}><li>Espace membre</li></Link>}
                <Link to='/contact' ><li>Contact</li></Link>
                {shouldShowDashboardLink() && <Link to='/admin'><li>Dashboard</li></Link>}
                <li onClick={handleClick} className='menu-with-submenu'>Espace coworking &#8595;
                {submenuVisible && (
                    <ul className="sub-menu">
                            <Link to='/coworks'><li>30 bureaux nomades</li></Link>
                            <Link to='/closedspace'><li>Espaces privés</li></Link>
                            <Link to='/meetingrooms' ><li>Salles de réunion</li></Link>
                    </ul>
                )}
                    
                </li>
                {token ? (
                    <>
                        <li><button onClick={handleLogout} className='btn'>Déconnexion</button></li>
                    </>
                ) : (
                    <li><Link to='/login'><button className='btn'>Connexion</button></Link></li>
                )}
            </ul>
        </header>
    )
}

export default Header;