import { fireEvent, render } from '@testing-library/react'
import moment from 'moment'
import { ThemeProvider } from 'styled-components'

import AppProvider from 'context'
import { theme } from 'styled/theme'
import { IAppState } from 'types/app'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { DateCarousel } from '.'

let mockCalendar: moment.Moment[]
function Component() {
  mockCalendar = getCalendarStructure(0)
  return (
    <AppProvider
      initialState={
        {
          calendarStructure: mockCalendar,
          calendarStep: 0,
        } as IAppState
      }
    >
      {() => (
        <ThemeProvider theme={theme}>
          <DateCarousel />
        </ThemeProvider>
      )}
    </AppProvider>
  )
}

it('should render', () => {
  const { container } = render(<Component />)
  expect(container).toBeDefined()
})

it('should be unable to click prev as init', () => {
  const { getByTestId } = render(<Component />)
  const prevArrow = getByTestId('prev-arrow')
  const dates = getByTestId('dates')
  const today = dates.firstChild.textContent
  const newToday = today.split('').join('')
  fireEvent.click(prevArrow)

  expect(today).toBe(newToday)
})

it('should go forward by click next arrow', () => {
  const { getByTestId } = render(<Component />)
  const nextArrow = getByTestId('next-arrow')
  const dates = getByTestId('dates')
  fireEvent.click(nextArrow)
  const fourthDay = dates.lastChild.textContent

  const weekDay = mockCalendar[3].clone()
  const monthDay = mockCalendar[3].clone()

  expect(fourthDay).toBe(
    weekDay.add(4, 'd').format('ddd') +
      monthDay
        .add(4, 'd')
        .format('MMM DD')
        .toUpperCase(),
  )
})
