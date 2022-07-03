import React from 'react'
import * as Styled from '../Styles/LockerLandingStyles';
import Nav from '../Nav'
import LockAndKey from '../../Images/lockandkey.png';
import SearchIcon from '../../Images/search-icon.png';
import LockerPanelMin from '../LockerPanelMin';
import Footer from '../Footer';

interface Props {
    theme: string;
}

const LockerLanding: React.FC<Props> = props => {

    return (
        <Styled.Container>
            <Nav pageName='ElevateLOCK' theme={props.theme} />
            <Styled.InnerContainer>
                <Styled.ImageContainer>
                    <Styled.LockerImg src={LockAndKey} />
                </Styled.ImageContainer>
                <Styled.Heading>Liquidity Locker</Styled.Heading>
                <Styled.SubHeader>Provide protection for your investors by locking your projects liqudity using our trusted locker!</Styled.SubHeader>
                <Styled.NewLockButton width='175px' text='Lock your liqudity here!' theme={props.theme} secondary />
                <Styled.SubHeading>Search for active locks!</Styled.SubHeading>
                <Styled.Description>Search using contract address, pair address, lock address or project name.</Styled.Description>
                <Styled.SearchContainer>
                    <Styled.SearchInput placeholder='Search...' />
                    <Styled.SearchButtonContainer>
                        <Styled.SearchButtonIcon src={SearchIcon} />
                    </Styled.SearchButtonContainer>
                </Styled.SearchContainer>
                <Styled.SubHeading>View active locks!</Styled.SubHeading>
                <Styled.ActiveLockContainer>
                    <LockerPanelMin lockPercent={100} name='Elevate' theme={props.theme} />
                    <LockerPanelMin lockPercent={70} name='ETH' theme={props.theme} />
                    <LockerPanelMin lockPercent={85} name='BNB' theme={props.theme} />
                    <LockerPanelMin lockPercent={98} name='SOL' theme={props.theme} />
                    <LockerPanelMin lockPercent={22} name='BTC' theme={props.theme} />
                </Styled.ActiveLockContainer>
                <div style={{'minHeight' : '200px'}}/>
            </Styled.InnerContainer>
            <Footer theme={props.theme}/>
        </Styled.Container>
    )
}

export default LockerLanding;