import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function Header() {
  return <h1>Questa è la mia prima App!</h1>
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
    </div>
  )
}

export default App;
