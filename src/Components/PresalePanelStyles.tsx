import { styled } from '@material-ui/styles';
import Styled from 'styled-components'
import Button from '../Components/Common/Button'

interface Styles {
    status: string;
    width?: string;
    secondary?: boolean;
    active?: boolean;
    highlight?: boolean;
}


const setStatusColors = (status: string) => {
    switch (status) {
        case 'Pending':
            return "background-color: #564724; color: #f0b90a";
            break;
        case 'Voting':
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
    background-color: ${props => props.theme.body};
    display: flex;
    flex-wrap: wrap;
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};
    font-weight: lighter;
    margin-top: 20px;
    margin-right: 20px;

    @media screen and (max-width: 730px) {
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
    font-weight: inherit;
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
    font-weight: bold;
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
    font-weight: inherit;
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
    font-weight: inherit;
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
    font-weight: inherit;
    margin-top: 2.5px;
`
export const ProgressContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const ProgressHeading = Styled.h3<Pick<Styles, | 'secondary' | 'highlight'>>`
    color: ${props => props.theme.textAlt};
    font-size: 12.5px;
    min-width: 40%;
    text-align: left;
    font-weight: inherit;
    margin: 0px;
    margin-left: 10px;
    margin-bottom: 10px;


    ${({ secondary }) => secondary && `
        text-align: right;
        margin-left: auto;
        margin-right: 10px;
    `}

    ${({ highlight }) => highlight && `
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

export const BottomContainer = Styled.div`
    width: 90%; 
    margin-left: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-top: 0.75px dashed ${props => props.theme.textHighlight};
`

export const BottomHeading = Styled.h3`
    margin: 0px;
    width: 100%;
    margin-top: 7.5px;
    font-size: 15px;
    font-size: ${props => props.theme.textPrimary};
    text-align: center;
`
export const DepositAmountInputContainer = Styled.div<Pick<Styles, 'active'>>`
    width: 55%;
    margin-left: 2.5%;
    max-height: 40px;
    height: 35px;
    display: flex;
    background-color: ${props => props.theme.textAlt};
    border-radius: ${props => props.theme.borderRounding};
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1.5px solid ${props => props.active ? props.theme.textHighlight : props.theme.error};
    -webkit-box-shadow: ${props => props.active ? 'inset 0px 0px 10px 15px rgba(3,209,155,0.15)' : 'inset 0px 0px 10px 10px rgba(206,39,81,0.15)'}; 
    box-shadow: ${props => props.active ? 'inset 0px 0px 10px 15px rgba(3,209,155,0.15)' : 'inset 0px 0px 10px 10px rgba(206,39,81,0.15)'};
`
export const DepositAmountInput = Styled.input`
    border: hidden;
    outline: none;
    max-width: 69%;
    color: ${props => props.theme.body};
    font-size: 17.5px;
    height: 17.5px;
    margin-top: 9px;
    margin-left: 5px;
    background-color: transparent;
`
export const DespositAmountInputLabel = Styled.h3`
    font-size: 15px;
    width: 30%;
    text-align: right;
    margin-bottom: 7.5px;
    margin-top: 7.5px;
    margin-right: 5px;
    font-weight: bold;
    color: ${props => props.theme.body};
`
export const DepositButton = Styled(Button)`
    margin-top: 12.5px;
    margin-left: auto;
    margin-right: 5%;
`
export const ClaimContainer = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ClaimLabel = Styled.h3`
    margin-top: 5px;
    margin-left: 15px;
    width: 33%;
    font-size: 12.5px;
    color: ${props => props.theme.textPrimary};
    vertical-align: middle;
`
export const ClaimHighlight = Styled.h3`
    width: 33%
    margin: 0px;
    margin-top: 5px;
    max-width: 25%;
    margin-left: 5px;
    overflow-wrap: break-word;
    font-size: 15px;
    color: ${props => props.theme.textHighlight};
`
export const ClaimButton = Styled(Button)`
    margin-left: auto;
    margin-right: 5%;
`