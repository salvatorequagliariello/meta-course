import { useState, createContext } from 'react';

export const ListContext = createContext(null);

function ListProvider({children}) {
    const [list, setList] = useState([]);

    return (
        <ListContext.Provider value={{list, setList}}>
            {children}
        </ListContext.Provider>
    );
};

export default ListProvider;