import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header({children}) {
    const {theme} = useContext(ThemeContext);
    
    return(
        <div className='Header Container'>
            <h1 className={theme ? "light" :  "dark"}>{children}</h1>
        </div>
    )
}

export default Header;