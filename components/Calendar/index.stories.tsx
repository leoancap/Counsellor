import { storiesOf } from '@storybook/react'
import React from 'react'

import { IAppState } from 'types/app'
import { generateRosterPerDay } from 'utils/generateRosterPerDay'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { generateProfessionals } from 'utils/mockData'
import { Calendar } from '.'
import AppProvider from '../../context'

const defaultState: IAppState = {
  timezone: 'Lisbon (+1)',
  calendarStep: 0,
  calendarStructure: getCalendarStructure(0),
  loadingStatus: 'done',
  isAppRunning: true,
  professionals: [],
}

const today = new Date().getDate()
const availabilitySlots = [
  generateRosterPerDay(today),
  generateRosterPerDay(today + 1),
  generateRosterPerDay(today + 2),
  generateRosterPerDay(today + 3),
]

storiesOf('Calendar', module).add('Professional', () => (
  <AppProvider
    initialState={{
      ...defaultState,
      professionals: generateProfessionals(1, 4),
    }}
  >
    {() => (
      <div style={{ width: '600px', height: '200px' }}>
        <Calendar availabilitySlots={availabilitySlots} />
      </div>
    )}
  </AppProvider>
))
