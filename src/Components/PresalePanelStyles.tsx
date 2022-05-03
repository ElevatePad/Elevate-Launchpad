import { styled } from '@material-ui/styles';
import Styled from 'styled-components'

interface Styles {
    status: string;
    width?: string;
    secondary?: boolean;
    highlight?: boolean;
}


const setStatusColors = (status: string) => {
    switch (status) {
        case 'Pending':
            return "background-color: #564724; color: #f0b90a";
            break;
        case 'Open':
            return "background-color: #5BA45B; color: #1E6C1E";
            break;
        case 'Completed':
            return "background-color: #A45555; color: #7D1818"
        default:
            break;
    }
}


export const Container = Styled.div`
    min-width: 400px;
    max-width: 400px;
    background-color: ${props => props.theme.bodyLighter};
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};

    @media screen and (max-width: 475px) {
        min-width: 95%;
        margin-left: 2.5%;
        margin-right: 2.5%;
    }
`
export const HeadingRow = Styled.div`
    width: 100%; 
    display: flex;
    flex-direction: flex-start;
`
export const PresaleName = Styled.h3`
    color: ${props => props.theme.textPrimary};
    font-size: 17.5px;
    text-align: left;
    margin-left: 10px;
    margin-top: 12.5px;
    margin-bottom: 0px;
    width: 50%;
`
export const StatusContainer = Styled.div<Pick<Styles, | 'status' | 'secondary'>>`
    margin-left: auto;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: ${props => props.theme.borderRounding};
    height: 25px;
    width: auto;
    ${({ status }) => setStatusColors(status)}
`

export const Status = Styled.h3`
    font-size: 12.5px;
    margin-top: 6.25px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
`
export const InfoHeadingContainer = Styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: flex-start;
`
export const InfoHeadingInnerContainer = Styled.div<Pick<Styles, | 'width'>>`
    width: ${props => props.width};
    margin-left: 5px;
    margin-top: 5px;
`
export const InfoLink = Styled.img`
    height: 100%;
    margin: 5px;
    height: 25px;
`
export const LogoContainer = Styled.div`
    max-width: 20%;
    margin-left: auto;
`
export const Logo = Styled.img`
    width: 90%;
    margin-top: 10%;
`
export const LiqudityContainer = Styled.div`
    width: 100%;
    background: transparent;
    border: 1px solid ${props => props.theme.button.borderHighlight};
    border-radius: ${props => props.theme.borderRounding};
    margin-left: 5px;
`
export const LiquidityType = Styled.h3`
    font-size: 12.5px;
    margin: 10px;
    text-align:center;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const InfoContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`
export const InfoColumn = Styled.div<Pick<Styles, | 'width'>>`
    width: ${props => props.width};
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
    justify-content: center;
`
export const InfoHeading = Styled.h3`
    color: ${props => props.theme.textAlt};
    font-size: 12.5px;
    width: 100%;
    text-align: center;
    font-weight: light;
    margin: 0px;
`
export const InfoValue = Styled.h3`
    color: ${props => props.theme.textPrimary};
    text-align: center;
    font-size: 15px;
    max-width: 100%;
    margin-top: 2.5px;
`
export const ProgressContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const ProgressHeading = Styled.h3<Pick<Styles, | 'secondary' | 'highlight' >>`
    color: ${props => props.theme.textAlt};
    font-size: 12.5px;
    min-width: 40%;
    text-align: left;
    font-weight: light;
    margin: 0px;
    margin-left: 10px;
    margin-bottom: 10px;

    ${({ secondary }) => secondary && `
        text-align: right;
        margin-left: auto;
        margin-right: 10px;
    `}

    ${({ highlight }) => highlight &&`
        color: ${props => props.them.textPrimary}
    `}
`
export const Progress = Styled.progress`
    webkit-appearance: none;
    appearance: none;
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    animation: animate-stripes 5s linear infinite;
    height: 15px;
    margin-bottom: 10px;
    
    ::-webkit-progress-bar {
        border-radius: ${props => props.theme.borderRounding};
            
    }
    ::-webkit-progress-value {
        background-color: ${props => props.theme.button.borderHighlight};
        border-radius: ${props => props.theme.borderRounding};
    }
     
    
`
export const Highlight = Styled.h3`
    font-size: 15px;
    color: ${props => props.theme.button.borderHighlight};
`