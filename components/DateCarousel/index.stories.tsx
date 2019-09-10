import { storiesOf } from '@storybook/react'
import React from 'react'

import { IAppState } from 'types/app'
import { DateCarousel } from '.'
import AppProvider from '../../context'
import { getCalendarStructure } from '../../utils/getCalendarStructure'
import { generateProfessionals } from '../../utils/mockData'

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
