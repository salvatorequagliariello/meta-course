import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="header-nav-section">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="#">About</Link></li>
            <li><Link className="nav-link" to="#">Menu</Link></li>
            <li><Link className="nav-link" to="#">Reservations</Link></li>
            <li><Link className="nav-link" to="#">Order Online</Link></li>
            <li><Link className="nav-link" to="#">Login</Link></li>
        </nav>
    );
};

export default Nav;