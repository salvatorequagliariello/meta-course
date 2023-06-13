import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <HeroSection />
      <Main />
    </>
  );
}

export default App;
