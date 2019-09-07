import React from "react";

import { Container } from "./styles";
import { IDoctor } from "types/domain";
import { Card } from "components";

interface IProps {
  doctors: IDoctor[];
}

export function Listing({ doctors }: IProps) {
  return (
    <Container>
      {doctors.map(doctor => (
        <Card key={doctor.name} doctor={doctor} />
      ))}
    </Container>
  );
}
