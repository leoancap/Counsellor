import { render } from '@testing-library/react'

import AppProvider from 'context'
import { ThemeProvider } from 'styled'
import { theme } from 'styled/theme'
import { IAppState } from 'types/app'
import { IProfessional } from 'types/domain'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { generateProfessionals } from 'utils/mockData'
import { ProfessionalInfo } from '.'

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
          <ProfessionalInfo {...professionals[0]} />
        </ThemeProvider>
      )}
    </AppProvider>
  )
}

it('should render', () => {
  const { container } = render(<Component />)
  expect(container).toBeDefined()
})

it('should have the name of the professional passed in', () => {
  const name = mockProfessionals[0].name
  const { getByTestId } = render(<Component />)
  const container = getByTestId('fullname')
  expect(container.firstChild.nodeValue).toBe(name)
})
