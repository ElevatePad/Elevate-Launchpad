import Nav from '../Components/Nav';
import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import GameContainer from '../Components/GameContainer';
import Interface from '../metamask';
import { useWeb3 } from '@3rdweb/hooks';
import Footer from '../Components/Footer';


interface Props {
    theme: string;
}

const Container = styled.div<Pick<Props, 'theme'>>`
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.body};
  font-family: 'Roboto Condensed', sans-serif;
  z-index: 1;
  position: relative;
`

const Main:React.FC<Props> = props => {

  const { address, connectWallet, provider } = useWeb3();
  const [connected, setConnected] = React.useState(false); 
  

  React.useEffect(() => {
      if (address == null) {
          connectWallet('injected');
          Interface.connectWallet(provider?.provider);
      }
   },   
  [])

  React.useEffect(() => {
      if(address != null) {
          setConnected(true);
      }
  }, [address])

  const manualConnect = () => {
    if (address == null) {
      connectWallet('injected');
      Interface.connectWallet(provider?.provider);
      setConnected(true)
    }
  }


    return (
        <Container theme={props.theme}>
          <Nav address={address} manualConnect={manualConnect} theme={props.theme} />
          <Header theme={props.theme} />
          <GameContainer connected={connected} theme={props.theme} />
          <Footer theme={props.theme} />
        </Container>
    )
}

export default Main