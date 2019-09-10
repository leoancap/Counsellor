import styled, { css } from 'styled'

export const Container = styled.div``

export const CalendarHeader = styled.div`
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const CalendarText = styled.div`
  background: ${p => p.theme.primary};
  color: white;
  font-weight: bold;
  padding: 0.5em 0;
  margin-bottom: 0.3em;
  text-align: center;
  h4 {
    font-weight: bold;
  }
  h6 {
    font-weight: normal;
  }
`

export const Table = styled.div<{ isLoading: boolean }>`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5em;
  background: white;
  padding: 10px 35px;
  margin-top: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${({ isLoading }) =>
    isLoading &&
    `
    * {
      filter: blur(4px);
    }
  `}
`

export const Column = styled.div`
  display: grid;
  grid-gap: 0.5em;
`

const baseCellCSS = css`
  color: ${p => p.theme.textColor};
  font-weight: bold;
  font-size: 16px;
  padding: 0.3em;
  text-align: center;
  cursor: pointer;
`

export const Cell = styled.div`
  background-color: ${p => p.theme.lightGray};
  ${baseCellCSS}
`

export const NullCell = styled.div`
  ${baseCellCSS}
  cursor: default;
`
