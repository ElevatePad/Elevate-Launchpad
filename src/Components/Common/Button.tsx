import React from 'react';
import styled from 'styled-components';

interface Props {
    theme: string;
    height?: string;
    width?: string;
    className?: string;
    text: string;
    primary?: boolean;
    secondary?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const ButtonObj = styled.button<Pick<Props, 'height' | 'width' | 'primary' | 'secondary' >>`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    border: 0px;
    border-radius: ${props => props.theme.button.borderRounding};
    color: white;
    font-family: 'Audiowide-Regular', sans-serif;
    font-weight: bold;
    -webkit-box-shadow: ${props => props.theme.button.boxShadow};
    box-shadow: ${props => props.theme.button.boxShadow};
    cursor:'pointer';

    &:hover {
        -webkit-box-shadow:  0px 0px 25px 7.5px rgba(0,0,0,0.2);
        box-shadow:  0px 0px 25px 7.5px rgba(0,0,0,0.2); 
    }

    ${({ primary, theme, disabled }) => primary && `
    background: ${disabled ? theme.buttonDisabled : theme.button.primaryBG};
`}

    ${({ secondary, theme,  }) => secondary && `
    color: ${props => props.theme.textHightlight} !important;
    background: transparent;
    border: 1px solid ${theme.button.borderHighlight}
`}
`

const Button: React.FC<Props> = props => {

    return (
        <ButtonObj onClick={props.onClick} secondary={props.secondary} primary={props.primary} width={props.width} height={props.height} className={props.className}>{props.text}</ButtonObj>
    )
}

export default Button;