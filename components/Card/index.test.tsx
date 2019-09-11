import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import AppProvider from 'context'
import { theme } from 'styled/theme'
import { IAppState } from 'types/app'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { generateProfessionals } from 'utils/mockData'
import { Card } from '.'

it('should render', () => {
  const { container } = render(
    <AppProvider
      initialState={
        {
          calendarStructure: getCalendarStructure(0),
          professionals: generateProfessionals(1, 3),
        } as IAppState
      }
    >
      {({ professionals, calendarStructure }) => (
        <ThemeProvider theme={theme}>
          <Card professional={professionals[0]} />
        </ThemeProvider>
      )}
    </AppProvider>,
  )
  expect(container).toBeDefined()
})
