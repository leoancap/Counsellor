import styled, { css } from "styled";

type IDisabled = { disabled: boolean };
export const ArrowWrapper = styled.div<IDisabled>`
  svg {
    transform: translateY(10%);
    cursor: pointer;
  }
  ${p =>
    p.disabled &&
    `
        pointer-events:none;
        opacity:0.5;
        cursor:unset;
    `}
`;

export const Container = styled.div`
  display: flex;
  padding: 0.3em;
`;

export const DatesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 0 1em;
`;

export const DayWrapper = styled.div`
  display: grid;
  align-content: flex-start;
`;

export const WeekDay = styled.span`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const MonthDay = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;
