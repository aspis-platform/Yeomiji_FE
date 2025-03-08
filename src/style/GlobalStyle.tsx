import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url("./font/Pretendard-Bold.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src: url("./font/Pretendard-ExtraBold.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("./font/Pretendard-Medium.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url("./font/Pretendard-Regular.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url("./font/Pretendard-SemiBold.woff") format("woff");
  }

  body {
    font-family: "Pretendard";
  }
`;

export default GlobalStyle;
