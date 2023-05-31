import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div className='counter-button-container'>
      <button id="counter-button" onClick={handleClick}>
        Counter = {count}
      </button>
    </div>
  );
};

function NameList() {
  const names = ['Jack', 'Jill', 'John'];
  const [list, setList] = useState(names);
  const [name, setName] = useState("");

  const handleRemoveClick = () => setList(list.slice(0, -1));
  const onAddNameButton = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div className='list-container'>
      <ul>
        <h2>Add Name</h2>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={onAddNameButton}>Add</button>
        {list.map((item) => {
          return(
            <li key={item}>{item}</li>
          )})}
      </ul>
      <button onClick={handleRemoveClick}>Remove Name</button>
    </div>
  )

}


function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
};

export default App;
