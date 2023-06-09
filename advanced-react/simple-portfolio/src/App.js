import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection';
import ContactMeSection from './components/ContactMeSection';
import AlertProvider from './context/alertContext'
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider resetCSS="true">
        <div className="app-container">
      <AlertProvider>
          <Header />
          <LandingSection />
          <ProjectSection />
          <ContactMeSection />
          <Footer />
      </AlertProvider>
        </div>
    </ChakraProvider>
  );
}

export default App;
