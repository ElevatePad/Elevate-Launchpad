import React from "react";
import styled from "styled-components";
import telegramLogo from '../Images/telegram.png';
import twitterLogo from '../Images/twitter.png';

interface Props {
    theme: string;
}

const Container = styled.div`
    min-width: 90%;
    margin-left: 5%;
    border-top: 2px dashed ${props => props.theme.textAlt};
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
`
const InnerContainer = styled.div`
    width: 50%; 
    display: flex;
    justify-content: center;
    margin-top: 15px;
`
const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
`
const Disclaimer = styled.h3`
    min-width: 100%;
    text-align: center;
    font-size: 12.5px;
    color: ${props => props.theme.textAlt};
    margin-top: -2.5px;
`

const Footer:React.FC<Props> = props => {

    return (
        <Container>
            <InnerContainer>
                <Logo src={telegramLogo}/>
                <Logo src={twitterLogo}/>
            </InnerContainer>
            <Disclaimer>© Baby Bonk All Rights Reserved</Disclaimer>
        </Container>
    )
}

export default Footer;