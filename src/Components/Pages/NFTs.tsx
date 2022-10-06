import styled from "styled-components";
import { FC, useEffect, useState } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import Button from '../Common/Button';
import { useWeb3 } from '@3rdweb/hooks';
import Interface from '../../metamask';

interface Props {
    theme: string;
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
    min-height: 100vh;
    justify-content: center;

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
const Title = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0px;
    margin-top: 150px;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
    @media screen and (max-width: 415px) {
        font-size: 25px;
    }

    @media screen and (max-width: 375px) {
        font-size: 17.5px;
        margin-top: 200px;
    }
`
const SubHeading = styled.h3`
    width: 90%;
    text-align: center;
    margin: 0px;
    margin-left: 5%;
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.theme.textPrimary};
    margin-top: 25px;
    margin-bottom: 25px;

    @media screen and (max-width: 415px) {
        font-size: 20px;
    }

    @media screen and (max-width: 375px) {
        font-size: 15px;
    }
`
const VideoContainer = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 7.5px;
    border: 2px solid ${props => props.theme.textHighlight};
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};
    
    @media screen and (max-width: 425px) {
        width: 350px;
        height: 350px;
    }

    @media screen and (max-width: 375px) {
        width: 275px;
        height: 275px;
    }

    @media screen and (max-width: 275px) {
        width: 200px;
        height: 200px;
    }


`
const Video = styled.video`
    width: 100%;
    border-radius: 5px;
    height: 100%;
`
const WhitelistContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const WhitelistMessage = styled.h3`
    text-align: center;
    margin: 0px;
    padding: 0px;
    font-size: 30px;
    font-weight: bold;
    margin-top: 25px;
    word-wrap: break-word;
    color: ${props => props.theme.textHighlight};

    @media screen and (max-width: 415px) {
        font-size: 25px;
    }

    @media screen and (max-width: 375px) {
        font-size: 17.5px;
    }
`
const MintButton = styled(Button)`
    margin-top: 25px;
    margin-bottom: 25px;
`

const NFTs: FC<Props> = props => {

    const { address, connectWallet, provider } = useWeb3();
    const [whitelistMessage, setWhitelistMessage] = useState('Looks like you arent whitelisted :(');

    // useEffect(() => {
    //     if (address == null) {
    //         connectWallet('injected');
    //         Interface.connectWallet(provider?.provider);
    //     }
    // },
    //     [])

    // useEffect(() => {
    //     if (address != null) {
    //         Interface.connectWallet(provider?.provider);
    //     }
    // }, [address])

    // const manualConnect = () => {
    //     if (address == null) {
    //         connectWallet('injected');
    //         Interface.connectWallet(provider?.provider);
    //     }
    // }

    useEffect(() => {
        const checkWhitelist = async () => {
            let res = await Interface.checkWhitelist(address);
            let mintStatus = await Interface.checkMintState(address);

            console.log(res, mintStatus)

            if (mintStatus) {
                setWhitelistMessage('You have already minted!');
            }
            else if (res) {
                setWhitelistMessage('You are whitelisted! :)');
            }
        }

        let interval = setInterval(() => {
            checkWhitelist();
        }, 5000)

        return () => clearInterval(interval);
    })

    return (
        <Container>
            <Nav pageName='NFT' theme={props.theme} />
            <Title>Elevate OG Access Pass</Title>
            <SubHeading>ElevateNFTs will bring NFT innovations through various partners who believe ESG impact on blockchain has hardly begun. Stay tuned for more details and in the meantime join our discord and learn how you too can become an Elevate OG and what perks you will unlock.</SubHeading>
            <VideoContainer>
                <Video playsInline autoPlay muted loop>
                    <source src='1.mp4' />
                </Video>
            </VideoContainer>
            <WhitelistContainer>
                <WhitelistMessage>{whitelistMessage}</WhitelistMessage>
            </WhitelistContainer>
            <MintButton onClick={async () => await Interface.mint()} theme={props.theme} text="Mint NFT" primary width='100px' height='50px'></MintButton>
            <Footer theme={props.theme} />
        </Container>
    )
}

export default NFTs;