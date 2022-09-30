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
import Main from './Components/Pages/Main';
import Landing from './Components/Pages/Landing';
import React from 'react';
import UnderConstruction from './Components/UnderConstruction';
import LockerLanding from './Components/Pages/LockerLanding';
import Dashboard from './Components/Pages/Dashboard';
import Partners from './Components/Pages/Partners';

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
            <Route path='/elevate-pad' element={<Main theme={theme}/>}/>
            <Route path='/dashboard' element={<Dashboard theme={theme}/>}/>
            <Route path='/elevate-meme' element={<UnderConstruction theme={theme}/>}/>
            <Route path='/elevate-dao' element={<UnderConstruction theme={theme}/>}/>
            <Route path='/elevate-lock' element={<LockerLanding theme={theme}/>}/>
            <Route path='/about' element={<UnderConstruction theme={theme}/>}/>
            <Route path='/partners' element={<Partners theme={theme}/>}/>
            <Route path='/nft' element={<UnderConstruction theme={theme}/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </ThirdwebWeb3Provider>
  );
}

export type ThemeType = typeof defaultTheme;
export default App;
