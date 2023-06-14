import localePic from '../images/restaurant.jpg';
import chefs from '../images/Mario and Adrian A.jpg';

function InfoSection() {
    return(
        <div className="infosection">
            <div className="infosection-text">
                <h1 className="infosection-text-h1">Little Lemon</h1>
                <h4 className="infosection-text-h4">Chicago</h4>
                <p className="infosection-text-p">
                    Little Lemon is a charming Mediterranean restaurant located in the heart of Chicago. As soon as you step inside, you'll be greeted by the warm and inviting atmosphere that the restaurant is known for. The decor is cozy and intimate, with soft lighting and comfortable seating. The menu features a variety of delicious Mediterranean dishes, including lamb chops, falafel wraps, hummus, and more.
                </p>
            </div>

            <div className="infosection-images">
                <img className="infosection-images-img one" src={localePic}/>
                <img className="infosection-images-img two" src={chefs}/>
            </div>
        </div>
    )
}

export default InfoSection;