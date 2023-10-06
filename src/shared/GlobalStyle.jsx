import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* textColor가 보통은 회색인데 가끔 다른 색상 쓰일 때는 <GlobalStyle textColor="#000" /> 형식으로 사용할 수 있습니다=*/
    body {
        margin: 0 auto;
        padding: 0;
        background-color: #FFF;
        font-family: font-family: Arial, Helvetica, sans-serif;
        color: ${({ textColor }) => textColor || "#666"};
    }
`;

export default GlobalStyle;