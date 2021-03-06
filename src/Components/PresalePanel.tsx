import { green } from '@material-ui/core/colors';
import React from 'react';
import DiscordLogo from '../Images/discord.png';
import TelegramLogo from '../Images/telegram.png';
import WebsiteLogo from '../Images/website.png';
import TwitterLogo from '../Images/twitter.png';
import TempLogo from '../Images/Logo-Dark.png';
import KycLogo from '../Images/kyc.png'
import * as Styled from '../Components/PresalePanelStyles';

interface Props {
    theme: string;
    projectName: string;
    status: string;
    swapRate: string;
    cap: number;
    progress?: number;
    startDate?: string;
    participents?: number;
}


const PresalePanel: React.FC<Props> = props => {
    const [depositValue, setDepositValue] = React.useState<any>(null);

    return (
        <Styled.Container>
            <Styled.HeadingRow>
                <Styled.PresaleName>{props.projectName}</Styled.PresaleName>
                <Styled.StatusContainer status={props.status}>
                    <Styled.Status>{props.status}</Styled.Status>
                </Styled.StatusContainer>
            </Styled.HeadingRow>
            <Styled.InfoHeadingContainer>
                <Styled.InfoHeadingInnerContainer width='90%'>
                    <Styled.InfoLink src={TelegramLogo} />
                    <Styled.InfoLink src={TwitterLogo} />
                    <Styled.InfoLink src={WebsiteLogo} />
                    <Styled.InfoLink src={DiscordLogo} />
                    <Styled.InfoLink src={KycLogo} />
                </Styled.InfoHeadingInnerContainer>
                <Styled.InfoHeadingInnerContainer>
                    <Styled.LiqudityContainer>
                        <Styled.LiquidityType>ETH</Styled.LiquidityType>
                    </Styled.LiqudityContainer>
                </Styled.InfoHeadingInnerContainer>
            </Styled.InfoHeadingContainer>
            <Styled.LogoContainer>
                <Styled.Logo src={TempLogo} />
            </Styled.LogoContainer>
            <Styled.InfoContainer>
                <Styled.InfoColumn width='40%'>
                    <Styled.InfoHeading>Swap Rate</Styled.InfoHeading>
                    <Styled.InfoValue>{props.swapRate}</Styled.InfoValue>
                </Styled.InfoColumn>
                <Styled.InfoColumn width='25%'>
                    <Styled.InfoHeading>Cap</Styled.InfoHeading>
                    <Styled.InfoValue>{props.cap}</Styled.InfoValue>
                </Styled.InfoColumn>
                <Styled.InfoColumn width='35%'>
                    <Styled.InfoHeading>Start Date</Styled.InfoHeading>
                    <Styled.InfoValue>{(props.startDate == null || props.startDate == 'TBA') ? 'TBA' : props.startDate}</Styled.InfoValue>
                </Styled.InfoColumn>
            </Styled.InfoContainer>
            <Styled.ProgressContainer>
                <Styled.ProgressHeading>Progress</Styled.ProgressHeading>
                <Styled.ProgressHeading secondary>{((props.participents > 0) && props.participents != null) ? `Paritcipants: ${props.participents}` : ''}</Styled.ProgressHeading>
                <Styled.Progress max='100' value={props.progress > 0 ? props.progress : 0} />
                <Styled.ProgressHeading highlight>0.0%</Styled.ProgressHeading>
                <Styled.ProgressHeading highlight secondary>100%</Styled.ProgressHeading>
            </Styled.ProgressContainer>
            {
                props.status == 'Open' ?
                    <Styled.BottomContainer>
                        <Styled.BottomHeading>Deposit</Styled.BottomHeading>
                        <Styled.DepositAmountInputContainer active={depositValue == null ? false : true}>
                            <Styled.DepositAmountInput onChange={e => setDepositValue(e)} placeholder='0.00' />
                            <Styled.DespositAmountInputLabel>ETH</Styled.DespositAmountInputLabel>
                        </Styled.DepositAmountInputContainer>
                        <Styled.DepositButton theme={props.theme} width='35%' text='Deposit' height='30px' primary />
                    </Styled.BottomContainer>
                : ''
            }
            { props.status == 'Completed' ? 
                <Styled.BottomContainer>
                    <Styled.BottomHeading>Claim</Styled.BottomHeading>
                    <Styled.ClaimContainer>
                        <Styled.ClaimLabel>{`${props.projectName} Tokens for Claim:`}</Styled.ClaimLabel>
                        <Styled.ClaimHighlight>{'12312121.111'}</Styled.ClaimHighlight>
                        <Styled.ClaimButton theme={props.theme} width='25%' text='Claim' height='30px' primary />
                    </Styled.ClaimContainer>
                </Styled.BottomContainer>
                : ''
            }

        </Styled.Container>
    )
}

export default PresalePanel;