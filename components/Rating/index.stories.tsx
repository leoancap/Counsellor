import { storiesOf } from '@storybook/react'
import React from 'react'

import { Rating } from '.'

const mockReviews5 = [5, 5, 5, 5]
const mockReviews4 = [3, 5, 4]
const mockReviews1 = [1]

storiesOf('Star Rating', module)
  .add('Star Rating with 5 stars', () => <Rating reviews={mockReviews5} />)
  .add('Star Rating with 4 stars', () => <Rating reviews={mockReviews4} />)
  .add('Star Rating with 1 stars', () => <Rating reviews={mockReviews1} />)
