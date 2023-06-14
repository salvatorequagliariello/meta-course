import Main from "./Main";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";

function Homepage() {
    return (
        <div className="homepage">
            <HeroSection />
            <Main />
            <Testimonials />
        </div>
    )
}

export default Homepage;