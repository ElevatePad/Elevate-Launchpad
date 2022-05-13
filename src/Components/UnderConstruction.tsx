

import React from 'react'
import styled from 'styled-components';
import LogoDark from '../Images/Logo-Dark.png';
import Button from '../Components/Common/Button';
import Construction from '../Images/construction.png'
import { Link } from 'react-router-dom';

interface Props {
    theme: string;
}

const Container = styled.div<Pick<Props, 'theme'>>`
    min-width: 100vw;
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
    opacity: 0.4;
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
const ImageContainer = styled.div`
    width: 100%;
    margin-top: 15vh;
`
const Image = styled.img`
    width: 300px;
    display:block;
    margin:auto;
`
const Heading = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
    margin-top: 40px;
`
const SubHeading = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.theme.textPrimary};
    margin-top: 25px;
`

const UnderConstruction: React.FC<Props> = props => {

    return (
        <Container>
            <LandingNav>
                <Logo src={LogoDark} />
                <Link style={{ 'marginLeft': 'auto' }} to='/'>
                    <AppButton primary text='Home' height='40px' width='120px' />
                </Link>
            </LandingNav>
            <ImageContainer>
                <Image src={Construction} />
            </ImageContainer>
                <Heading>Under Construction</Heading>
                <SubHeading>Check back at a later date, and keep in touch on our socials to find out more!</SubHeading>
        </Container>
    )
}

export default UnderConstruction;