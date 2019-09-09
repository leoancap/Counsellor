import styled, { css } from "styled";

type IDisabled = { disabled: boolean };
export const ArrowWrapper = styled.div<IDisabled>`
  svg {
    transform: translateY(10%);
    cursor: pointer;
    ${p =>
      p.disabled &&
      `
        opacity:0.5;
        cursor:unset;
    `}
  }
`;

export const Container = styled.div`
  display: flex;
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
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const MonthDay = styled.span`
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
`;
