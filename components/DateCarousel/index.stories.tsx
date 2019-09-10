import React from 'react'
import { storiesOf } from '@storybook/react'

import { DateCarousel } from '.'
import AppProvider from '../../context'
import { generateProfessionals } from '../../utils/mockData'
import { getCalendarStructure } from '../../utils/getCalendarStructure'
import { IAppState } from 'types/app'

const defaultState: IAppState = {
  timezone: 'Lisbon (+1)',
  calendarStep: 0,
  calendarStructure: getCalendarStructure(0),
  loadingStatus: 'done',
  isAppRunning: true,
  professionals: [],
}

storiesOf('Date Carousel', module).add('Date Carousel', () => (
  <AppProvider
    initialState={{
      ...defaultState,
    }}
  >
    {() => <DateCarousel />}
  </AppProvider>
))
