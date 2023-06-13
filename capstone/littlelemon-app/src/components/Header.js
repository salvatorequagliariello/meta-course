import Logo from "../images/Logo.svg";


function Header({children}) {
    return (
        <header className="header-section">
            <img src={Logo} />
            {children}
        </header>
    )
}

export default Header;