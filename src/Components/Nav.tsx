import styled from 'styled-components';
import React from 'react';
import Button from '../Components/Common/Button'
import LogoImage from '../Images/Logo-Dark.png';
import { Link } from 'react-router-dom';

interface Props {
    theme: string;
}

interface Styles {
    scrolled?: boolean;
}

const NavContainer = styled.div<Pick<Styles, | 'scrolled'>>`
    max-height: 100px;
    min-width: 100%;
    background-color: #28282A;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 50px;


    ${({ scrolled }) => scrolled && `
        position: fixed;
        top: 0;
        left: 0;
    `}}
`
const InnerContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: flex-start;
    margin-left: 5%;

    @media screen and (max-width: 475px) {
    }
`

const Logo = styled.img`
    margin-top: 10px;
    height: 50px;
    margin-bottom: 10px;
`
const ConnectButton = styled(Button)`
    margin-left: 15px;
    margin-top: 15px;
    font-size: 15px;
`
const OnboardButton = styled(Button)`
    margin-top: 20px;
    font-size: 12.5px;
`
const NavItem = styled.h3`
    font-size: 15px;
    color: ${props => props.theme.textPrimary};
    margin: 0px;
    margin-top: 25px;
    margin-right: 20px;

    &:hover {
        color: ${props => props.theme.textHighlight};
    }
`


const Nav: React.FC<Props> = props => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 175) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <NavContainer scrolled={scrolled}>
            <InnerContainer>
                <Logo src={LogoImage} />
                <Link style={{ 'marginLeft': 'auto' }} to='/staking'>
                    <NavItem>Staking</NavItem>
                </Link>
                <OnboardButton secondary width='120px' height='30px' text='Oboard Now' />
                <ConnectButton primary width='120px' height='40px' text='Connect' />
            </InnerContainer>
        </NavContainer>
    )
}

export default Nav;