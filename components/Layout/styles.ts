import styled, { createGlobalStyle } from "styled-components";

export const MainContainer = styled.main`
  padding-top: 80px;
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
  }
`;
