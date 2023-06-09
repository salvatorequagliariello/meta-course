import {useContext} from 'react';
import { ListContext } from './ToDoListContext';

function ToDoList() {
    const {list} = useContext(ListContext);

    return (
        <div>
            <ul className="todo-list">
                {list.map(goal => {
                    return (
                        <li className="list-item">◉ {goal.dof} - {goal.by}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ToDoList;