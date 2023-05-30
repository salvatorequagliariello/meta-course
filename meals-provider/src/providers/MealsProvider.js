import { createContext, useContext, useState } from 'react';

const MealsContext = createContext();

const todayMeals = ['Baked Beans', 'Beaked Sweet Potatoes', 'Baked Potatoes'];

function MealsProvider(children) {
    const [meals, setMealsList] = useState(todayMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    );
};

export const useMealsListContext = () => useContext(MealsContext);
export default MealsProvider;