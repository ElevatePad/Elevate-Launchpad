import React from "react";
import styled from "styled-components";
import Button from "./Common/Button";
import Unity, { UnityContext } from "react-unity-webgl";


interface Props {
    theme: string;
    connected: boolean;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 80%;
    max-width: 80%;
    margin-left: 10%;
    border-top: 2px dashed ${props => props.theme.textAlt};
    margin-top: 50px;
    min-height: 600px;
`
const ErrorContainer = styled.div`
    min-width: 80%;
    max-width: 80%;
    margin-top: 225px;
`
const ErrorHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.textPrimary};
    font-size: 27.5px;
    font-family: 'MoreSugar-Regular', sans-serif;
    width: 100%;
`
const ErrorDescription = styled.p`
    font-size: 20px;
    text-align: center;
    color: ${props => props.theme.textAlt};
    font-family: 'MoreSugar-Thin', sans-serif;
    margin-top: -10px;
`
const Game = styled(Unity)`
    max-width: 100%;
    min-width: 100%;
    max-height: 80%;
    margin-top: 50px;
`
const WinContainer = styled.div`
    display: flex: 
    min-width: 60%;
    border: 1px dashed ${props => props.theme.textAlt};
    min-height: 60px;
    max-height: 60px;
    border-radius: ${props => props.theme.borderRounding};
    margin-bottom: 20px;
    margin-top: 20px;
`
const WinMessage = styled.h3`
    max-width: 60%;
    text-wrap: wrap;
    margin-left: 10px;
    font-size: 15px;
    color: ${props => props.theme.textPrimary};
`
const MintButton = styled(Button)`
    margin-top: 12.5px;
    margin-left: 5%;
`

const GameContainer: React.FC<Props> = props => {
    const unityContext = new UnityContext({
        loaderUrl: "assets/game/WhackABonk.loader.js",
        dataUrl: "assets/game/WhackABonk.data",
        frameworkUrl: "assets/game/WhackABonk.framework.js",
        codeUrl: "assets/game/WhackABonk.wasm",
    });

    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [gameWon, setGameWon] = React.useState(false);

    React.useEffect(() => {
        if (!props.connected) {
            console.log('hitting')
            setError(true);
            setErrorMessage('Connect your wallet to load the Whack a Bonk! game.')
        } else {
            setError(false);
        }
    }, [props.connected])

    React.useEffect(function () {
        unityContext.on("GameWon", function () {
          setGameWon(true);
          alert('boom')
        });
      }, []);

    return (
        <Container>
            {
                !error ? <Game unityContext={unityContext} /> : 
                <ErrorContainer>
                    <ErrorHeading>Ooops!</ErrorHeading>
                    <ErrorDescription>{errorMessage}</ErrorDescription>
                </ErrorContainer>
            }
            <WinContainer>
                <WinMessage>Congratulations, you've beat Whack a Bonk! The mint button will become enabled once the server authorises your address!</WinMessage>
                <MintButton primary width="30%" height="60%" text='Mint'></MintButton>
            </WinContainer>
        </Container>
    )
}

export default GameContainer;