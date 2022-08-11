import styled from 'styled-components';
import Button from '../Common/Button'

interface Props {
    theme:string;
}

interface Styles {
    filled?: boolean
    width?: string;
    projectItem?: boolean;
}

export const Container = styled.div<Pick<Props, 'theme'>>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${props => props.theme.body};
  z-index: 1;
  height: 100%;
  background-attachment: fixed;
  position: relative;
  margin-top: 105px;

  &:after {
    content: ' ';
    box-sizing: border-box
    display: block;
    position: fixed;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.125;
    background-image: url(background-dark.png);
    background-position: center;
    background-size: cover;
    background-attachement: fixed;
`

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;


    @media screen and (max-width: 730px) {
        min-width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
`

export const SectionHeading = styled.h3`
    width: 100%;
    text-align: left;
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
    margin-top: 25px;
`
export const SectionRow = styled.div<Pick<Styles, | 'width' |'projectItem' >>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const SectionDescription = styled.p`
    font-size: 22.5px;
    font-weight: bold;
    text-align: left;
    width: 40%;
    margin-right: 10%;
    color: ${props => props.theme.textAlt}
`
export const SignupButton = styled(Button)`
    margin-bottom: 50px;
    color: ${props => props.theme.textAlt};
`