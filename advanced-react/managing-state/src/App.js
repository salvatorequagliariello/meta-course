import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ListProvider from "./components/ToDoListContext";


function App() {

  return (
    <div className="App">
      <div className="app-container">

        <h1>To-Do List</h1>
        <ListProvider>
          <ToDoForm />
          <ToDoList />
        </ListProvider>

      </div>
    </div>
  );
}

export default App;
