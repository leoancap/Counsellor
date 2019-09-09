import React from "react";

import {
  Container,
  CalendarHeader,
  Table,
  Cell,
  Column,
  CalendarText,
  NullCell,
} from "./styles";
import { DateCarousel } from "components";
import { useAppContext } from "context";
import { IAvailabilitySlot } from "types/domain";
import moment from "moment";

interface IProps {
  availabilitySlots: IAvailabilitySlot[];
}

export const Calendar = ({ availabilitySlots }: IProps) => {
  const [appState] = useAppContext();
  const { timezone, calendarStructure, calendarStep } = appState;

  const firstDay = availabilitySlots.filter(day =>
    calendarStructure[0].isSame(day.start, "day"),
  );

  const secondDay = availabilitySlots.filter(day =>
    calendarStructure[1].isSame(day.start, "day"),
  );
  const thirdDay = availabilitySlots.filter(day =>
    calendarStructure[2].isSame(day.start, "day"),
  );
  const fourthDay = availabilitySlots.filter(day =>
    calendarStructure[3].isSame(day.start, "day"),
  );
  const maxNumberOfCells = Math.max(
    firstDay.length,
    secondDay.length,
    thirdDay.length,
    fourthDay.length,
  );
  const maxCellsArray = new Array(maxNumberOfCells).fill(null);
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
          {maxCellsArray.map((_, index) =>
            index < firstDay.length - 1 ? (
              <Cell key={index}>
                {moment(firstDay[index].start).format("HH:mm")}
              </Cell>
            ) : (
              <NullCell key={index}>{"-"}</NullCell>
            ),
          )}
        </Column>
        <Column>
          {maxCellsArray.map((_, index) =>
            index < secondDay.length - 1 ? (
              <Cell key={index}>
                {moment(secondDay[index].start).format("HH:mm")}
              </Cell>
            ) : (
              <NullCell key={index}>{"-"}</NullCell>
            ),
          )}
        </Column>
        <Column>
          {maxCellsArray.map((_, index) =>
            index < thirdDay.length - 1 ? (
              <Cell key={index}>
                {moment(thirdDay[index].start).format("HH:mm")}
              </Cell>
            ) : (
              <NullCell key={index}>{"-"}</NullCell>
            ),
          )}
        </Column>
        <Column>
          {maxCellsArray.map((_, index) =>
            index < thirdDay.length - 1 ? (
              <Cell key={index}>
                {moment(thirdDay[index].start).format("HH:mm")}
              </Cell>
            ) : (
              <NullCell key={index}>{"-"}</NullCell>
            ),
          )}
        </Column>
      </Table>
    </Container>
  );
};
