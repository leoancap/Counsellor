import styled from "styled";

export const Container = styled.div`
  display: none;
  @media (min-width: ${p => p.theme.breakpointLG}) {
    display: block;
  }
`;
