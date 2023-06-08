import {createContext, useState} from 'react';

export const ThemeContext = createContext(null);

function ThemeProvider({children}) {
    const darkTheme = false;
    const [theme, setTheme] = useState(darkTheme);

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;