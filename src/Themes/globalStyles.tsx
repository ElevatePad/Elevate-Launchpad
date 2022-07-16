import { createGlobalStyle } from 'styled-components'; 
import { ThemeType } from '../App';

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.textPrimary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: auto;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'AkzidensGrotesk', sans-serif;
        transition: all 0.25s linear;
    }
 `
