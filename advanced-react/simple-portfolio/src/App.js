import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection'



function App() {
  return (
    <ChakraProvider resetCSS="true">
      <div className="app-container">
        <Header />
        <LandingSection />
        <ProjectSection />
      </div>
    </ChakraProvider>
  );
}

export default App;
