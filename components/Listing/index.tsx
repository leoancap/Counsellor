import React from "react";

import { Container } from "./styles";
import { IProfessional } from "types/domain";
import { Card } from "components";

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
