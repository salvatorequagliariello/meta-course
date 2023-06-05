import ToDo from './components/TodoList';
import {useState} from 'react';

function App() {
  const todosList = [
    {
      id: "todo1",
      createdAt: "18:00"
    },
    {
      id: "todo2",
      createdAt: "20:30"
    }
  ];
  const [todos, setTodos] = useState(todosList);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  return (
    <div className="App">
      <div className='todos-list'>
          {todos.map(todo => <ToDo id={todo.id} createdAt={todo.createdAt} />)}
      </div>
      <button className='reverse-button' onClick={reverseOrder}>Reverse order</button>
    </div>
  );
}

export default App;
