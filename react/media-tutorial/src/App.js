import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';


function App() {
  const urlYou = "https://www.youtube.com/watch?v=vq6-3Er59p4";
  return (
    <div className="App">
      <h1>React player tutorial</h1>
      <ReactPlayer url={urlYou} 
                   loop={true}
                   playing={true}
                   controls={true}
                   light={true}/>
                   
    </div>
  );
}

export default App;
