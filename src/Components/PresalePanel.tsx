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
                <Styled.Progress max='100' value={props.progress > 0 ? props.progress : 0}/>
                <Styled.ProgressHeading highlight>0.0%</Styled.ProgressHeading>
                <Styled.ProgressHeading highlight secondary>100%</Styled.ProgressHeading>
            </Styled.ProgressContainer>
        </Styled.Container>
    )
}

export default PresalePanel;