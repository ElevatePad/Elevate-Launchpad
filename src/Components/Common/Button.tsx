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
}

const ButtonObj = styled.button<Pick<Props, 'height' | 'width' | 'primary' | 'secondary' >>`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    border: 0px;
    border-radius: ${props => props.theme.button.borderRounding};
    color: ${props => props.theme.button.textColor};
    font-family: 'MoreSugar-Regular', sans-serif;
    font-weight: bold;
    -webkit-box-shadow: ${props => props.theme.button.boxShadow};
    box-shadow: ${props => props.theme.button.boxShadow};
    cursor:'pointer';

    ${({ primary, theme, disabled }) => primary && `
    background: ${disabled ? theme.buttonDisabled : theme.button.primaryBG};
`}

    ${({ secondary, theme, disabled }) => secondary && `
    background: ${disabled ? theme.buttonDisabled : theme.button.secondaryBG};
`}
`

const Button: React.FC<Props> = props => {

    return (
        <ButtonObj onClick={props.onClick} secondary={props.secondary} primary={props.primary} width={props.width} height={props.height} className={props.className}>{props.text}</ButtonObj>
    )
}

export default Button;