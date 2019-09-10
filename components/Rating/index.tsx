import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

import { Container, ReviewCount } from './styles';

interface IProps {
  reviews: number[];
}

export function Rating({ reviews }: IProps) {
  const average = Math.round(reviews.reduce((a, b) => a + b) / reviews.length);
  const arrayReviews = new Array(5)
    .fill(null)
    .map((_, i) => (i + average >= 5 ? true : false))
    .reverse();
  return (
    <Container>
      {arrayReviews.map((value, index) =>
        value ? (
          <MdStar key={index} color="#FDD330" />
        ) : (
          <MdStarBorder key={index} color="#FDD330" />
        ),
      )}
      <ReviewCount>({reviews.length} reviews)</ReviewCount>
    </Container>
  );
}
