import Logo from "../images/Logo.svg";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


function Header({children}) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <header className="header-section">
            <img src={Logo} className="header-img" onClick={handleClick}/>
            <Nav />
        </header>
    )
}

export default Header;