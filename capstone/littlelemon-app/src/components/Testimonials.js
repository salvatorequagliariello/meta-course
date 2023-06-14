import personOne from "../images/vecteezy_set-of-headshot-avatars-of-people-of-different-ages-and_13128064-fotor-2023061493453.png";
import personTwo from "../images/vecteezy_set-of-headshot-avatars-of-people-of-different-ages-and_13128064-fotor-2023061493543.png";
import personThree from "../images/vecteezy_set-of-headshot-avatars-of-people-of-different-ages-and_13128064-fotor-2023061493619.png";


function Testimonials() {
    return(
        <div className="testimonials-section">
            <h1 className="testimonials-section-heading">What our Customer Says</h1>

            <div className="testimonials-cards-container">

                <div className="testimonial-card">
                    <img className="testimonial-card-img" src={personOne}/>

                    <div className="testimonial-card-text-container">
                        <h5 className="testimonial-card-name">Mark</h5>
                        <p className="testimonial-card-review">
                            "Little Lemon is a must-visit for anyone who loves Mediterranean food. The dishes are flavorful and fresh, and the staff is friendly and welcoming. The restaurant has a cozy and intimate atmosphere that makes you feel like you're dining with family. Highly recommend the lamb chops and the spanakopita!"
                        </p>
                    </div>
                </div>

                <div className="testimonial-card">
                    <img className="testimonial-card-img" src={personTwo}/>

                    <div className="testimonial-card-text-container">
                        <h5 className="testimonial-card-name">Karla</h5>
                        <p className="testimonial-card-review">
                            "I recently had dinner at Little Lemon, and it was a fantastic experience. The food was delicious, and the service was exceptional. The owners are lovely people who take great care in ensuring their customers have a great dining experience. Highly recommend the grilled octopus and the moussaka!"
                        </p>
                    </div>
                </div>

                <div className="testimonial-card">
                    <img className="testimonial-card-img" src={personThree}/>

                    <div className="testimonial-card-text-container">
                        <h5 className="testimonial-card-name">Anna</h5>
                        <p className="testimonial-card-review">
                            "Little Lemon is a gem of a restaurant. The food is always fresh and flavorful, and the staff is friendly and attentive. The restaurant has a warm and inviting atmosphere that makes you feel right at home. Highly recommend the falafel wrap and the tabbouleh salad. This is a must-visit for anyone looking for fantastic Mediterranean food!"
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonials;