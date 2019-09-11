import React from 'react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

import { useAppContext } from 'context'
import {
  ArrowWrapper,
  Container,
  DatesWrapper,
  DayWrapper,
  MonthDay,
  WeekDay,
} from './styles'

export function DateCarousel() {
  const [appState, setAppState] = useAppContext()
  const { calendarStructure, calendarStep } = appState
  return (
    <Container>
      <ArrowWrapper
        data-testid="prev-arrow"
        onClick={() => {
          if (calendarStep !== 0) {
            setAppState({ ...appState, calendarStep: calendarStep - 4 })
          }
        }}
        disabled={calendarStep === 0}
      >
        <IoIosArrowDropleftCircle size={30} />
      </ArrowWrapper>
      <DatesWrapper data-testid="dates">
        {calendarStructure.map(day => (
          <DayWrapper key={day.valueOf()}>
            <WeekDay>{day.format('ddd')}</WeekDay>
            <MonthDay>{day.format('MMM DD').toUpperCase()}</MonthDay>
          </DayWrapper>
        ))}
      </DatesWrapper>
      <ArrowWrapper
        data-testid="next-arrow"
        onClick={() => {
          setAppState({ ...appState, calendarStep: calendarStep + 4 })
        }}
        disabled={false}
      >
        <IoIosArrowDroprightCircle size={30} />
      </ArrowWrapper>
    </Container>
  )
}
