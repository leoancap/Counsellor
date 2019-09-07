import React from "react";

import { IDoctor } from "types/domain";
import { Container } from "./styles";

interface IProps {
  doctor: IDoctor;
}

export function Card({ doctor }: IProps) {
  return <Container>{doctor.name}</Container>;
}
