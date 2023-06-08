import ThemeProvider from './components/ThemeContext.js'
import Header from './components/Header';
import Switch from './components/Switch.js';
import Main from './components/Main.js';

function App() {
  return (
      <ThemeProvider>
        <Header>Little Lemon Restaurant 🍕</Header>
        <Main />
        <Switch />
      </ThemeProvider>
  );
}

export default App;

