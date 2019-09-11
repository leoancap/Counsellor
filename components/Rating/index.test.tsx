import { render } from '@testing-library/react'

import { Rating } from '.'

const mockedReviews = [1, 2, 3]

it('should render', () => {
  const { container } = render(<Rating reviews={mockedReviews} />)
  expect(container).toBeDefined()
})

it('should have the corresponding number of reviews', () => {
  const { getByText } = render(<Rating reviews={mockedReviews} />)
  const reviewCount = getByText(/reviews/)
  expect(reviewCount.TEXT_NODE).toEqual(3)
})

it('should have the corresponding number of full stars', () => {
  const { getAllByTestId } = render(<Rating reviews={mockedReviews} />)
  const fullStars = getAllByTestId('full-star')
  expect(fullStars.length).toEqual(2)
})

it('should have the corresponding number of empty stars', () => {
  const { getAllByTestId } = render(<Rating reviews={mockedReviews} />)
  const emptyStars = getAllByTestId('empty-star')
  expect(emptyStars.length).toEqual(3)
})
