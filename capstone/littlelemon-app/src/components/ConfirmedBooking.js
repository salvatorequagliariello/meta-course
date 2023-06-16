import image from "../images/9233803_4116159.jpg";
import { useNavigate } from "react-router-dom";


function ConfirmedBooking() {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <div className="confirmed-container">
            <div className="banner-container">
                <h4 className="banner-name">Reservation succesfully completed!</h4>
                <img className="banner-image" src={image} />
                <h1 className="banner-title">Thank you!</h1>
                <p className="banner-p">Your reservation detail has been sent to your email.</p>
                <button onClick={handleClick} className="banner-button">Go Home</button>
            </div>
        </div>
    );
}

export default ConfirmedBooking;