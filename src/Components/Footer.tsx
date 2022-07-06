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
    background-color: #28282A;
    box-shadow: ${props => props.theme.boxShadow};
    justify-content: center;
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
    width: 100%;
    justify-content: center;
`
const SocialItem = styled.img`
    width: 25px;
    margin: 10px;
`

const Footer:React.FC<Props> = props => {


    return (
        <Container>
                <SectionHeading>Connect with us on our socials!</SectionHeading>
                <SocialContainer>
                    <SocialItem src={TelegramImage}/>
                    <SocialItem src={DiscordImage} />
                    <SocialItem src={MediumImage} />
                    <SocialItem src={TwitterImage} />
                </SocialContainer>
        </Container>
    )
}

export default Footer;