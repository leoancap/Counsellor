import moment from 'moment'
import React, { useState } from 'react'

import { DateCarousel } from 'components'
import { useAppContext } from 'context'
import { IAvailabilitySlot } from 'types/domain'
import {
  CalendarHeader,
  CalendarText,
  Cell,
  Column,
  Container,
  NullCell,
  Table,
} from './styles'

interface IProps {
  availabilitySlots: IAvailabilitySlot[]
}

export const Calendar = ({ availabilitySlots }: IProps) => {
  const [appState] = useAppContext()
  const { timezone, calendarStructure, loadingStatus } = appState

  const [isTimetableOpen, setIsTimetableOpen] = useState(false)

  const timetable = calendarStructure.map(day =>
    availabilitySlots.filter(slot => day.isSame(slot.start, 'day')),
  )

  const maxNumberOfCells = Math.max(...timetable.map(day => day.length))
  const defaultNumberOfCells = 5

  const maxCellsArray = new Array(
    isTimetableOpen ? maxNumberOfCells : defaultNumberOfCells,
  ).fill(null)

  const showMoreOrLess = isTimetableOpen ? (
    <Cell onClick={() => setIsTimetableOpen(false)}>Less</Cell>
  ) : (
    <Cell onClick={() => setIsTimetableOpen(true)}>More</Cell>
  )
  const column = (maxCellsArray: null[], timetable: IAvailabilitySlot[]) =>
    maxCellsArray.map((_, index) =>
      index < timetable.length - 1 ? (
        <Cell key={index}>
          {moment(timetable[index].start).format('HH:mm')}
        </Cell>
      ) : (
        <NullCell key={index}>{`-`}</NullCell>
      ),
    )
  return (
    <Container>
      <CalendarHeader>
        <CalendarText>
          <h4>Schedule your session!</h4>
          <h6>Timezone: {timezone}</h6>
        </CalendarText>
        <DateCarousel />
      </CalendarHeader>
      <Table isLoading={loadingStatus === 'loading'}>
        {timetable.map((day, index) => (
          <Column key={day.toString() + index}>
            {column(maxCellsArray, day)}
            {showMoreOrLess}
          </Column>
        ))}
      </Table>
    </Container>
  )
}
