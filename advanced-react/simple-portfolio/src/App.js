import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import LandingSection from './components/LandingSection';


function App() {
  return (
    <ChakraProvider resetCSS="true">
      <div className="app-container">
        <Header />
        <LandingSection />
      </div>
    </ChakraProvider>
  );
}

export default App;
