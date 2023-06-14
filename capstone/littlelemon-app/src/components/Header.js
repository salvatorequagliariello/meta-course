import Logo from "../images/Logo.svg";
import Nav from "./Nav";


function Header({children}) {
    return (
        <header className="header-section">
            <img src={Logo} />
            <Nav />
        </header>
    )
}

export default Header;