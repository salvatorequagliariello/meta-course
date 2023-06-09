import {useReducer} from 'react';

const reducer = (budget, action) => {
  if (action.type === "buy") return {money: budget.money - 10, list: [...budget.list, "buy"]};
  if (action.type === "sell") return  {money: budget.money + 10, list: [...budget.list, "sell"]};
  return budget;
}

function App() {
  const budgetObj = {
    money: 100,
    list: []
  };
  const [budget, dispatch] = useReducer(reducer, budgetObj);


  return (
    <div className="app-container">
      <h1>BUDGET TRACKER</h1>
      <p>{budget.money}</p>
      <p>{budget.list.map(item => <p>{item}</p>)}</p>
        <button onClick={() => dispatch({type: "sell"})}>Sell</button>
        <button onClick={() => dispatch({type: "buy"})}>Buy</button>
    </div>
  );
}

export default App;
