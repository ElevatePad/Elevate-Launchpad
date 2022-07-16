import styled from 'styled-components';
import React from 'react';
import Button from '../Components/Common/Button'
import LogoImage from '../Images/Logo-Dark.png';
import LogoTextImage from '../Images/logo-text.png';
import Down from '../Images/arrow-down-alt.png';
import Up from '../Images/arrow-down-highlight.png';
import { Link } from 'react-router-dom';
import NavDropdown from '../Components/NavDropdown';
import { keyframes } from 'styled-components';

interface Props {
    theme: string;
    pageName?: string;
}

interface Styles {
    scrolled?: boolean;
    open: boolean;
    active?: boolean;
}

const ScrollText = keyframes`
    from {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
    to {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
`

const NavContainer = styled.div<Pick<Styles, | 'scrolled'>>`
    max-height: 105px;
    min-width: 100%;
    background-color: ${props => props.theme.bodyLighter};
    box-shadow: ${props => props.theme.boxShadow};
    -webkit-box-shadow: ${props => props.theme.boxShadow};
    z-index: 10000000000;
    overflow: hidden;

    ${({ scrolled }) => scrolled && `
        position: fixed;
        top: 0;
        left: 0;
    `}}
`
const InnerContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: flex-start;
    margin-left: 2.5%;

    @media screen and (max-width: 475px) {
    }
`
const DonationContainer = styled.div`
    width: 200%;
    background-color: ${props => props.theme.textHighlight};
    display: flex;
    margin-bottom: 50px;
    z-index: -1000;
`
const DonationText = styled.h3`
    font-size: 20px;
    text-align: center;
    color: ${props => props.theme.button.textColor};
    font-weight: lighter;
    margin: 5px;
    -moz-animation: ${ScrollText} 15s linear infinite;
    -webkit-animation: ${ScrollText} 15s linear infinite;
    animation: ${ScrollText} 15s linear infinite;
`

const Logo = styled.img`
    margin-top: 10px;
    height: 50px;
    margin-bottom: 10px;
    display: none;

    @media screen and (max-width: 560px) {
        display: block;
    }
`
const LogoText = styled.img`
    height: 40px;
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: 10px;

    @media screen and (max-width: 560px) {
        display: none;
    }
`
const ActionButton = styled(Button)`
    margin-left: 15px;
    margin-top: 15px;
    font-size: 15px;
`
const OnboardButton = styled(Button)`
    margin-top: 20px;
    font-size: 12.5px;
    color: ${props => props.theme.textAlt};

    @media screen and (max-width: 1275px) {
        margin-left: auto;
    }
`
const NavItem = styled.h3<Pick<Styles, 'active'>>`
    font-size: 15px;
    color: ${props => props.active ? props.theme.textHighlight : props.theme.textPrimary};
    margin: 0px;
    margin-top: 25px;
    margin-right: 20px;

    &:hover {
        color: ${props => props.theme.textHighlight};
    }
`
const NavMenuContainer = styled.div<Pick<Styles, 'open'>>`
    position: relative;
    border-radius: 100%;
    border: 2px solid ${props => props.open ? props.theme.textHighlight : props.theme.textPrimary};
    max-height: 30px;
    max-width: 30px;
    margin-top: 20px;
    margin-left: 10px;
    @media screen and (min-width: 1275px) {
        display: none;
    }
`
const NavMenuImage = styled.img <Pick<Styles, 'open'>>`
    width: 30px;
    padding: 7.5px;
    margin-left: -1.5px;
    margin-top: ${props => props.open ? '-2.5px' : '0'};
    transition: height 2s;
`
const LinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    @media screen and (max-width: 1275px) {
        display: none;
    }
`
const LinkTo = styled(Link)`
    text-decoration: none;
`
const ExternalLink = styled.a`
    text-decoration: none;
`


const Nav: React.FC<Props> = props => {
    const [scrolled, setScrolled] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [buttonText, setButtonText] = React.useState<string>('Connect');
    const [destination, setDestination] = React.useState<string>('/')
    const [activePage, setActivePage] = React.useState('');

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 175) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    React.useEffect(() => {
        switch (props.pageName) {
            case 'Landing':
                setButtonText('Launch App')
                setDestination('/elevate-pad')
                setActivePage('Landing')
                break;
            case 'ElevateLOCK':
                setActivePage('ElevateLOCK')
                break;
            case 'Construction':
                setButtonText('Home');
                setDestination('/')
                break
            case 'ElevatePAD':
                setActivePage('ElevatePAD')
                break;
            case 'Dashboard':
                setActivePage('Dashboard')
                break;
            case 'ElevateMEME':
                setActivePage('ElevateMEME')
                break;
            case 'About':
                setActivePage('About')
                break;
            case 'Partners':
                setActivePage('Partners')
                break;
            case 'NFT':
                setActivePage('NFT')
                break;
            default:
                setButtonText('Connect')
                break;
        }
    }, [props.pageName])


    const handleSubmit = async () => {
        switch (buttonText) {
            case 'Connect':

                break;

            default:
                break;
        }
    }

    return (
        <>
            <NavContainer scrolled={scrolled}>
                <InnerContainer>
                    <LinkTo to='/'>
                        <Logo src={LogoImage} />
                        <LogoText src={LogoTextImage} />
                    </LinkTo>
                    <LinksContainer>
                        <LinkTo to='/elevate-pad'>
                            <NavItem active={activePage === 'ElevatePAD'}>ElevatePAD</NavItem>
                        </LinkTo>
                        <LinkTo to='/elevate-meme'>
                            <NavItem active={activePage === 'ElevateMEME'}>ElevateMEME</NavItem>
                        </LinkTo>
                        <LinkTo to='/elevate-dao'>
                            <NavItem active={activePage == 'ElevateDAO'}>ElevateDAO</NavItem>
                        </LinkTo>
                        <LinkTo to='/dashboard'>
                            <NavItem active={activePage === 'Dashboard'}>Dashboard</NavItem>
                        </LinkTo>
                        <LinkTo to='/elevate-lock'>
                            <NavItem active={activePage === 'ElevateLOCK'}>Locker</NavItem>
                        </LinkTo>
                        <ExternalLink href='https://elevatepad.gitbook.io/elevate-usdelev/' target='_blank'>
                            <NavItem active={activePage === 'About'}>WhitePaper</NavItem>
                        </ExternalLink>
                        <LinkTo to='/partners'>
                            <NavItem active={activePage === 'Partners'}>Partners</NavItem>
                        </LinkTo>
                        <LinkTo to='/nft'>
                            <NavItem active={activePage === 'NFT'}>NFT's</NavItem>
                        </LinkTo>
                    </LinksContainer>
                    <OnboardButton secondary width='120px' height='30px' text='Onboard Now' />
                    {
                        buttonText == 'Connect' ? <ActionButton primary width='120px' height='40px' text={buttonText} />
                            : <LinkTo to={destination}>
                                <ActionButton primary width='120px' height='40px' text={buttonText} />
                            </LinkTo>
                    }
                    <NavMenuContainer open={dropdownOpen} onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <NavMenuImage open={dropdownOpen} src={dropdownOpen ? Up : Down} />
                        <NavDropdown open={dropdownOpen} close={handleDropdown} theme={props.theme} />
                    </NavMenuContainer>
                </InnerContainer>
            <DonationContainer>
                <DonationText>Previously donated nearly 1 million dollars to Coral Restoration Foundation.</DonationText>
            </DonationContainer>
            </NavContainer>
        </>
    )
}

export default Nav;