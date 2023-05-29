import { useState } from "react";


function ModeToggler() {
    const [mode, setMode] = useState(true);
    const darkMode = "dark-h1";
    const lightMode = "ligth-h1";

    const changeMode = () => {
        setMode(!mode);
    };

    return (
        <div className="text-container">
            <h1 className={mode ? darkMode : lightMode}>Dynamic Title</h1>
            <button onClick={changeMode}>Change Background</button>
        </div>
    );
};

export default ModeToggler;