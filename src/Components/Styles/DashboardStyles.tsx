import styled from 'styled-components'; 

export const Container = styled.div`
    min-width: 100vw;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 95vh;
    background-color: ${props => props.theme.body};
    z-index: 1;
    opacity: 100;
    margin-top: 105px;
    position: relative;


    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        z-index: -1;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.125;
        background-image: url(background-dark.png);
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
    }
`
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const HeaderTitle = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
    margin-top: 25px;
`
export const HeaderDescription = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
    color: ${props => props.theme.textAlt};

    @media screen and (max-width: 500px) {
        width: 900%;
    }
`
export const Section = styled.div`
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;

    @media screen and (max-width: 850px) {
        margin-bottom: 25px;
    }
`
export const ItemContainer = styled.div`
    background-color: ${props => props.theme.body};
    display: flex;
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};
    -webkit-box-shadow: ${props => props.theme.boxShadow};
    margin-top: 20px;
    margin-right: 20px;
    min-width: 300px;

    @media screen and (max-width: 730px) {
        margin-left: 2.5%;
        min-width: 95%;
        margin-right: 2.5%;
    }
`
export const ItemIcon = styled.img`
    height: 75px;
    padding: 10px;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
`
export const ItemHeading = styled.h3`
    width: 100%;
    font-size: 17.5px;
    margin: 0px;
    margin-top: 10px;
    color: ${props => props.theme.textAlt};
    font-style: italic;
`
export const ItemContent = styled.h3`
    width: 100%;
    margin: 0px;
    font-size: 22.5px;
    color: ${props => props.theme.textHighlight};
`
export const SectionDivider = styled.div`
    width: 70%;
    margin-left: 15%;
    min-height: 2px;
    background-color: ${props => props.theme.textAlt};
    margin-top: 25px;
    opacity: 50%;
`
export const InputContainer = styled.div`
    width: 50%;
    display: flex;
    border-radius: ${props => props.theme.borderRounding};
    -webkit-box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.body};
    border: 1px solid ${props => props.theme.textHighlight};
    margin-top: 15px;
    min-height: 35px;

    @media screen and (max-width: 850px) {
        width: 95%;
    }
`
export const Input = styled.input`
    background: transparent;
    outline: none;
    border: 0;
    color: ${props => props.theme.textAlt};
    width: 90%;
    margin-left: 10px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;

    @media screen and (max-width: 850px) {
        font-size: 13px;
    }
`
export const ImpactContainer = styled.div`
    background-color: ${props => props.theme.body};
    display: flex;
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};
    -webkit-box-shadow: ${props => props.theme.boxShadow};
    margin-top: 20px;
    margin-right: 20px;
    min-width: 300px;
    max-width: 400px;
    flex-wrap: wrap;

    @media screen and (max-width: 730px) {
        margin-left: 2.5%;
        min-width: 95%;
        margin-right: 2.5%;
    }
`
export const ImpactHeaderContainer = styled.div`
    display: flex;
    width: 100%;
`
export const ImpactHeading = styled.h3`
    font-size: 17.5px;
    margin: 0px;
    margin-left: 10px;
    margin-top: 15px;
    color: ${props => props.theme.textHighlight};
`
export const ActiveImpact = styled.div`
    border-radius: 15px;
    background-color: ${props => props.theme.textHighlight};
    color: ${props => props.theme.body};
    margin: 10px;
    font-weight: bold;
    font-size: 15px;
    padding: 7.5px;
    text-align: center;
    margin-left: auto;
`
export const ImpactContentHeading = styled.h3`
    font-size: 17.5px;
    margin: 0px;
    margin-left: 10px;
    color: ${props => props.theme.textAlt};
    margin-top: 1.25px;
`
export const ImpactContentValue = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
    margin-left: 12.5px;
    color: ${props => props.theme.textHighlight};
    margin-bottom: 10px;
`