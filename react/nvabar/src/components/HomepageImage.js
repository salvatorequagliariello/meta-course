
function HomepageImage() {
    const homepageImage = "https://img.freepik.com/free-vector/artists-painting-abstract-picture-with-paintbrush-oil-paint-work-tiny-persons-drawing-with-digital-tools-flat-vector-illustration-virtual-master-class-online-workshop-creation-concept_74855-21648.jpg?w=740&t=st=1685700885~exp=1685701485~hmac=01e8d7ad330a4a1caba9ab553dfd485c6528e37e1113e3b8918c52c616e91de6";

    return (
        <div className="image-container">
            <img className="image" src={homepageImage}/>
        </div>
    );
};

export default HomepageImage;