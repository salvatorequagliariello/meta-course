import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Switch() {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            <button onClick={() => setTheme(!theme)}>Click</button>
        </div>
    )
}

export default Switch;