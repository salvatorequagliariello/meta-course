import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div className="calculator">
        <div className="title-container"> 
          <h1 className="calculator-title">Calculator</h1> 
        </div> 
        <form>
          <div className="calculator-screen">
            <input
              pattern="[0-9]" 
              ref={inputRef} 
              type="number" 
              placeholder="Type a number" 
              className="calculator-screen"
              />
            <p ref={resultRef} className="calculator-result"> 
              Result: {result} 
            </p> 
          </div>
          <div className="calculator-buttons">
            <button onClick={plus}>Add</button> 
            <button onClick={minus}>Subtract</button>
            <button onClick={times}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={resetInput}>Cancel</button>
            <button onClick={resetResult}>Reset</button>
          </div>
        </form> 
      </div>
    </div> 
  ); 
} 
 
export default App; 