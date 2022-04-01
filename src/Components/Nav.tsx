import React from 'react';
import styled from 'styled-components';
import Button from './Common/Button';
import logo from '../Images/logo.png';
import priceLogo from '../Images/logo-dog.png'
import Interface from '../metamask';
import { useWeb3 } from '@3rdweb/hooks';
import * as _useWeb3 from '@3rdweb/react';

interface Props {
    theme:string;
}

const Container = styled.div`
    min-width: 100%;
    min-height: 70px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
`
const ConnectButton = styled(Button)`
    margin-top: 10px;
    margin-right: 10px;
    font-size: 15px;

    @media (max-width: 768px) {
        width: 150px;
    }
`
const Logo = styled.img`
    height: 60px;
    margin-top: 5px;
    margin-left: 10px;
`
const PriceContainer = styled.div`
    display: flex;
    height: 45px;
    margin-top: 12.5px;
    background-color: ${props => props.theme.priceBackground};
    border-radius: ${props => props.theme.borderRounding};
    margin-right: auto;
    margin-left: 10px;
    -webkit-box-shadow: ${props => props.theme.button.boxShadow};
    box-shadow: ${props => props.theme.button.boxShadow};

    @media (max-width: 768px) {
        width: 120px;
    }
`
const PriceLogo = styled.img`
    margin-left: 2.5px;
    margin-top: 2.5px;
    height: 40px;
`
const PriceText = styled.h3`
    margin-right: 15px; 
    margin-top: 15px;
    font-size: 15px;
    color: ${props => props.theme.textPrimary};
    font-family: 'MoreSugar-Regular', sans-serif;
    @media (max-width: 768px) {
        font-size: 12.5px
    }
`

const Nav:React.FC<Props> = props => {

    const { address, connectWallet, provider } = useWeb3();

    React.useEffect(() => {
        Interface.connectWallet(provider?.provider);
     },   
    [provider, address])

    return (
        <Container>
            <Logo src={logo}/>
            <PriceContainer>    
                <PriceLogo src={priceLogo} />
                <PriceText>$0.00023</PriceText>
            </PriceContainer>
            <ConnectButton onClick={() => connectWallet('injected')} primary theme={props.theme} height='50px' width='200px' text={address != null ? address.substring(0,5) + "..." + address.substring(38,44) : "Connect"}/>
        </Container>
    )
}

export default Nav;