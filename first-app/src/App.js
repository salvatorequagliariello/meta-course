import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import RandomNumber from './components/RandomNumberGenerator';
import Card from './components/Card';
import ModeToggler from './components/ModeToggler';
import Clock from './components/Clock';

function Header() {
  return <h1 className="header-title-h1">Questa è la mia prima App!</h1>
}

function App() {
  return (
    <div>
      <Header />
      <ModeToggler />
      <Nav />
      <div className="blog-container">
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </div>
      <Clock />
      <RandomNumber />
      <Footer />
      
    </div>
  )
}

export default App;
