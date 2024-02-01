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
            <iframe
                title="Google Maps"
                width="180"
                height="180"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1826967563843!2d-0.5669969!3d44.83821259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527cdb8ec6e2f%3A0x949d87d59f739c3e!2sQuai%20Richelieu%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1706808357950!5m2!1sfr!2sfr"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>

        </footer>
    )
}

export default Footer;