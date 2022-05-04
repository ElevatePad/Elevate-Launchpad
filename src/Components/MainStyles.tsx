import styled from 'styled-components';
import Button from './Common/Button'

interface Props {
    theme:string;
}

interface Styles {
    filled?: boolean
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

  &:after {
    content: ' ';
    box-sizing: border-box
    display: block;
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    background-image: url(background-dark.png);
    background-position: center;
    background-size: cover;
    background-attachement: fixed;
`

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin-left: 20%; 
    justify-content: center;
    margin-bottom: 20px;

    border-bottom: 1px solid ${props => props.theme.textAlt};

    @media screen and (max-width: 730px) {
        min-width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
`

export const SectionHeading = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.textHighlight};
    margin-top: 25px;
`
export const SectionDescription = styled.p`
    font-size: 22.5px;
    font-weight: bold;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    color: ${props => props.theme.textAlt}
`
export const SignupButton = styled(Button)`
    margin-bottom: 50px;
`