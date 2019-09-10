import styled, { css } from 'styled'

export const Container = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 1rem auto;
  border-radius: 0.2rem;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 6fr 4fr;
  padding: 1em;
  @media (max-width: ${p => p.theme.breakpointLG}) {
    grid-template-columns: 1fr;
  }
`

export const ProfessionalAvatar = styled.div<{ isClickable: boolean }>`
  cursor: pointer;
  ${({ isClickable }) =>
    !isClickable &&
    `
    pointer-events:none;
    cursor: default;
  `}
`
