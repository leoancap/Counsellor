import React from 'react'
import { storiesOf } from '@storybook/react'

import { Nav } from '.'

storiesOf('Nav', module)
  .add('Nav', () => <Nav />)
  .add('Nav Scrolled', () => (
    <div style={{ height: '120vh' }}>
      <Nav />
    </div>
  ))
