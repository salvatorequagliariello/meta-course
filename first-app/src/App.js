import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import RandomNumber from './components/RandomNumberGenerator';
import Card from './components/Card';

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
      <div className="cards-container">
        <Card h2="First card's H2" h3="First card's H3"/>
        <Card h2="Second card's H2" h3="Second card's H3"/>
        <Card h2="Third card's H2" h3="Third card's H3"/>
      </div>
      <RandomNumber />
      <Footer />
      
    </div>
  )
}

export default App;
