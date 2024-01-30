import './style/Header.scss'

function Header() {
    return(
        <header>
            <div className='logo'>Cocowork</div>
            <ul className='ul-header'>
                <li>Accueil</li>
                <li>Espace membre</li>
                <li>Contact</li>
                <li>Espace coworking</li>
                <li><button className='btn'>Connexion</button></li>
            </ul>
        </header>
    )
}

export default Header;