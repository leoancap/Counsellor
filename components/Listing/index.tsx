import React from 'react';

import { Card } from 'components';
import { IProfessional } from 'types/domain';
import { Container } from './styles';

interface IProps {
  professionals: IProfessional[];
}

export function Listing({ professionals }: IProps) {
  return (
    <Container>
      {professionals.map(professional => (
        <Card key={professional.name} professional={professional} />
      ))}
    </Container>
  );
}
