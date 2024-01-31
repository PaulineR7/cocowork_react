import './style/Footer.scss'

function Footer () {
    return(
        <footer>
            <div>
                <p>INFOS / CONTACT</p>
                <p>Quai Richelieu, 33000 Bordeaux</p>
                <p>09 89 69 65 12</p>
                <p>bonjour@cocowork.com</p>
                <p>Mentions Légales</p>
            </div>

            <div>
                <img className='map' src='assets/img/plan-bordeaux-13438.jpg' alt="" />
            </div>

        </footer>
    )
}

export default Footer;