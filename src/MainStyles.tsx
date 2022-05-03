import styled from 'styled-components';
import Button from './Components/Common/Button'

interface Props {
    theme:string;
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
    opacity: 0.2;
    background-image: url(background-dark.png);
    background-position: center;
    background-size: cover;
    background-attachement: fixed;
`

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`

export const SectionHeading = styled.h3`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 17.5px;
    color: ${props => props.theme.textPrimary};
`
export const SectionDescription = styled.p`
    font-size: 15px;
    text-align: center;
    width: 100%;
    color: ${props => props.theme.textAlt}
`
export const SignupButton = styled(Button)`
    margin-bottom: 20px;
`