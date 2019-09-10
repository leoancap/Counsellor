import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '.'
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

storiesOf('Card', module).add('Professional', () => (
  <AppProvider
    initialState={{
      ...defaultState,
      professionals: generateProfessionals(1, 4),
    }}
  >
    {({ professionals }) => <Card professional={professionals[0]} />}
  </AppProvider>
))
