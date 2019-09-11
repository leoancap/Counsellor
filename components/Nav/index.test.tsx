import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styled/theme'
import { Nav } from '.'

it('should render', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>,
  )
  expect(container).toBeDefined()
})
