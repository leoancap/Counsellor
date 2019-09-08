import styled from "styled";

interface IInvert {
  invert: boolean;
}

export const Container = styled.header<IInvert>`
  height: 80px;
  background-color: ${p => p.theme.foreground};
  display: grid;
  justify-content: flex-start;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 1em;
  padding: 0 2em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s;
  border-bottom: 1px solid ${p => p.theme.primary};
  ${({ invert }) =>
    invert &&
    `
      background-color: white;
      color: ${p => p.theme.primary};
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
  ${({ invert }) =>
    invert &&
    `
      border: 1px solid #3177df;
      color: #3177df;
  `}
`;

export const LogoText = styled.h3<IInvert>`
  color: white;
  align-self: center;
  ${({ invert }) =>
    invert &&
    `
      color: #3177df;
  `}
`;
