import localePic from '../images/restaurant.jpg';

function Footer() {
    return(
        <div className="footer">
            <img src={localePic} className="footer-img" />

            <div className="footer-text-section">
                <h4 className="footer-text-title">Navigation</h4>
                <ul className="footer-links-container">
                    <li><a className="footer-link" href="#">Home</a></li>
                    <li><a className="footer-link" href="#">About</a></li>
                    <li><a className="footer-link" href="#">Menu</a></li>
                    <li><a className="footer-link" href="#">Reservations</a></li>
                    <li><a className="footer-link" href="#">Order Online</a></li>
                    <li><a className="footer-link" href="#">Login</a></li>
                </ul>
            </div>

            <div className="footer-text-section">
                <h4 className="footer-text-title">Contact</h4>
                <ul className="footer-links-container">
                    <li><a className="footer-link" href="#">Address</a></li>
                    <li><a className="footer-link" href="#">Email</a></li>
                    <li><a className="footer-link" href="#">Phone Numbers</a></li>
                </ul>
            </div>

            <div className="footer-text-section">
                <h4 className="footer-text-title">Social Media</h4>
                <ul className="footer-links-container">
                    <li><a className="footer-link" href="#">Facebook</a></li>
                    <li><a className="footer-link" href="#">Instagram</a></li>
                    <li><a className="footer-link" href="#">Linkedin</a></li>
                    <li><a className="footer-link" href="#">Tik Tok</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer;