import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import AppProvider from 'context'
import { theme } from 'styled/theme'
import { IAppState } from 'types/app'
import { IProfessional } from 'types/domain'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { generateProfessionals } from 'utils/mockData'
import { Calendar } from '.'

let mockProfessionals: IProfessional[]
function Component() {
  mockProfessionals = generateProfessionals(1, 3)
  return (
    <AppProvider
      initialState={
        {
          calendarStructure: getCalendarStructure(0),
          professionals: mockProfessionals,
        } as IAppState
      }
    >
      {({ professionals }) => (
        <ThemeProvider theme={theme}>
          <Calendar availabilitySlots={professionals[0].availabilitySlots} />
        </ThemeProvider>
      )}
    </AppProvider>
  )
}

it('should render', () => {
  const { container } = render(<Component />)
  expect(container).toBeDefined()
})
