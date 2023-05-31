import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
    const { meals } = useMealsListContext();

    return (
        <div>
            <h3>Number of meal today: {meals.length}</h3>
        </div>
    );
};

export default Counter;