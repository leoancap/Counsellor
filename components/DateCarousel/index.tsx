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

interface IProps {
  data?: string;
}

export function DateCarousel({  }: IProps) {
  return (
    <Container>
      <ArrowWrapper disabled={true}>
        <IoIosArrowDropleftCircle size={30} />
      </ArrowWrapper>
      <DatesWrapper>
        <DayWrapper>
          <WeekDay>Dom</WeekDay>
          <MonthDay>SET 08</MonthDay>
        </DayWrapper>
        <DayWrapper>
          <WeekDay>Dom</WeekDay>
          <MonthDay>SET 08</MonthDay>
        </DayWrapper>
        <DayWrapper>
          <WeekDay>Dom</WeekDay>
          <MonthDay>SET 08</MonthDay>
        </DayWrapper>
        <DayWrapper>
          <WeekDay>Dom</WeekDay>
          <MonthDay>SET 08</MonthDay>
        </DayWrapper>
      </DatesWrapper>
      <ArrowWrapper disabled={false}>
        <IoIosArrowDroprightCircle size={30} />
      </ArrowWrapper>
    </Container>
  );
}
