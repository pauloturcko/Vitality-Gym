import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.backgroundMainColor};
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
    }
`;

export default GlobalStyles;
