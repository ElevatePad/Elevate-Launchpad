import React from "react";
import styled from "styled-components";

import Unity, { UnityContext } from "react-unity-webgl";



interface Props {
    theme: string;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    min-width: 80%;
    max-width: 80%;
    margin-left: 10%;
    border-top: 2px dashed ${props => props.theme.textAlt};
    margin-top: 50px;
    min-height: 600px;
    max-height: 600px;
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
    margin-right: 75%;
    margin-top: 50px;
`

const GameContainer: React.FC<Props> = props => {
    const unityContext = new UnityContext({
        loaderUrl: "build/WhackABonk.loader.js",
        dataUrl: "build/WhackABonk.data",
        frameworkUrl: "build/WhackABonk.framework.js",
        codeUrl: "build/WhackABonk.wasm",
      });

    return (
        <Container>
            <ErrorContainer>
                {/* <ErrorHeading>Ooops!</ErrorHeading>
                <ErrorDescription>Connect your wallet to load the Whack a Bonk! game.</ErrorDescription> */}
            </ErrorContainer>
            <Game unityContext={unityContext}/>
        </Container>
    )
}

export default GameContainer;