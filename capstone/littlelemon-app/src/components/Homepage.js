import Main from "./Main";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import InfoSection from './InfoSection';

function Homepage() {
    return (
        <div className="homepage">
            <HeroSection />
            <Main />
            <Testimonials />
            <InfoSection />
        </div>
    )
}

export default Homepage;