import styled, { createGlobalStyle } from "styled";

export const MainContainer = styled.main`
  padding-top: 80px;
`;

export const GlobalStyles = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-weight: 400;
  }
  body {
    box-sizing: border-box;
    font-family: Quicksand,sans-serif;
    letter-spacing: 1px;
    line-height: 1.5;
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.dark};
  }
`;
