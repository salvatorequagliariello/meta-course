import restauranfood from "../images/restauranfood.jpg";

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-text-h1">Little Lemon</h1>
                    <h2 className="hero-text-h2">Chicago</h2>
                    <p className="hero-text-p">We are a family owned Mediterranean restaurant,<br /> focused on traditional<br /> recipes served with a modern<br />twist.</p>
                    <button className="hero-text-button">Reserve a table</button>
                </div>
                <img className="hero-image" src={restauranfood} />
            </div>
        </div>
    )
}

export default HeroSection;