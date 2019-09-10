import styled from 'styled';

export const Container = styled.div`
  @media (max-width: ${p => p.theme.breakpointLG}) {
    display: none;
  }
`;
