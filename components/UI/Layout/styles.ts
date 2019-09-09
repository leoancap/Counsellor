import styled, { createGlobalStyle } from "styled";

export const MainContainer = styled.div`
  padding-top: 80px;
`;

export const GlobalStyles = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 200;
  }
  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 1px;
    line-height: 1.5;
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.dark};
  }
`;
