import styled, { css, keyframes } from 'styled-components'
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    theme: string;
    close: () => void;
    open: boolean;
}

let animState = false;

const OpenAnimationFrames = keyframes`
    from {
        margin-top: 0px;
        -webkit-box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.0); 
        box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.0);
    }
    to {
        margin-top: 25px;
        -webkit-box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.5);
    }
`
const CloseAnimationFrames = keyframes`
    to {
        margin-top: -10px;
        min-width: 0px;
        min-height: 0px;
        max-height: 0px;
        margin-left: -200px;
        -webkit-box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.0); 
        box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.0);
    }
    from {
        margin-top: 25px;
        min-width: 200px;
        min-height: 226px;
        margin-left: -200px;
        -webkit-box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.5);
    }
`
const OpenAnimation = styled.div<Pick<Props, 'open'>>`
    animation: ${css`${OpenAnimationFrames}`} .25s ease-in;
`
const CloseAnimation = styled.div`
    animation: ${css`${CloseAnimationFrames}`} .5s;
`

const Container = styled(OpenAnimation) <Pick<Props, 'open'>>`
    position: relative;
    z-index: 100000000000000;
    min-width: 200px;
    min-height: 200px;
    max-height: 500px;
    opacity: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 25px;
    background-color: ${props => props.theme.bodyLighter};
    margin-left: -200px;
    margin-bottom: -150px;
    border-radius: ${props => props.theme.borderRounding};
    border: 1px solid ${props => props.theme.textHighlight};
    -webkit-box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 50px 5000px rgba(0,0,0,0.5);
}
`
const Closed = styled(CloseAnimation) <Pick<Props, 'open'>>`
    position: relative;
    z-index: -100000000;
    border-radius: ${props => props.theme.borderRounding};
`

const LinkTo = styled(Link)`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.textHighlight};
    text-decoration: none;
`
const ExternalLink = styled.a`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.textHighlight};
    text-decoration: none;
`

const Item = styled.h3`
    min-width: 100%;
    font-size: 15px;
    font-weight: bold;
    margin-top: 7.5px;
    margin-bottom: 5px;
    color: ${props => props.theme.textPrimary};
    text-align: center;
    transition opacity 2s;

    &:hover {
        color: ${props => props.theme.textHighlight};
    }
`

const NavDropdown: React.FC<Props> = props => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        console.log(animState);
    }, [props.open])

    return (
        <>
            {
                props.open ?
                    <Container open={props.open}>
                        <LinkTo to='/elevate-pad'>
                            <Item>ElevatePAD</Item>
                        </LinkTo>
                        <LinkTo to='/elevate-meme'>
                            <Item >ElevateMEME</Item>
                        </LinkTo>
                        <LinkTo to='/'>
                            <Item >ElevateDAO</Item>
                        </LinkTo>
                        <LinkTo to='/dashboard'>
                            <Item >Dashboard</Item>
                        </LinkTo>
                        <LinkTo to='/elevate-lock'>
                            <Item >Locker</Item>
                        </LinkTo>
                        <ExternalLink href='https://elevatepad.gitbook.io/elevate-usdelev/' target='_blank'>
                            <Item >Whitepaper</Item>
                        </ExternalLink>
                        <LinkTo to='/partners'>
                            <Item >Partners</Item>
                        </LinkTo>
                        <LinkTo to='/nft'>
                            <Item>NFT's</Item>
                        </LinkTo>
                    </Container>
                    :
                    <Closed open={props.open} />
            }
        </>
    )
}

export default NavDropdown;