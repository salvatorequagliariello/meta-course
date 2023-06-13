import scooter from '../images/scooter.svg'

function Card({image, title, price, description}) {
    return(
        <div className="card-container">
            <img className="card-image" src={image} />
            <div className="card-text">
                <div className="card-main-info">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-price">{price}</p>
                </div>
                <p className="card-description">{description}</p>
                <div className="delivery-section">
                    <p className="delivery-text">Order a delivery</p>
                    <img className="delivery-img" src={scooter} />
                </div>
            </div>
        </div>
    );
};

export default Card;