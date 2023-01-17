import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from './HOC';

function App(props) {
  const [count, setCount] = useState(0);
  // console.log('app', props);
  return (
    <div id="content">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
