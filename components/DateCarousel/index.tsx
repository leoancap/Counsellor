import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import {
  Container,
  DatesWrapper,
  DayWrapper,
  WeekDay,
  MonthDay,
  ArrowWrapper,
} from "./styles";
import moment, { Moment } from "moment";
import { useAppContext } from "context";

interface IProps {}

export function DateCarousel({  }: IProps) {
  const [appState, setAppState] = useAppContext();
  const { calendarStructure, calendarStep } = appState;
  return (
    <Container>
      <ArrowWrapper
        onClick={() => {
          setAppState({ ...appState, calendarStep: calendarStep - 4 });
        }}
        disabled={calendarStep === 0}
      >
        <IoIosArrowDropleftCircle size={30} />
      </ArrowWrapper>
      <DatesWrapper>
        {calendarStructure.map(day => (
          <DayWrapper key={day.valueOf()}>
            <WeekDay>{day.format("ddd")}</WeekDay>
            <MonthDay>{day.format("MMM DD").toUpperCase()}</MonthDay>
          </DayWrapper>
        ))}
      </DatesWrapper>
      <ArrowWrapper
        onClick={() => {
          setAppState({ ...appState, calendarStep: calendarStep + 4 });
        }}
        disabled={false}
      >
        <IoIosArrowDroprightCircle size={30} />
      </ArrowWrapper>
    </Container>
  );
}
