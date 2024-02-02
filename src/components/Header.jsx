import { useState } from 'react';
import './style/Header.scss';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom'

function Header() {
    const token = localStorage.getItem("jwt")

    const [submenuVisible, setSubmenuVisible] = useState(false)

    

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
                <Link to='/admin'><li>Dashboard</li></Link>
                <li onClick={handleClick} className='menu-with-submenu'>Espace coworking &#8595;
                {submenuVisible && (
                    <ul className="sub-menu">
                            <Link to='/coworks'><li>30 bureaux nomades</li></Link>
                            <Link to='/closedspace'><li>Espaces privés</li></Link>
                            <Link to='/meetingrooms' ><li>Salles de réunion</li></Link>
                    </ul>
                )}
                    
                </li>
                <li><Link to='/login'><button className='btn'>Connexion</button></Link></li>
            </ul>
        </header>
    )
}

export default Header;