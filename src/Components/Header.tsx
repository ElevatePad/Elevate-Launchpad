import React from 'react';
import styled from 'styled-components';

interface Props {
    theme: string;
}

const Container = styled.div`
    min-width: 80%;
    max-width: 80%;
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const IntroHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.textPrimary};
    font-size: 32.5px;
    font-family: 'MoreSugar-Regular', sans-serif;
    width: 100%;
`
const IntroDescription = styled.p`
    width: 60%;
    font-size: 25px;
    text-align: center;
    color: ${props => props.theme.textAlt};
    font-family: 'MoreSugar-Thin', sans-serif;
    margin-top: -10px;
`
const Highlight = styled.strong`
    font-size: 20px;
    color: #F9A03F;
`

const Header:React.FC<Props> = props => {

    return (
        <Container>
            <IntroHeading>Whack a Bonk!</IntroHeading>
            <IntroDescription>Play our rendition of a classic <Highlight>'Whack a Bonk!'</Highlight> and earn the opportunity to mint a unique <Highlight>Baby Bonk NFT</Highlight>.</IntroDescription>
        </Container>
    )
}

export default Header;