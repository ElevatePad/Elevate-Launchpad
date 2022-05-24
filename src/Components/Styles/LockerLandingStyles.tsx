import styled from 'styled-components';
import Button from '../Common/Button';

interface Props {
    theme: string;
}


export const Container = styled.div<Pick<Props, 'theme'>>`
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
export const InnerContainer = styled.div`
    min-height: 80vh;
    min-width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    max-height: 300px;
    width: 100%;
`
export const LockerImg = styled.img`
    max-width: 300px;
    max-height: 300px;
`
export const Heading = styled.h3`
    width: 100%;
    text-align: center;
    color: ${props => props.theme.textHighlight};
    font-size: 40px;
    margin: 0px;
    margin-top: 25px;
`
export const SubHeader = styled.h3`
    width: 50%;
    text-align: center;
    color: ${props => props.theme.textPrimary};
    font-size: 20px;
    margin: 0px;
    margin-left: 25%;
    margin-top: 15px;
    @media screen and (max-width: 400px) {
        width: 80%;
        margin-left: 10%;
    }
`
export const SubHeading = styled.h3`
    width: 50%;
    text-align: center;
    color: ${props => props.theme.textHighlight};
    font-size: 20px;
    margin: 0px;
    margin-left: 25%;
    margin-top: 15px;
    @media screen and (max-width: 400px) {
        width: 80%;
        margin-left: 10%;
    }
`
export const Description = styled.h3`
    width: 50%;
    text-align: center;
    color: ${props => props.theme.textAlt};
    font-size: 15px;
    margin: 0px;
    margin-left: 25%;
    margin-top: 15px;
    font-weight: light;
    @media screen and (max-width: 400px) {
        width: 80%;
        margin-left: 10%;
    }
`
export const NewLockButton = styled(Button)`
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
`

export const SearchContainer = styled.div`
    max-width: 40%;
    border-radius: ${props => props.theme.borderRounding};
    background-color: ${props => props.theme.bodyLighter};
    box-shadow: ${props => props.theme.boxShadow};
    webkit-box-shadow: ${props => props.theme.boxShadow};
    height: 35px;
    margin-left: 30%;
    margin-top: 15px;
    display: flex;
    @media screen and (max-width: 775px) {
        max-width: 80%;
        margin-left: 10%;
    }
`

export const SearchInput = styled.input`
    border: hidden;
    outline: none;
    width: 90%;
    color: ${props => props.theme.textHighlight};
    font-size: 17.5px;
    margin-top: 10px;
    margin-left: 10px;
    height: 17.5px;
    background-color: transparent;
`
export const SearchButtonContainer = styled.div`
    height: 80%;
    margin-left: auto;
    margin-top: 3.5px;
    margin-right: 3.5px;
    width: 27.5px;
    background-color: ${props => props.theme.body};
    border-radius: ${props => props.theme.borderRounding};
`
export const SearchButtonIcon = styled.img`
    width: 17.5px;
    margin: 5px;
`
export const ActiveLockContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin-left: 7.5%;
    justify-content: center;

    @media screen and (max-width: 730px) {
        min-width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
`

