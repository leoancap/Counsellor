import styled from "styled";

interface IInvert {
  invert: boolean;
}

export const Container = styled.header<IInvert>`
  height: 80px;
  background-color: ${p => p.theme.foreground};
  /* display: grid;
  justify-content: flex-start;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 1em; */
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s;
  border-bottom: 1px solid ${p => p.theme.primary};
  ${({ invert, theme }) =>
    invert &&
    `
      background-color: white;
      color: ${theme.primary};
  `}
`;

export const Logo = styled.div<IInvert>`
  height: 2em;
  width: 2em;
  border: 1px solid white;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  display: grid;
  justify-content: center;
  align-content: center;
  color: white;
  font-family: cursive;
  transition: all 0.3s;
  margin-right: 1em;
  ${({ invert, theme: { primary } }) =>
    invert &&
    `
      border: 1px solid ${primary};
      color: ${primary};
  `}
`;

export const LogoText = styled.h3<IInvert>`
  color: white;
  font-weight: normal;
  align-self: center;
  margin-right: 1em;
  ${({ invert, theme }) =>
    invert &&
    `
      color: ${theme.primary};
  `}
`;
