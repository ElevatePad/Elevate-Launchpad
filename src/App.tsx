import './App.css';
import Nav from './Components/Nav';
import React from 'react';
import styled from 'styled-components';
import { defaultTheme, lightTheme } from './Themes/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Themes/globalStyles';
import Header from './Components/Header';
import GameContainer from './Components/GameContainer';
import Footer from './Components/Footer';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';


interface Props {
  theme: string;
}

const Container = styled.div<Pick<Props, 'theme'>>`
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme === 'light' ? lightTheme.body : defaultTheme.body};
  font-family: 'Roboto Condensed', sans-serif;
  z-index: 1;
  position: relative;
`


function App() {
  const [theme, setTheme] = React.useState('light');
  const supportedChainIds = [1, 56];

  const connectors = {
    injected: {}
  }


  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : defaultTheme}>
        <GlobalStyles />
        <Container theme={theme}>
          <Nav theme={theme} />
          <Header theme={theme} />
          <GameContainer theme={theme} />
          <Footer theme={theme} />
        </Container>
      </ThemeProvider>
    </ThirdwebWeb3Provider>
  );
}

export type ThemeType = typeof defaultTheme;
export default App;
