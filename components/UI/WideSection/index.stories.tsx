import { storiesOf } from '@storybook/react'
import React from 'react'

import { WideSection } from '.'

storiesOf('WideSection', module).add('The plain componenent', () => (
  <WideSection>
    <div style={{ background: 'lightgreen' }}>I am a WideSection</div>
  </WideSection>
))
