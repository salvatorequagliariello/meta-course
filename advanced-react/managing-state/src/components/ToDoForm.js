import {useState, useContext} from 'react';
import { ListContext } from './ToDoListContext';

function ToDoForm() {
    const {list, setList} = useContext(ListContext);
    const [goal, setGoal] = useState({dof:"", by:""});

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, goal]);
        setGoal({dof:"", by:""});
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setList(list.slice(0, -1));
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">

                <div className="form-section">
                    <label htmlFor="goal">To-Do</label>
                    <input type="text" name="dof" id="goal-input" value={goal.dof} placeholder="To do..." onChange={e => setGoal({...goal, [e.target.name]: e.target.value})}  />
                </div>

                <div className="form-section">
                    <label htmlFor="by">By</label>
                    <input type="text" name="by" id="by-input" value={goal.by} placeholder="By..." onChange={e => setGoal({...goal, [e.target.name]: e.target.value})}  />
                </div>

                <div className="buttons">
                <button type="submit"><p className="button-text">Add</p></button>
                <button onClick={handleCancel}><p className="button-text">Remove</p></button>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm;