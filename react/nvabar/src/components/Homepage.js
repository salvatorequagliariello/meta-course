import HomepageImage from "./HomepageImage";


function Homepage() {
    return (
        <div className="homepage-container">
            <h1>Homepage</h1>
            <div className="text-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus viverra nibh eget vulputate. Quisque eu justo bibendum, pulvinar sem sit amet, sagittis libero. Aliquam consequat efficitur dui ut congue. In lectus nibh, facilisis ut tellus vel, efficitur euismod libero. Fusce ut gravida lorem. Aenean malesuada pulvinar metus, in iaculis urna imperdiet et. Vivamus quis imperdiet diam. Maecenas eget sem in lacus pulvinar malesuada. Quisque nec massa felis. Mauris consequat urna non risus auctor, id volutpat nisi tincidunt.
                Sed ultrices blandit mollis. Maecenas molestie cursus arcu ac suscipit. Aliquam sollicitudin ullamcorper massa eu euismod. Quisque varius vestibulum ligula. Nullam nisi nibh, semper nec erat id, condimentum vulputate augue. Suspendisse et laoreet dolor, egestas cursus nisl. Ut maximus tellus at ullamcorper ullamcorper. Mauris sit amet nunc consequat, faucibus nunc at, consectetur mauris. Suspendisse posuere est a ornare posuere. Vestibulum sit amet luctus nulla, quis elementum quam. Pellentesque suscipit nunc nec odio dapibus, ut tincidunt enim mattis. In ut tincidunt orci, quis varius est.</p>
                <HomepageImage />
            </div>
        </div>
    );
};

export default Homepage;