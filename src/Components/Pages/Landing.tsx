import React from 'react'
import styled from 'styled-components';
import LogoDark from '../Images/Logo-Dark.png';
import Button from '../Common/Button';
import LaunchPadGraphic from '../../Images/LaunchPadGraphic.png';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

interface Props {
    theme: string;
}

const Container = styled.div<Pick<Props, 'theme'>>`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${props => props.theme.body};
    z-index: 1;
    opacity: 100;
    position: relative;

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
    max-height: 100px;
    max-width: 90%;
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
const InnerContainer = styled.div`
    min-height: 80vh;
    min-width: 90%;
    margin-left: 5%;
    display: flex;
`
const InfoContainer = styled.div`
    min-height: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`
const InfoHeading = styled.h1`
    font-size: 50px;
    width: 100%;
    text-align: left;
    margin-top: -100px;
    color: ${props => props.theme.textMain}
`
const InfoDescription = styled.p`
    width: 80%;
    text-align: left;
    font-size: 20px;
    color: ${props => props.theme.textAlt};
    margin: 0px;
    margin-top: -10px;
    font-weight: bold;
`
const ImageContainer = styled.div`
    min-height: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Graphic = styled.img`
    width: 90%;
    margin-left: -10%;
`

const Landing: React.FC<Props> = props => {

    return (
        <Container>
            {/* <LandingNav>
                <Logo src={LogoDark} />
                <Link style={{ 'marginLeft': 'auto' }} to='/app'>
                    <AppButton primary text='Launch App' height='40px' width='120px' />
                </Link>
            </LandingNav> */}
            <Nav pageName='Landing' theme={props.theme}/>
            <InnerContainer>
                <InfoContainer>
                    <InfoHeading>ElevatePAD</InfoHeading>
                    <InfoDescription>ElevatePad will help develop projects with real world utility that are actively aligned with ESG (Environmental, Social, and Governance)  and DeFi principles.</InfoDescription>
                    <div style={{ 'minWidth': '100%' }}>
                        <Link to='/elevate-pad'>
                            <AppButton text='Launch App' primary height='40px' width='120px' />
                        </Link>
                    </div>
                </InfoContainer>
                <ImageContainer>
                    <Graphic src={LaunchPadGraphic} />
                </ImageContainer>
            </InnerContainer>
            <Footer theme={props.theme}/>
        </Container>
    )
}

export default Landing;