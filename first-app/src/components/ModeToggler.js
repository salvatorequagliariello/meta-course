
function ModeToggler() {
    let darkModeOn = true;
    const darkMode = "dark-h1";
    const lightMode = "ligth-h1";

    const changeMode = () => {darkModeOn = !darkModeOn};

    return (
        <div className="text-container">
            <h1 className={darkModeOn ? darkMode : lightMode}>Dynamic Title</h1>
            <button onClick={changeMode}>Change Background</button>
        </div>
    );
};

export default ModeToggler;