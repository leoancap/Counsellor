import React from "react";

import {
  Container,
  CalendarHeader,
  Table,
  Cell,
  Column,
  CalendarText,
} from "./styles";
import { DateCarousel } from "components";
import { useAppContext } from "context";

interface IProps {}

export const Calendar = ({  }: IProps) => {
  const [appState] = useAppContext();
  const { timezone } = appState;
  console.log(appState);
  return (
    <Container>
      <CalendarHeader>
        <CalendarText>
          <h4>Schedule your session!</h4>
          <h6>Timezone: {timezone}</h6>
        </CalendarText>
        <DateCarousel />
      </CalendarHeader>
      <Table>
        <Column>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
        </Column>
        <Column>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
        </Column>
        <Column>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
        </Column>
        <Column>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
          <Cell>21:00</Cell>
        </Column>
      </Table>
    </Container>
  );
};
