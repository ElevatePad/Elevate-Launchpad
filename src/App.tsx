import './App.css';
import { defaultTheme, lightTheme } from './Themes/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Themes/globalStyles';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import {
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom'
import Main from './Components/Main';
import Landing from './Components/Landing';
import React from 'react';
import UnderConstruction from './Components/UnderConstruction';

interface Props {
  theme: string;
}

function App() {
  const [theme, setTheme] = React.useState('default');

  const supportedChainIds = [1, 56, 97];

  const connectors = {
    injected: {}
  }

  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path='/' element={<Landing theme={theme}/>}/>
            <Route path='/app' element={<Main theme={theme}/>}/>
            <Route path='/staking' element={<UnderConstruction theme={theme}/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </ThirdwebWeb3Provider>
  );
}

export type ThemeType = typeof defaultTheme;
export default App;
