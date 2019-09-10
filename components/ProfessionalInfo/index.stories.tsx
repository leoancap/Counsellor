import React from 'react'

import { storiesOf } from '@storybook/react'

import { ProfessionalInfo } from '.'

const availabilitySlots = [
  {
    start: '',
    end: '',
  },
]

const mockProfessional = {
  name: 'Carl Jung',
  profession: 'Psychotherapist',
  location: 'Switzerland',
  complaints: ['Analytical psychology', 'Unconscious complex', 'Psychotherapy'],
  summary:
    'was a Swiss psychiatrist and psychoanalyst who founded analytical psychology. Jung\'s work was influential in the complaints of psychiatry, anthropology, archaeology, literature, philosophy, and religious studies. Jung worked as a research scientist at the famous Burghölzli hospital, under Eugen Bleuler.',
  reviews: [5, 4, 4, 3, 3],
  ratesPerHour: 160,
  availabilitySlots,
}

storiesOf('ProfessionalInfo', module).add('ProfessionalInfo', () => (
  <ProfessionalInfo {...mockProfessional} />
))
