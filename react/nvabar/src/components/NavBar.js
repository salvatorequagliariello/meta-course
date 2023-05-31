import {Routes, Route, Link} from 'react-router-dom';


function NavBar() {
    return (
        <div className="nav-bar">
            <div className="title-container">
                <h1 className="title">HEADER</h1>
            </div>

            <div className="list-container">
                <ul className="list">
                    <li className="list-item">HOME</li>
                </ul>
            </div>
        </div>
    )
}