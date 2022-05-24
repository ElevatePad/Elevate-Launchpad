import styled from 'styled-components';
import React from 'react';
import Button from '../Components/Common/Button'
import LogoImage from '../Images/Logo-Dark.png';
import Down from '../Images/arrow-down-alt.png';
import Up from '../Images/arrow-down-highlight.png';
import { Link } from 'react-router-dom';
import NavDropdown from '../Components/NavDropdown';

interface Props {
    theme: string;
    pageName?: string;
}

interface Styles {
    scrolled?: boolean;
    open: boolean;
    active?: boolean;
}

const NavContainer = styled.div<Pick<Styles, | 'scrolled'>>`
    max-height: 100px;
    min-width: 100%;
    background-color: #28282A;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 50px;
    z-index: 10000000000;

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
const ActionButton = styled(Button)`
    margin-left: 15px;
    margin-top: 15px;
    font-size: 15px;
`
const OnboardButton = styled(Button)`
    margin-top: 20px;
    font-size: 12.5px;
    @media screen and (max-width: 1065px) {
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
    @media screen and (min-width: 1065px) {
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
    @media screen and (max-width: 1065px) {
        display: none;
    }
`
const LinkTo = styled(Link)`
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
        console.log(props.pageName)
        switch (props.pageName) {
            case 'Landing':
                setButtonText('Launch App')
                setDestination('/ido')
                setActivePage('Landing')
                break;
            case 'Locker Landing':
                setActivePage('Locker Landing')
                break;
            case 'Construction':
                setButtonText('Home');
                setDestination('/')
                break
            case 'IDO':
                setActivePage('IDO')
                break;
            case 'Staking':
                setActivePage('Staking')
                break;
            case 'Meme Factory':
                setActivePage('Meme Factory')
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
        <NavContainer scrolled={scrolled}>
            <InnerContainer>
                <Logo src={LogoImage} />
                <LinksContainer>
                    <LinkTo to='/staking'>
                        <NavItem active={activePage === 'Staking'}>Staking</NavItem>
                    </LinkTo>
                    <LinkTo to='/ido'>
                        <NavItem active={activePage === 'IDO'}>IDO Launchpad</NavItem>
                    </LinkTo>
                    <LinkTo to='/meme-factory'>
                        <NavItem active={activePage === 'Meme Factory'}>Meme Factory</NavItem>
                    </LinkTo>
                    {/* <LinkTo to='/farm'>
                        <NavItem active={activePage == 'Farm'}>Farm</NavItem>
                    </LinkTo> */}
                    <LinkTo to='/dashboard'>
                        <NavItem active={activePage === 'Dashboard'}>Dashboard</NavItem>
                    </LinkTo>
                    <LinkTo to='/liquidity-lock'>
                        <NavItem active={activePage === 'Locker Landing'}>Locker</NavItem>
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
        </NavContainer>
    )
}

export default Nav;