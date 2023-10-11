import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0;
        background-color:${props => props.specialPage ? '#ECECEC' : '#FFF'};
        font-family: font-family: Arial, Helvetica, sans-serif;
        color: "#666";
    }
`;

export default GlobalStyle;