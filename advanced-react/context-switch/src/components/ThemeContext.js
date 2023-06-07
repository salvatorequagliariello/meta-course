import { createContex, useContext } from 'react';

const ThemeContex = createContex(undefined);

function ThemeProvider ({children}) {
    const [theme, setTheme] = use

    return (
        <ThemeContex.Provider>
            {children}
        </ThemeContex.Provider>
    );
};