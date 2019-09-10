import { configure, addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { theme } from '../styled/theme'

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withThemesProvider([theme]))
configure(loadStories, module)
