import React from 'react'
import { storiesOf } from '@storybook/react'

import { Listing } from '.'
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

storiesOf('Listing', module).add('Professionals', () => (
  <AppProvider
    initialState={{
      ...defaultState,
      professionals: generateProfessionals(1, 4),
    }}
  >
    {({ professionals }) => <Listing professionals={professionals} />}
  </AppProvider>
))
