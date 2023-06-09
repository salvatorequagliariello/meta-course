import AboutImage from  './AboutImage';

function About() {
    return (
        <div className="homepage-container">
            <h1>About</h1>
            <div className="text-container">
            <p>
            Duis non viverra metus. Quisque non quam condimentum, feugiat risus at, gravida augue. Curabitur ut congue velit. Ut faucibus euismod sem. In in urna augue. Phasellus pulvinar purus arcu, id aliquet nibh malesuada at. Proin mauris dolor, fringilla tempus diam quis, congue placerat sem. Pellentesque mauris odio, cursus nec arcu sit amet, hendrerit fermentum nibh. Curabitur quis ipsum aliquam, convallis nisl in, dapibus tortor. Aenean gravida dolor sed augue suscipit, nec fringilla velit tempor.
            </p>
            <AboutImage />
            </div>
        </div>
    );
};

export default About;