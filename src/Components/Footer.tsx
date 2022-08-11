import styled from 'styled-components';
import TwitterImage from '../Images/twitter.png';
import TelegramImage from '../Images/telegram.png';
import DiscordImage from '../Images/discord.png';
import MediumImage from '../Images/medium.png';

interface Props {
    theme: string;
}

const Container = styled.div`
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    min-width: 100%;
    background-color: ${props => props.theme.bodyLighter};
    box-shadow: ${props => props.theme.boxShadow};
    justify-content: center;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

const SectionHeading = styled.h3`
    color: ${props => props.theme.textAlt};
    font-size: 20px;
    text-align: center;
    font-weight: lighter;
    margin: 0px;
    margin-top: 17.5px;
    margin-bottom: 10px;
`
const SocialContainer = styled.div`
    display: flex;
    margin-top: 5px;
    justify-content: center;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
const SocialItem = styled.img`
    width: 25px;
    margin: 10px;
`

const Footer: React.FC<Props> = props => {


    return (
        <Container>
            <SectionHeading>Connect with us on our socials!</SectionHeading>
            <SocialContainer>
                <a href='https://t.me/elevatePADannounce' target='_blank'>
                    <SocialItem src={TelegramImage} />
                </a>
                <a href='https://discord.com/invite/elevatepad' target='_blank'>
                    <SocialItem src={DiscordImage} />
                </a>
                <a href='https://medium.com/@elevatepad' target='_blank'>
                    <SocialItem src={MediumImage} />
                </a>
                <a href='https://twitter.com/ElevatePAD' target='_blank'>
                    <SocialItem src={TwitterImage} />
                </a>
            </SocialContainer>
        </Container>
    )
}

export default Footer;