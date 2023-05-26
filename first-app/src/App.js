import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

function Header() {
  return <h1 className="header-title-h1">Questa è la mia prima App!</h1>
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="blog-container">
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </div>
      <Footer />
      
    </div>
  )
}

export default App;
