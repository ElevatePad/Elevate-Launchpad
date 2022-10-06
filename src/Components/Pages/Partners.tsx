

import React from 'react'
import styled from 'styled-components';
import Button from '../Common/Button';
import Construction from '../Images/construction.png'
import Nav from '../Nav'
import Footer from '../Footer';

interface Props {
    theme: string;
    title?: string;
    desc?: string;
    img?: string;
    url?: string;
}

const Container = styled.div<Pick<Props, 'theme'>>`
    min-width: 100vw;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    background-color: ${props => props.theme.body};
    z-index: 1;
    opacity: 100;
    position: relative;
    min-height: 95vh;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 110%;
    opacity: 0.125;
    background-image: url(background-dark.png);
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
  }
`
const LandingNav = styled.div`
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: flex-start;
`
const Logo = styled.img`
    margin-top: 15px;
    height: 50px;
`
const AppButton = styled(Button)`
    margin-left: auto;
    margin-top: 20px;
    font-size: 15px;
`
const Heading = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0px;
    margin-top: 150px;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
`
const LinkHeading = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0px;
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
    margin-top: 15px;
`
const SubHeading = styled.h3`
    width: 90%;
    text-align: center;
    margin: 0px;
    margin-left: 5%;
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.theme.textAlt};
    margin-top: 25px;
    margin-bottom: 25px;
`


const PanelContainer = styled.div`
    width: 70%;
    margin-left: 15%;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-wrap: wrap;
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};
    font-weight: lighter;
    margin-top: 20px;
    margin-bottom: 20px;
`
const ImageContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Centering y-axis */
    align-items :center; /* Centering x-axis */
    @media screen and (max-width: 1120px){
        width: 100%;
    }
`
const TextContainer = styled.div`
    width: 70%;
    display: flex;
    font-weight: lighter;
    flex-wrap: wrap;
    @media screen and (max-width: 1120px){
        width: 100%;
    }
`
const PanelHeading = styled.h3`
    width: 100%;
    height: 40px;
    color: ${props => props.theme.textHighlight};
    font-size: 30px;
    margin: 5px;
    margin-top: 10px;
    @media screen and (max-width: 1120px){
        text-align: center;
        font-size: 25px;
    }
`
const PanelDesc = styled.h3`
    width: 100%;
    font-size: 20px;
    margin: 5px;
    margin-bottom: 15px;
    margin-right: 15px;

    @media screen and (max-width: 1120px){
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        font-size: 15px;
    }
`
const PanelLogo = styled.img`
    max-width: 300px;
    @media screen and (max-width: 1120px){
        width: 100%;
    }
`
const Link = styled.a`
    
`
const Partners: React.FC<Props> = props => {

    return (
        <>
            <Container>
                <Nav pageName='Partners' theme={props.theme} />
                <Heading>Elevate Partners</Heading>
                <SubHeading>Elevate partners with organizations that help facilitate a vision of an ethical and sustainable future that will benefit from blockchain transparency and accountability.</SubHeading>
                <Panel url='https://thegivingblock.com/#menu-about' img='gb.png' theme={props.theme} title='Giving Block' desc='The Giving Block is the #1 crypto donation solution, which provides an ecosystem for nonprofits and charities to fundraise Bitcoin and other cryptocurrencies, be found by crypto donors, receive funds instantly, and become part of a network of crypto media partners to support their missions.'></Panel>
                <Panel url='https://www.coralrestoration.org/about' img='crf.png' title='Coral Restoration Foundation' desc="Coral Restoration Foundation™ is the largest reef restoration organisation in the world. Headquartered in Key Largo Florida, we were founded in response to the wide-spread loss of the dominant coral species on Florida's Coral Reef. We have been working to turn the tide for this critical ecosystem since 2007." theme={props.theme}></Panel>
                <Panel url='https://www.pinksale.finance/' img='pinksale.png' title='Pinksale' desc='PinkSale is a decentralized launchpad that allows users to launch their own token and create their own initial token sale. No coding knowledge is required, just simply navigate through to our terminal and design your own token in just a few clicks. PinkSale offers multiple other features to help you with the overall token launch, such as: Automatic listing of your token on PancakeSwap, UniSwap, ShibaSwap, SushiSwap, KuSwap, QuickSwap and MM Finance, all whilst giving you the ability to lock your LP and and adding an optional vesting period for your tokens.' theme={props.theme}></Panel>
            </Container>
            <Footer theme={props.theme} />
        </>
    )
}

const Panel: React.FC<Props> = props => {

    return (
        <PanelContainer>
            <ImageContainer>
                <Link target='_blank' href={props.url}>
                    <PanelLogo src={props.img} />
                </Link>
            </ImageContainer>
            <TextContainer>
                <PanelHeading>{props.title}</PanelHeading>
                <PanelDesc>{props.desc}</PanelDesc>
            </TextContainer>
        </PanelContainer>
    )
}

export default Partners;