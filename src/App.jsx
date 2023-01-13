import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div id="content">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
