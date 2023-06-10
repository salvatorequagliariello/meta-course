import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';


function App() {
  return (
    <ChakraProvider resetCSS="true">
      <div className="app-container">
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;
