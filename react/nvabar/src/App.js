import Homepage from  './components/Homepage';
import About from './components/About';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
