import {Routes, Route, Link} from 'react-router-dom';


function NavBar() {
    return (
        <div className="nav-bar">
            <div className="title-container">
                <h1 className="title">HEADER</h1>
            </div>

            <div className="links-container">
                <Link to="/" className='link'>Homepage</Link>
                <Link to="/About" className='link'>About</Link>
            </div>
        </div>
    )
}

export default NavBar;